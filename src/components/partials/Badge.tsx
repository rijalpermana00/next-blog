type BadgeProps = {
  text: string;
  className?: string;
};

const Badge = (props: BadgeProps) => {
  return (
    <span
      className={`inline-block rounded-full text-xs font-semibold mr-2 px-2.5 py-0.5 text-white bg-gray-600 ${props.className}`}
    >
      {props.text}
    </span>
  );
};

export default Badge;
