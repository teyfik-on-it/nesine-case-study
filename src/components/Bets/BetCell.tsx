import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  w?: string;
  center?: boolean;
  selected?: boolean;
}

export default function BetCell({
  center = true,
  className,
  onClick,
  selected,
  w,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={clsx(
        w || "w-20",
        "truncate py-1 px-2 border-l border-gray-300 first:border-l-0 text-sm",
        center && "text-center",
        onClick && "select-none cursor-pointer",
        selected ? "bg-green-300" : onClick && "hover:bg-gray-100",
        className,
      )}
      onClick={onClick}
    />
  );
}
