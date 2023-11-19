type LatLng = {
  latitude: number;
  longitude: number;
};

export function isAddressInRange(
  location1: LatLng,
  location2: LatLng,
  radius: number,
): boolean {
  const rad = function (x: number) {
    return (x * Math.PI) / 180;
  };

  const R = 6378137; // Earth’s mean radius in meters
  const dLat = rad(
    (location2.latitude as number) - (location1?.latitude as number),
  );

  const dLong = rad(
    (location2.longitude as number) - (location1.longitude as number),
  );

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(location1.latitude as number)) *
      Math.cos(rad(location2.latitude as number)) *
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
