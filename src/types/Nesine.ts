export interface Nesine {
  C: string;
  N: NesineN;
  TYPE: string;
  NID: string;
  D: string;
  T: string;
  DAY: Day;
  S: S;
  LN: Ln;
  IMF: boolean;
  OCG: { [key: string]: Ocg };
  HEC: boolean;
}

export enum Day {
  Cuma = "Cuma",
  Cumartesi = "Cumartesi",
  Pazar = "Pazar",
  Pazartesi = "Pazartesi",
  Perşembe = "Perşembe",
  Salı = "Salı",
  Çarşamba = "Çarşamba",
}

export enum Ln {
  AlmanyaBundesliga = "Almanya Bundesliga",
  PremierLeague = "Premier League",
  TürkiyeSüperLigi = "Türkiye Süper Ligi",
  UEFAAvrupaLigi = "UEFA Avrupa Ligi",
  UEFAŞampiyonlarLigi = "UEFA Şampiyonlar Ligi",
  İspanyaLaLiga = "İspanya La Liga",
  İtalyaSerieA = "İtalya Serie A",
}

export enum NesineN {
  ACMilanASRoma = "AC Milan - AS Roma",
  ACMilanBeşiktaş = "AC Milan - Beşiktaş",
  ACMilanFenerbahçe = "AC Milan - Fenerbahçe",
  ACMilanGalatasaray = "AC Milan - Galatasaray",
  ACMilanNewcastle = "AC Milan - Newcastle",
  ACMilanOsasuna = "AC Milan - Osasuna",
  BarcelonaASRoma = "Barcelona - AS Roma",
  BarcelonaBeşiktaş = "Barcelona - Beşiktaş",
  BarcelonaFenerbahçe = "Barcelona - Fenerbahçe",
  BarcelonaGalatasaray = "Barcelona - Galatasaray",
  BarcelonaNewcastle = "Barcelona - Newcastle",
  BarcelonaOsasuna = "Barcelona - Osasuna",
  BayernASRoma = "Bayern - AS Roma",
  BayernBeşiktaş = "Bayern - Beşiktaş",
  BayernFenerbahçe = "Bayern - Fenerbahçe",
  BayernGalatasaray = "Bayern - Galatasaray",
  BayernNewcastle = "Bayern - Newcastle",
  BayernOsasuna = "Bayern - Osasuna",
  JuventusASRoma = "Juventus - AS Roma",
  JuventusBeşiktaş = "Juventus - Beşiktaş",
  JuventusFenerbahçe = "Juventus - Fenerbahçe",
  JuventusGalatasaray = "Juventus - Galatasaray",
  JuventusNewcastle = "Juventus - Newcastle",
  JuventusOsasuna = "Juventus - Osasuna",
  MonacoASRoma = "Monaco - AS Roma",
  MonacoBeşiktaş = "Monaco - Beşiktaş",
  MonacoFenerbahçe = "Monaco - Fenerbahçe",
  MonacoGalatasaray = "Monaco - Galatasaray",
  MonacoNewcastle = "Monaco - Newcastle",
  MonacoOsasuna = "Monaco - Osasuna",
  PSVASRoma = "PSV - AS Roma",
  PSVBeşiktaş = "PSV - Beşiktaş",
  PSVFenerbahçe = "PSV - Fenerbahçe",
  PSVGalatasaray = "PSV - Galatasaray",
  PSVNewcastle = "PSV - Newcastle",
  PSVOsasuna = "PSV - Osasuna",
  RealMadridASRoma = "Real Madrid - AS Roma",
  RealMadridBeşiktaş = "Real Madrid - Beşiktaş",
  RealMadridFenerbahçe = "Real Madrid - Fenerbahçe",
  RealMadridGalatasaray = "Real Madrid - Galatasaray",
  RealMadridNewcastle = "Real Madrid - Newcastle",
  RealMadridOsasuna = "Real Madrid - Osasuna",
}

export interface Ocg {
  ID: string;
  N: OcgN;
  MBS: string;
  SO: number;
  OC: { [key: string]: Oc };
}

export enum OcgN {
  AltÜst25Gol = "Alt/Üst 2,5 Gol",
  MaçSonucu = "Maç Sonucu",
  ÇifteŞans = "Çifte Şans",
}

export interface Oc {
  ID: string;
  O: string;
  N: string;
  MBS: string;
  G: string;
  OD: number;
  IMF: boolean;
}

export enum S {
  Open = "Open",
}
