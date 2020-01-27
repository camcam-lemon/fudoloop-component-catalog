import { GRAY, BLUE, GREEN, YELLOW } from '../../colors';

type Color = 'gray' | 'blue' | 'green' | 'yellow';

export const getButtonColorPreset = (color: Color) => {
  switch (color) {
    case 'gray':
      return GRAY;
    case 'green':
      return GREEN;
    case 'blue':
      return BLUE;
    case 'yellow':
      return YELLOW;
    default:
      return GRAY;
  }
};
