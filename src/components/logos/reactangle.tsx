import React from 'react';

const Reactangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3999 17.2222C20.3999 18.7563 19.1562 20 17.6221 20H8.17768C7.35514 20 6.63699 19.5531 6.25275 18.8889H2.62212C1.39482 18.8889 0.399902 17.894 0.399902 16.6667V3.33333C0.399902 2.10603 1.39483 1.11111 2.62212 1.11111H6.25275C6.63698 0.446887 7.35514 0 8.17768 0H17.6221C19.1562 0 20.3999 1.24365 20.3999 2.77778V17.2222ZM8.17768 1.11111H17.6221C18.5426 1.11111 19.2888 1.8573 19.2888 2.77778V17.2222C19.2888 18.1427 18.5426 18.8889 17.6221 18.8889H8.17768C7.56403 18.8889 7.06657 18.3914 7.06657 17.7778C7.06657 17.1641 7.56403 16.6667 8.17768 16.6667H15.9555V3.33333H8.17768C7.56403 3.33333 7.06657 2.83587 7.06657 2.22222C7.06657 1.60857 7.56403 1.11111 8.17768 1.11111ZM14.8443 4.44444V15.5556H8.17768C6.95038 15.5556 5.95546 16.5505 5.95546 17.7778H2.62212C2.00847 17.7778 1.51101 17.2803 1.51101 16.6667V3.33333C1.51101 2.71968 2.00847 2.22222 2.62212 2.22222H5.95546C5.95546 3.44952 6.95038 4.44444 8.17768 4.44444H14.8443Z"
      fill="#2E7D31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.9634 1.73611L15.9555 4.11901L15.1698 3.33333L18.1777 0.950437L18.9634 1.73611Z"
      fill="#2E7D31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9555 15.881L18.9634 18.2639L18.1777 19.0496L15.1698 16.6667L15.9555 15.881Z"
      fill="#2E7D31"
    />
  </svg>
);

export default Reactangle;
