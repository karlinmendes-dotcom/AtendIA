export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex items-center gap-2.5 text-xl font-bold text-white">
    <div className="
      flex size-9 items-center justify-center rounded-xl bg-[#2dd4bf]
      shadow-lg shadow-[#2dd4bf]/20
    ">
      <svg
        className="size-5 text-black"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    </div>
    {!props.isTextHidden && (
      <span className="tracking-tight">
        Atend<span className="text-[#2dd4bf]">IA</span>
      </span>
    )}
  </div>
);
