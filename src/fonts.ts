const FONT_FAMILY = `font-family: Hiragino Sans, 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;`;

type Creater = {
  weight?: number;
  size?: number | string;
  height?: number | string;
  spacing?: number | string;
};

const createTypography = ({ weight, size, height, spacing }: Creater) => {
  const fontWeight = `font-weight: ${weight || 'auto'};`;
  const fontSize = `font-size: ${size || 'auto'};`;
  const lineHeight = `line-height: ${height || 'auto'};`;
  const letterSpacing = `letter-spacing: ${spacing || 'auto'};`;
  const styles = [FONT_FAMILY, fontWeight, fontSize, lineHeight, letterSpacing];
  return styles.join(' ');
};

const Fonts = {
  desktop: {
    title: createTypography({ weight: 600, size: '36px', spacing: '-0.9px' }),
    subTitle: createTypography({ weight: 600, size: '24px', spacing: '-0.6px' }),
    caption: createTypography({ weight: 500, size: '18px', spacing: '-0.59px' }),
    text: createTypography({ weight: 300, size: '16px', height: '20px', spacing: '-0.59px' }),
  },
  input: {
    textField: createTypography({ weight: 300, size: '16px', height: '20px', spacing: '-0.59px' }),
  },
  button: {
    base: createTypography({ weight: 500, size: '16px', spacing: '0px' }),
    produce: createTypography({ weight: 500, size: '16px', spacing: '1.6px' }),
  },
  mobile: {
    title: createTypography({ weight: 500, size: '18px', height: '28px', spacing: '-0.45px' }),
    text: createTypography({ weight: 300, size: '14px', spacing: '0px' }),
  },
  300: `${FONT_FAMILY} font-weight: 300;`,
  400: `${FONT_FAMILY} font-weight: 400;`,
  500: `${FONT_FAMILY} font-weight: 500;`,
  600: `${FONT_FAMILY} font-weight: 600;`,
};

export default Fonts;
