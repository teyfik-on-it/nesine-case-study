import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "./Spinner.module.scss";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  message?: string;
}

export default function Spinner({ message }: Props) {
  message ??= "Yükleniyor";

  return (
    <div className="relative w-8 h-8">
      <div className="absolute w-full h-full">
        <svg
          className={clsx(styles.spinner, "text-blue-500")}
          viewBox="0 0 50 50"
        >
          <circle
            className={styles.path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          ></circle>
        </svg>
      </div>
    </div>
  );
}
