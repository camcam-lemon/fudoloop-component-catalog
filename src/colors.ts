export type ColorPreset = {
  default: string;
  hover: string;
  press: string;
  font: string;
};
export type AlphaColorPreset = {
  '10%': string;
  '30%': string;
  '50%': string;
};
export type Color = 'green' | 'blue' | 'yellow' | 'gray' | 'navy';

// パーソナルカラー
export const WHITE = '#FFFFFF';
export const RED = {
  default: '#ff4242',
};

export const NAVY = {
  default: '#34495e',
  hover: '#5C6D7E',
  press: '#2c3e50',
  font: WHITE,
};
export const GRAY = {
  default: '#ecf0f1',
  hover: '#bdc3c7',
  press: '#95a5a6',
  font: NAVY.press,
};
export const GREEN = {
  default: '#58b947',
  hover: '#199603',
  press: '#148001',
  font: WHITE,
};
export const BLUE = {
  default: '#4ea6c6',
  hover: '#057199',
  press: '#016380',
  font: WHITE,
};
export const YELLOW = {
  default: '#ffbb42',
  hover: '#f6a411',
  press: '#e09102',
  font: NAVY.press,
};

// パーソナルアルファカラー
export const GRAY_ALPHA = {
  '10%': 'rgba(189, 195, 199, 0.1)',
  '30%': 'rgba(189, 195, 199, 0.3)',
  '50%': 'rgba(189, 195, 199, 0.5)',
};
export const GREEN_ALPHA = {
  '10%': 'rgba(25, 150, 3, 0.1)',
  '30%': 'rgba(25, 150, 3, 0.3)',
  '50%': 'rgba(25, 150, 3, 0.5)',
};
export const BLUE_ALPHA = {
  '10%': 'rgba(78, 166, 198, 0.1)',
  '30%': 'rgba(78, 166, 198, 0.3)',
  '50%': 'rgba(78, 166, 198, 0.5)',
};
export const YELLOW_ALPHA = {
  '10%': 'rgba(246, 164, 17, 0.1)',
  '30%': 'rgba(246, 164, 17, 0.3)',
  '50%': 'rgba(246, 164, 17, 0.5)',
};
export const RED_ALPHA = {
  '10%': 'rgba(255, 66, 66, 0.1)',
  '30%': 'rgba(255, 66, 66, 0.3)',
  '50%': 'rgba(255, 66, 66, 0.5)',
};

// オーバーレイカラー
export const OVERLAY = {
  '10%': 'rgba(0, 0, 0, 0.1)',
  '30%': 'rgba(0, 0, 0, 0.3)',
  '50%': 'rgba(0, 0, 0, 0.5)',
};
