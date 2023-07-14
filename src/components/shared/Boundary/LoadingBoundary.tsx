import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import Spinner from "../Spinner";

interface Props extends HTMLAttributes<HTMLDivElement> {
  loading: boolean;
  message?: string;
}

export default function LoadingBoundary({
  loading,
  message,
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  if (loading) {
    message ??= "Lütfen bekleyin";

    return (
      <div className="p-4">
        <section
          {...props}
          className={clsx(
            "p-4 bg-blue-200 rounded-md text-blue-700 flex",
            className,
          )}
        >
          <div className="flex-1">
            <header>
              <h3 className="text-2xl">Yükleniyor</h3>
            </header>

            <main className="mt-2 max-h-32 overflow-y-auto">
              <p>{message}</p>
            </main>
          </div>

          <footer className="flex items-center">
            <Spinner />
          </footer>
        </section>
      </div>
    );
  }

  return <>{children}</>;
}
