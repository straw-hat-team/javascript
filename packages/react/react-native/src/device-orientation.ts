import { Dimensions } from 'react-native';

export enum DeviceOrientationTypes {
  portrait = 'portrait',
  landscape = 'landscape',
}

export function isLandscape() {
  const dimension = Dimensions.get('screen');
  return dimension.width >= dimension.height;
}

export function isPortrait() {
  return !isLandscape();
}

export function getOrientation() {
  return isPortrait()
    ? DeviceOrientationTypes.portrait
    : DeviceOrientationTypes.landscape;
}
