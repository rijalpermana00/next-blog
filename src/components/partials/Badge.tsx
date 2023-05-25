type BadgeProps = {
  text: string;
  className?: string;
  url?: string;
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

export const TagBadge = (props: BadgeProps) => {
  return (
    <a href={props.url ?? '#'}>
      <div className="inline-flex items-center gap-1 rounded-lg bg-gray-300 dark:bg-gray-700 px-2 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 m-1">
        {props.text}
      </div>
    </a>
  )
}

export default MainBadge;
