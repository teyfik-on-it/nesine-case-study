import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Nesine } from "../types/Nesine";

interface BasketItem {
  bet: Nesine;
  prop: string;
}

interface IContext {
  items: BasketItem[];
  select: (bet: BasketItem["bet"], odds: BasketItem["prop"]) => void;
  isSelected: (bet: BasketItem["bet"], odds: BasketItem["prop"]) => boolean;
}

const Context = createContext<IContext | null>(null);

interface Props {}

export default function BasketProvider({ children }: PropsWithChildren<Props>) {
  const [items, setValue] = useState<BasketItem[]>(() => []);
  const select = useCallback<IContext["select"]>(
    (bet, prop) =>
      setValue((prev) => {
        // Search if the bet already exists
        for (let i = 0; i < prev.length; i++) {
          const item = prev[i];

          // Check by bet code
          if (item.bet.C === bet.C) {
            prev = [...prev];

            // If bet exists with the same odds, then remove the bet
            if (prop === item.prop) {
              prev.splice(i, 1);
            }
            // If bet exists with different odds, update the odds
            else {
              prev[i] = { bet, prop };
            }

            // Return updated list
            return prev;
          }
        }

        // Bet does not exist, add as a new item
        return prev.concat({ bet, prop });
      }),
    [],
  );
  const isSelected = useCallback(
    (bet: BasketItem["bet"], odds: BasketItem["prop"]) =>
      items.some((item) => bet.C === item.bet.C && odds === item.prop),
    [items],
  );

  return (
    <Context.Provider value={{ items, select, isSelected }}>
      {children}
    </Context.Provider>
  );
}

export function useBasket() {
  const context = useContext(Context);

  if (context == null) {
    throw new Error("useBasket must be used under BasketProvider");
  }

  return context;
}
