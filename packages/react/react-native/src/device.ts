import { Dimensions, ScaledSize } from 'react-native';

function msp(dimension: ScaledSize, limit: number) {
  return (
    dimension.scale * dimension.width >= limit ||
    dimension.scale * dimension.height >= limit
  );
}

export enum DeviseTypes {
  tablet = 'tablet',
  phone = 'phone',
}

export function isTablet() {
  const dimension = Dimensions.get('screen');
  return (
    (dimension.scale < 2 && msp(dimension, 1000)) ||
    (dimension.scale >= 2 && msp(dimension, 1900))
  );
}

export function isPhone() {
  return !isTablet();
}

export function getDeviseType() {
  return isTablet() ? DeviseTypes.tablet : DeviseTypes.phone;
}
