type BadgeProps = {
  text: string;
  className?: string;
};

const MainBadge = (props: BadgeProps) => {
  return (
    <span
      className={`inline-block rounded-full text-xs font-semibold mr-2 px-2.5 py-0.5 text-white bg-gray-600 ${props.className}`}
    >
      {props.text}
    </span>
  );
};

export const AltBadge = (props: BadgeProps) => {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full bg-gray-600 px-2 py-1 text-xs font-semibold text-white"
    >
      {props.text}
    </span>
  );
};

export default MainBadge;
