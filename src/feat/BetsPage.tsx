import { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import getBets from "../api/getBets";
import BetWidget from "../components/Bets/Bet";
import ErrorBoundary from "../components/shared/Boundary/ErrorBoundary";
import LoadingBoundary from "../components/shared/Boundary/LoadingBoundary";
import { Nesine } from "../types/Nesine";
import BetHeader from "../components/Bets/BetHeader";
import BasketProvider from "../utils/BasketProvider";
import Basket from "../components/Bets/Basket";

export default function BetsPage() {
  const [items, setItems] = useState<Nesine[]>();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<unknown>();
  const [refresh, setRefresh] = useState(() => Date.now());

  useEffect(() => {
    setPending(true);

    getBets()
      .then((data) => setItems(data))
      .then(() => setError(undefined))
      .catch((error) => setError(error))
      .then(() => setPending(false));
  }, [refresh]);

  return (
    <BasketProvider>
      <LoadingBoundary loading={pending} className="max-w-sm mx-auto">
        <ErrorBoundary
          error={error}
          onRefresh={() => setRefresh(Date.now())}
          className="max-w-sm mx-auto"
        >
          <section className="h-full flex flex-col">
            <header></header>

            <main className="flex-1">
              {items ? (
                <div className="flex flex-col h-full border border-gray-600">
                  <BetHeader title={`Etkinlik sayısı: ${items.length}`} />

                  <div className="flex-1 border-t border-gray-600">
                    {items ? (
                      <AutoSizer>
                        {({
                          width,
                          height,
                        }: {
                          width: number;
                          height: number;
                        }) => (
                          <FixedSizeList
                            width={width}
                            height={height}
                            itemCount={items.length}
                            itemSize={59}
                          >
                            {({ index, style }) => (
                              <BetWidget bet={items[index]} style={style} />
                            )}
                          </FixedSizeList>
                        )}
                      </AutoSizer>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </main>
          </section>

          <Basket />
        </ErrorBoundary>
      </LoadingBoundary>
    </BasketProvider>
  );
}
