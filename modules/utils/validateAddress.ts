import axios from 'axios';
import { LatLng } from 'use-places-autocomplete';

function isAddressOutOfRange(
  location1: LatLng,
  location2: LatLng,
  radius: number,
) {
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

  if (distance <= radius) {
    return true;
  } else {
    return false;
  }
}

export const validateAddress = async (
  deliveryAddress: string,
  restaurantAddress: LatLng,
) => {
  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
      {
        params: {
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
          input: deliveryAddress,
          inputtype: 'textquery',
          fields: 'formatted_address',
        },
      },
    );

    if (
      response.data &&
      response.data.candidates &&
      response.data.candidates.length > 0
    ) {
      const deliveryGeocodeResponse = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
            address: deliveryAddress,
          },
        },
      );

      if (
        !deliveryGeocodeResponse.data ||
        !deliveryGeocodeResponse.data.results ||
        deliveryGeocodeResponse.data.results.length <= 0
      ) {
        return false;
      }

      console.log(
        'deliveryGeocodeResponse.data.results[0].geometry.location',
        deliveryGeocodeResponse.data.results[0].geometry.location,
      );

      const isAddressOutOfRangeBool = isAddressOutOfRange(
        deliveryGeocodeResponse.data.results[0].geometry.location,
        restaurantAddress,
        10 * 1609.34,
      );

      return isAddressOutOfRangeBool;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
