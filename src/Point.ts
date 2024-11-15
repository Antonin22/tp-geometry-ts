import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import LogGeometryVisitor from "./LogGeometryVisitor";

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

  clone(): Point {
    return new Point (this.coordinate? [...this.coordinate] : undefined)
  }

  accept(visitor: LogGeometryVisitor): void {
    visitor.visitPoint(this);
}

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    if(this.coordinate) {
      builder.insert(this.coordinate);
    }
    return builder.build();
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
