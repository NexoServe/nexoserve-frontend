import { useEffect, useRef, useState } from 'react';

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
} from 'use-places-autocomplete';

import '@reach/combobox/styles.css';
import { base } from '../../../../css/base';
import { InfoModalAtom } from '../../../state/InfoModalState';
import {
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
} from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import Input from '../../Input/Input';
import TextArea from '../../TextArea/TextArea';

import useStyles from './css';
import { getDistance } from './helpers';
import { IOrderNavBarModalDelivery } from './types';

const OrderNavBarModalDelivery = ({
  setIsAddressValid,
  isAddressValid,
  setModal,
}: IOrderNavBarModalDelivery) => {
  const [address, setAddress] = useState('');

  const [deliveryAddress, setDeliveryAddress] = useRecoilState(
    OrderDeliveryAddressAtom,
  );
  const [additionalAddressInfo, setAdditionalAddressInfo] = useRecoilState(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const [deliveryDetails, setDeliveryDetails] = useRecoilState(
    OrderDeliveryDetailsAtom,
  );

  const [, setInfoModal] = useRecoilState(InfoModalAtom);

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);

  const classes = useStyles();

  useEffect(() => {
    if (deliveryAddress) {
      setIsAddressValid(true);
      setAddress(deliveryAddress);
    }
  }, [deliveryAddress]);

  useEffect(() => {
    async function checkAPIAvailability() {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
      const testUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${apiKey}`;

      try {
        const response = await fetch(testUrl);
        const data = await response.json();

        if (
          data.status === 'REQUEST_DENIED' ||
          data.status === 'OVER_QUERY_LIMIT' ||
          data.status === 'INVALID_REQUEST'
        ) {
          //TODO: Add Sentry here

          setModal(false);
          setInfoModal({
            infoModalType: 'delivery',
            showModal: true,
          });
        }
      } catch (error) {
        //TODO: Add Sentry here
        setModal(false);
        setInfoModal({
          infoModalType: 'delivery',
          showModal: true,
        });
      }
    }

    checkAPIAvailability();
  }, []);

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
          lat: restaurantDetails?.location.latitude as number,
          lng: restaurantDetails?.location.longitude as number,
        },
        latLng,
      );

      setAddress(address);

      if (distance <= (restaurantDetails?.radius as number)) {
        const placeId = descriptionToPlaceIdMap.current[address];
        const zipCodeComponent = await getDetails({
          placeId: placeId,
          fields: ['address_components'],
        });
        const zipCode = zipCodeComponent.address_components.find(
          (component: any) => component.types.includes('postal_code'),
        );

        if (address.endsWith(`${zipCode.long_name}, USA`)) {
          setDeliveryAddress(address);
        } else {
          const formattedAddress = address.replace(
            /, USA$/,
            ` ${zipCode.long_name}`,
          );
          setDeliveryAddress(formattedAddress);
        }

        setIsAddressValid(true);
      } else {
        console.log('The address is not within the radius');
        setIsAddressValid(false);
      }
    } catch (error) {
      setInfoModal({
        infoModalType: 'delivery',
        showModal: true,
      });
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
