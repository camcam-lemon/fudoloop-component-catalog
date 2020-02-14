export type ColorPreset = {
  default: string;
  hover: string;
  press: string;
  font: string;
};
export type Color = 'green' | 'blue' | 'yellow' | 'gray';

// パーソナルカラー
export const WHITE = '#FFFFFF';
export const NAVY = {
  default: '#34495e',
  dark: '#2c3e50',
};

export const RED = {
  default: '#ff4242',
};

// ボタンカラー
export const GRAY = {
  default: '#ecf0f1',
  hover: '#bdc3c7',
  press: '#95a5a6',
  font: NAVY.dark,
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
  font: NAVY.dark,
};

// オーバーレイカラー
export const OVERLAY = {
  '30%': 'rgba(52, 71, 94, 0.3)',
  '50%': 'rgba(0,0,0, 0.5)',
};
