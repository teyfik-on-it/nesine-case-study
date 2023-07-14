import { useMemo } from "react";
import { Nesine } from "../../types/Nesine";
import { useBasket } from "../../utils/BasketProvider";
import BetCell from "./BetCell";
import { get } from "lodash-es";

interface Props {
  bet: Nesine;
  prop: string;
}

export default function BetSelectableCell({ bet, prop }: Props) {
  const { select, isSelected } = useBasket();
  const odds = useMemo(() => get(bet, prop), [bet, prop]);

  return (
    <BetCell selected={isSelected(bet, prop)} onClick={() => select(bet, prop)}>
      {odds}
    </BetCell>
  );
}
