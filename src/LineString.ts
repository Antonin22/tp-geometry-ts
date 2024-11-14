// LineString.ts
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points ? points.map(point => point.clone()) : [];
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length === 0;
    }

    translate(dx: number, dy: number): void {
        this.points.forEach(point => point.translate(dx, dy));
    }

    clone(): LineString {  
        return new LineString(this.points.map(point => point.clone()));
    }

    getEnvelope(): Envelope {
        const builder = new EnvelopeBuilder();
        this.points.forEach(point => {
            const coordinate = point.getCoordinate();
            if(coordinate) {
                builder.insert(coordinate);
            }
        });
        return builder.build();
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point | undefined {
        return this.points[n];
    }
}
