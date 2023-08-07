import { useEffect, useState } from 'react';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { useRecoilState } from 'recoil';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  LatLng,
} from 'use-places-autocomplete';

import '@reach/combobox/styles.css';
import {
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
} from '../../../state/OrderNavbar';
import Input from '../../Input/Input';
import TextArea from '../../TextArea/TextArea';

import useStyles from './css';
import { IOrderNavBarModalDelivery } from './types';

function getDistance(location1: LatLng, location2: LatLng) {
  const rad = function (x: number) {
    return (x * Math.PI) / 180;
  };

  const R = 6378137; // Earth’s mean radius in meters
  const dLat = rad(location2.lat - location1.lat);
  const dLong = rad(location2.lng - location1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(location1.lat)) *
      Math.cos(rad(location2.lat)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

const OrderNavBarModalDelivery = ({
  setIsAddressValid,
  isAddressValid,
}: IOrderNavBarModalDelivery) => {
  const [deliveryAddress, setDeliveryAddress] = useRecoilState(
    OrderDeliveryAddressAtom,
  );
  const [additionalAddressInfo, setAdditionalAddressInfo] = useRecoilState(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const [deliveryDetails, setDeliveryDetails] = useRecoilState(
    OrderDeliveryDetailsAtom,
  );

  const classes = useStyles();

  const adminAddress = '349 whitehall road albany ny 12208';
  const radius = 10 * 1609.34; // 10 miles in meters
  const [adminLocation, setAdminLocation] = useState<null | LatLng>(null);

  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'us' },
      location: new google.maps.LatLng(40.749934, -73.991834),
      radius: 100 * 1609.34, // 100 miles in meters
    },
  });

  console.log('data', data);

  useEffect(() => {
    // Get the lat/lng of the admin address
    getGeocode({ address: adminAddress })
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setAdminLocation(latLng);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, []);

  const handleSelect = async (address: string) => {
    console.log('address', address);
    setValue(address, false);
    clearSuggestions();

    // Get the lat/lng of the selected address
    try {
      const results = await getGeocode({ address });
      const latLng = await getLatLng(results[0]);
      const distance = getDistance(adminLocation as LatLng, latLng);

      if (distance <= radius) {
        console.log('The address is within the radius');
        setIsAddressValid(true);
        setDeliveryAddress(address);
      } else {
        console.log('The address is not within the radius');
        setIsAddressValid(false);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div>
      <Combobox
        style={{
          width: '100%',
        }}
        onSelect={handleSelect}
      >
        <label className={classes.orderNavbarInputLabel}>
          <div>
            Address{' '}
            <span className={classes.orderNavbarInputLabelRequired}>*</span>
          </div>

          <ComboboxInput
            defaultValue={deliveryAddress}
            value={deliveryAddress}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Type your address here"
            required
            className={classes.orderNavbarDeliveryAddressInput}
          />
        </label>

        <div>
          {isAddressValid === false && 'The address is not within the radius'}
        </div>

        <ComboboxPopover className={classes.orderNavbarDeliveryAddressPopover}>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ place_id, description }) => (
                <ComboboxOption
                  className={classes.orderNavbarDeliveryAddressOption}
                  key={place_id}
                  value={description}
                />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

      <Input
        error={null}
        label="Ste, Apt, Floor"
        value={additionalAddressInfo}
        onChange={(e) => setAdditionalAddressInfo(e.target.value)}
        placeholder="Ste, Apt, Floor"
      />

      <TextArea
        label="Delivery Details"
        placeholder="Enter delivery details here. (Max 140 characters)"
        maxLength={140}
        onChange={(e) => setDeliveryDetails(e.target.value)}
        value={deliveryDetails}
      />
    </div>
  );
};

export default OrderNavBarModalDelivery;
