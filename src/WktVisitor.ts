import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {
    private result: string = "";

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.result = "POINT EMPTY";
        } else {
            const [x, y] = point.getCoordinate();
            this.result = `POINT(${x} ${y})`;
        }
    }

    visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()) {
            this.result = "LINESTRING EMPTY";
        } else {
            const coordinates = [];
            for (let i = 0;  i < lineString.getNumPoints(); i++) {
                const point = lineString.getPointN(i);
                if (point) {
                    const [x, y] = point.getCoordinate();
                    coordinates.push(`${x} ${y}`);
            }
        }
            this.result = `LINESTRING(${coordinates})`;
        }
    }

    getResult(): string {
        return this.result;
    }
}
