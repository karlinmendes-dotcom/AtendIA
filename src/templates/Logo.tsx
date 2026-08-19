export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex items-center gap-2 text-xl font-bold">
    <div className="
      flex size-8 items-center justify-center rounded-lg bg-primary
      text-primary-foreground
    "
    >
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    </div>
    {!props.isTextHidden && (
      <span>
        Atend
        <span className="text-primary">IA</span>
      </span>
    )}
  </div>
);
