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

      <BetCell w="w-24" className="hidden 2xl:block">
        Yorumlar
      </BetCell>

      <BetCell className="hidden 2xl:block"></BetCell>
      <BetCell>1</BetCell>
      <BetCell>x</BetCell>
      <BetCell className="hidden 2xl:block">2</BetCell>
      <BetCell>Alt</BetCell>
      <BetCell>Üst</BetCell>
      <BetCell className="hidden 2xl:block">H1</BetCell>
      <BetCell className="hidden 2xl:block">1</BetCell>
      <BetCell className="hidden 2xl:block">x</BetCell>
      <BetCell className="hidden 2xl:block">2</BetCell>
      <BetCell className="hidden 2xl:block">H2</BetCell>
      <BetCell>1-X</BetCell>
      <BetCell>1-2</BetCell>
      <BetCell>X-2</BetCell>
      <BetCell className="hidden 2xl:block">Var</BetCell>
      <BetCell className="hidden 2xl:block">Yok</BetCell>
      <BetCell>+99</BetCell>
    </div>
  );
}
