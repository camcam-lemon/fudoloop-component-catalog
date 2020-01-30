import { GRAY, BLUE, GREEN, YELLOW, WHITE, NAVY, Color, ColorPreset } from '../../colors';

type Variant = 'contained' | 'outlined' | 'text';

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

export const getSvgColor = (
  disabled?: boolean,
  fill?: React.CSSProperties['fill'],
  color?: Color,
) => {
  if (disabled) return GRAY.hover;

  if (fill) return fill;

  if (color) return getButtonColorPreset(color).default;

  return WHITE;
};

export const getFontColor = (color: Color) => {
  if (color === 'gray' || color === 'yellow') return NAVY.dark;
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
