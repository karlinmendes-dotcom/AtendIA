export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div className="
    rounded-xl bg-muted bg-linear-to-br from-blue-500 via-blue-600 to-blue-700
    px-6 py-10 text-center
  "
  >
    <div className="text-3xl font-bold text-white">
      {props.title}
    </div>

    <div className="mt-2 text-lg font-medium text-blue-100">
      {props.description}
    </div>

    <div className="mt-6">{props.buttons}</div>
  </div>
);
