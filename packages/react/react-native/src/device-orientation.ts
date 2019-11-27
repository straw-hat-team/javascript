import { Dimensions } from 'react-native';

export enum DeviceOrientationTypes {
  portrait = 'portrait',
  landscape = 'landscape',
}

export const isLandscape = () => {
  const dimension = Dimensions.get('screen');
  return dimension.width >= dimension.height;
};

export const isPortrait = () => {
  return !isLandscape();
};

export const getOrientation = () => {
  return isPortrait()
    ? DeviceOrientationTypes.portrait
    : DeviceOrientationTypes.landscape;
};
