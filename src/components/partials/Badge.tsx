type BadgeProps = {
  text: string;
  bgColor?: string | null;
  color?: string | null;
  optionalClass?: string | null;
};

const Badge = (props: BadgeProps) => {
  return (
    <span
      className={`inline-block rounded-full text-xs font-semibold mr-2 px-2.5 py-0.5 ${props.color ?? 'text-white'} ${props.bgColor ?? 'bg-gray-600'} ${props.optionalClass}`}
    >
      {props.text}
    </span>
  );
};

export default Badge;
