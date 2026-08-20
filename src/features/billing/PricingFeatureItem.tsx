export const PricingFeatureItem = (props: {
  children: React.ReactNode;
  highlighted?: boolean;
  icon?: React.ReactNode;
}) => (
  <li
    className={`
      flex items-center text-sm
      ${props.highlighted
        ? 'font-semibold text-[#2dd4bf]'
        : 'text-gray-400'
      }
    `}
  >
    {props.icon ? (
      <span className="mr-2 shrink-0">{props.icon}</span>
    ) : (
      <svg
        className="mr-2 size-5 shrink-0 text-[#2dd4bf]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M5 12l5 5L20 7" />
      </svg>
    )}
    {props.children}
  </li>
);
