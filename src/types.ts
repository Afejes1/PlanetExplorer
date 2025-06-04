export interface Planet {
  id: string;
  englishName: string;
  gravity: number;
  meanRadius: number;
  semimajorAxis: number;
  moons?: { moon: string }[];
}

export interface MarsWeather {
  sol: string;
  terrestrial_date: string;
  min_temp: number;
  max_temp: number;
}
