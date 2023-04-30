type BadgeProps = {
  text: string;
  bgColor?: string | null;
  color?: string | null;
  optionalClass?: string | null;
};

const Badge = (props: BadgeProps) => {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-sm font-semibold ${props.color ?? 'text-white'} ${props.bgColor ?? 'bg-blue-600'} ${props.optionalClass}`}
    >
      {props.text}
    </span>
  );
};

export default Badge;
