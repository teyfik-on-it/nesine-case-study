import { Nesine } from "../types/Nesine";
import timeout from "../helpers/timeout";
import client from "./client";
import mockData from "./mockBets.json";

export default function getBets(): Promise<Nesine[]> {
  return timeout(
    client.get<Nesine[]>("/bets").then(($) => $.data),
    3000,
  ).catch(() => mockData as Nesine[]);
}
