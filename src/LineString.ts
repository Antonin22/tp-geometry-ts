import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points ?? []; 
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length === 0;
    }

    translate(dx: number, dy: number): void {
        this.points.forEach(points => points.translate(dx, dy))
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point | undefined {
        return this.points[n]; 
    }
}
