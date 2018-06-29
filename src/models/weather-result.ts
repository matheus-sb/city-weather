import {Coord} from "./coord"
import {Weather} from "./weather";
import {Main} from "./main";
import {Wind} from "./wind";
import {Sys} from "./sys";

export class WeatherResult {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: any
  dt: number
  sys: Sys
  id: number
  name: string
  cod: number
}
