import {
  GRAY,
  BLUE,
  GREEN,
  YELLOW,
  WHITE,
  Color,
  ColorPreset,
  GRAY_ALPHA,
  GREEN_ALPHA,
  BLUE_ALPHA,
  YELLOW_ALPHA,
  NAVY,
} from '../../colors';

type Variant = 'contained' | 'outlined' | 'text';
// type ColorManager = {
//   disabled: boolean;

// }

export const getColorPreset = (color: Color) => {
  switch (color) {
    case 'gray':
      return GRAY;
    case 'green':
      return GREEN;
    case 'blue':
      return BLUE;
    case 'yellow':
      return YELLOW;
    case 'navy':
      return NAVY;
    default:
      return GRAY;
  }
};

export const getAlphaColorPreset = (color: Color) => {
  switch (color) {
    case 'gray':
      return GRAY_ALPHA;
    case 'green':
      return GREEN_ALPHA;
    case 'blue':
      return BLUE_ALPHA;
    case 'yellow':
      return YELLOW_ALPHA;
    default:
      return GRAY_ALPHA;
  }
};

export const getSvgColor = (
  disabled?: boolean,
  fill?: React.CSSProperties['fill'],
  color?: Color,
) => {
  if (disabled) return GRAY.hover;

  if (fill) return fill;

  if (color) return getColorPreset(color).default;

  return WHITE;
};

export const variantBgColor = ({
  type,
  colors,
  variant,
  disabled,
}: {
  type: keyof ColorPreset;
  colors: ColorPreset;
  variant: Variant;
  disabled: boolean;
}) => {
  if (variant === 'text' || variant === 'outlined') {
    if (type === 'default') return 'unset';
    return disabled ? 'unset' : colors[type];
  }
  return disabled ? GRAY.default : colors[type];
};

// export const colorManager = ({
//   default: defaultColor,
//   checked: checkedColor,
//   disabled: disabledColor,
// }: )
