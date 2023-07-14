import timeout from "../helpers/timeout";
import { Nesine } from "../types/Nesine";
import client from "./client";

export default function getBets(): Promise<Nesine[]> {
  return timeout(
    client.get<Nesine[]>("/bets").then(($) => $.data),
    5000,
  );
}
