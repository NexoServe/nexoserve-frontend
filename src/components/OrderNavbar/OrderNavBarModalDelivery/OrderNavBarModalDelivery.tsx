import { useRef, useState } from 'react';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { useRecoilState, useRecoilValue } from 'recoil';
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
  getLatLng,
  LatLng,
} from 'use-places-autocomplete';

import '@reach/combobox/styles.css';
import { base } from '../../../../css/base';
import {
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderOpeningHoursAtom,
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
  const [address, setAddress] = useState('');

  const [, setDeliveryAddress] = useRecoilState(OrderDeliveryAddressAtom);
  const [additionalAddressInfo, setAdditionalAddressInfo] = useRecoilState(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const [deliveryDetails, setDeliveryDetails] = useRecoilState(
    OrderDeliveryDetailsAtom,
  );

  const openingHours = useRecoilValue(OrderOpeningHoursAtom);

  const classes = useStyles();

  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: 'us' },
    },
  });

  const descriptionToPlaceIdMap = useRef<Record<string, string>>({}); // To get the placeId from the description

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    // Get the lat/lng of the selected address
    try {
      const results = await getGeocode({ address });
      const latLng = await getLatLng(results[0]);
      const distance = getDistance(
        {
          lat: openingHours?.location.latitude as number,
          lng: openingHours?.location.longitude as number,
        },
        latLng,
      );

      setAddress(address);

      if (distance <= (openingHours?.radius as number)) {
        const placeId = descriptionToPlaceIdMap.current[address];

        const zipCodeComponent = await getDetails({
          placeId: placeId,
          fields: ['address_components'],
        });
        const zipCode = zipCodeComponent.address_components.find(
          (component: any) => component.types.includes('postal_code'),
        );

        const formattedAddress = address.replace(
          /, USA$/,
          ` ${zipCode.long_name}`,
        );

        setIsAddressValid(true);
        setDeliveryAddress(formattedAddress);
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
            defaultValue={''}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Type your address here"
            required
            className={classes.orderNavbarDeliveryAddressInput}
          />
        </label>

        <div className={classes.orderNavbarDeliveryAddressError}>
          {isAddressValid === false &&
            'Sorry, we cannot deliver to this address. Please enter a different address.'}
        </div>

        <ComboboxPopover className={classes.orderNavbarDeliveryAddressPopover}>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ place_id, description }) => {
                descriptionToPlaceIdMap.current[description] = place_id;
                return (
                  <ComboboxOption
                    className={classes.orderNavbarDeliveryAddressOption}
                    key={place_id}
                    value={description}
                  />
                );
              })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>

      <Input
        error={null}
        label="Ste, Apt, Floor"
        value={additionalAddressInfo}
        onChange={(e) => setAdditionalAddressInfo(e.target.value)}
        placeholder="Ste, Apt, Floor (Max 50 characters)"
        maxLength={50}
        style={{ marginTop: base(1) }}
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
