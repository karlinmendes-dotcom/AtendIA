export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div
    className="rounded-xl px-6 py-10 text-center text-white"
    style={{
      background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #1E40AF 100%)',
    }}
  >
    <div className="text-3xl font-bold">
      {props.title}
    </div>

    <div className="mt-2 text-lg font-medium text-blue-100">
      {props.description}
    </div>

    <div className="mt-6">{props.buttons}</div>
  </div>
);
