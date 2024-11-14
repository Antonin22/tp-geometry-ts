import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate ?? [NaN, NaN];
  }

  getType(): string {
    return "Point";
  }

  isEmpty(): boolean {
    return this.coordinate === undefined || isNaN(this.coordinate[0]) || isNaN(this.coordinate[1]);
  }

  translate(dx: number, dy: number): void {
    if(!this.isEmpty()) {
      this.coordinate = [
        this.coordinate[0] + dx,
        this.coordinate[1] + dy
      ];
    }
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return !this.isEmpty() ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return !this.isEmpty() ? this.coordinate[1] : Number.NaN ;
  }

}
