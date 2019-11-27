import { Dimensions, ScaledSize } from 'react-native';

/**
 *
 * @param {ScaledSize} dimension the dimensions object
 * @param {*} limit the limit on the scaled dimension
 */
const msp = (dimension: ScaledSize, limit: number) =>
  dimension.scale * dimension.width >= limit ||
  dimension.scale * dimension.height >= limit;

export enum DeviseTypes {
  tablet = 'tablet',
  phone = 'phone',
}

export const isTablet = () => {
  const dimension = Dimensions.get('screen');
  return (
    (dimension.scale < 2 && msp(dimension, 1000)) ||
    (dimension.scale >= 2 && msp(dimension, 1900))
  );
};

export const isPhone = () => {
  return !isTablet();
};

export const getDeviseType = () => {
  return isTablet() ? DeviseTypes.tablet : DeviseTypes.phone;
};
