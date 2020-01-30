export const safetyNumberToString = (prop?: string | number) => {
  if (!prop) return 'unset';
  return typeof prop === 'number' ? `${prop}px` : prop;
};

export const createViewBox = (prop?: string | number) => {
  if (!prop) return '0 0 0 0';
  if (typeof prop === 'number') {
    return `0 0 ${prop} ${prop}`;
  }
  const size = prop.replace(/[^0-9]/g, '');
  return `0 0 ${size} ${size}`;
};

export const incompleteNode = (node: React.ReactNode) => {
  if (!node) return true;
  switch (typeof node) {
    case 'string':
      return true;
    case 'number':
      return true;
    case 'boolean':
      return true;
    default:
      return false;
  }
};

var x = 1;
