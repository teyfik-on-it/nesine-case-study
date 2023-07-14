import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Nesine } from "../../types/Nesine";
import BetCell from "./BetCell";
import BetHeader from "./BetHeader";
import BetSelectableCell from "./BetSelectableCell";

interface Props extends HTMLAttributes<HTMLDivElement> {
  bet: Nesine;
}

export default function BetWidget({ bet, className, ...props }: Props) {
  return (
    <div {...props} className={clsx("border-b border-gray-600", className)}>
      <BetHeader title={`${bet.D} ${bet.DAY} ${bet.LN}`} />

      <div className="flex border-t border-gray-300">
        <BetCell w="w-96" center={false}>
          {bet.C} {bet.T} {bet.N}
        </BetCell>

        <BetCell className="hidden 2xl:block" w="w-24">
          Yorumlar
        </BetCell>

        <BetCell className="hidden 2xl:block">{bet.OCG["1"].MBS}</BetCell>

        <BetSelectableCell bet={bet} prop="OCG.1.OC.0.O" />

        <BetSelectableCell bet={bet} prop="OCG.1.OC.1.O" />

        <BetCell className="hidden 2xl:block"> </BetCell>

        <BetSelectableCell bet={bet} prop="OCG.5.OC.25.O" />

        <BetSelectableCell bet={bet} prop="OCG.5.OC.26.O" />

        <BetCell className="hidden 2xl:block"> </BetCell>
        <BetCell className="hidden 2xl:block"> </BetCell>
        <BetCell className="hidden 2xl:block"> </BetCell>
        <BetCell className="hidden 2xl:block"> </BetCell>
        <BetCell className="hidden 2xl:block"> </BetCell>

        <BetSelectableCell bet={bet} prop="OCG.2.OC.3.O" />

        <BetSelectableCell bet={bet} prop="OCG.2.OC.4.O" />

        <BetSelectableCell bet={bet} prop="OCG.2.OC.5.O" />

        <BetCell className="hidden 2xl:block"> </BetCell>
        <BetCell className="hidden 2xl:block"> </BetCell>

        <BetSelectableCell bet={bet} prop="OCG.2.OC.3.ID" />
      </div>
    </div>
  );
}
