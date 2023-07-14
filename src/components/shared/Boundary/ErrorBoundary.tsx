import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, useMemo } from "react";

function parseError(error: unknown): string {
  if (null == error) {
    return "Bilinmeyen hata";
  }

  if ("string" === typeof error) {
    return error;
  }

  if ("object" === typeof error) {
    const possible = ["message", "content", "reason"];

    for (const key of possible) {
      if (key in error) {
        return parseError(error[key as keyof typeof error]);
      }
    }
  }

  return "Tanımlanamayan hata";
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  error?: unknown;
  onRefresh?: () => void;
}

export default function ErrorBoundary({
  error,
  onRefresh,
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  const message = useMemo(
    () => (error ? parseError(error) : undefined),
    [error],
  );

  if (message) {
    return (
      <div className="p-4">
        <section
          {...props}
          className={clsx("p-4 bg-red-200 rounded-md text-red-700", className)}
        >
          <header>
            <h3 className="text-lg">Hata</h3>
          </header>

          <main className="mt-1 max-h-32 overflow-y-auto">
            <p className="text-sm">{message}</p>
          </main>

          <footer className="mt-2 flex justify-end">
            {onRefresh && (
              <button
                onClick={onRefresh}
                className="py-1 px-4 bg-white hover:underline rounded-md text-sm"
              >
                Yeniden dene
              </button>
            )}
          </footer>
        </section>
      </div>
    );
  }

  return <>{children}</>;
}
