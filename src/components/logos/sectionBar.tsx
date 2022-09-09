import React from 'react';

const SectionBar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="255"
    height="34"
    viewBox="0 0 277 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="6" cy="17" r="6" fill="#3884F7" />
    <rect x="12" y="16" width="253" height="2" fill="#3884F7" />
    <circle
      cx="271"
      cy="17"
      r="6"
      transform="rotate(-180 271 17)"
      fill="#3884F7"
    />
  </svg>
);

export default SectionBar;
