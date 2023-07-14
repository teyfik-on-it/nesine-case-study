import clsx from "clsx";
import { HTMLAttributes } from "react";
import BetCell from "./BetCell";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  gutter?: boolean;
}

export default function BetHeader({ title, className, ...props }: Props) {
  return (
    <div {...props} className={clsx("flex", className)}>
      <BetCell w="w-96" center={false}>
        {title}
      </BetCell>

      <BetCell w="w-24">Yorumlar</BetCell>

      <BetCell></BetCell>
      <BetCell>1</BetCell>
      <BetCell>x</BetCell>
      <BetCell>2</BetCell>
      <BetCell>Alt</BetCell>
      <BetCell>Üst</BetCell>
      <BetCell>H1</BetCell>
      <BetCell>1</BetCell>
      <BetCell>x</BetCell>
      <BetCell>2</BetCell>
      <BetCell>H2</BetCell>
      <BetCell>1-X</BetCell>
      <BetCell>1-2</BetCell>
      <BetCell>X-2</BetCell>
      <BetCell>Var</BetCell>
      <BetCell>Yok</BetCell>
      <BetCell>+99</BetCell>
    </div>
  );
}
