import { h } from 'preact';

import icons from '../../scripts/icons';

export default function Icon({
  name,
  size = '24',
  color = 'var(--color-secondary)'
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={`min-width: ${size}; min-height: ${size}`}
    >
      <path d={icons[name]} fill={color} />
    </svg>
  );
}
