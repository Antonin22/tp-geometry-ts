import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {
    write(geometry: Geometry): string {
        if ( geometry instanceof Point ){
            return this.writePoint(geometry);
        }else if ( geometry instanceof LineString ){
            return this.writeLineString(geometry);
        }else{
            throw new TypeError(" geometry type not supported ");
        }
    }

    private writePoint(point: Point): string {
        if (point.isEmpty()) {
            return " POINT EMPTY ";
        }
        const [x, y] = point.getCoordinate() 
        return `POINT(${x} ${y})`;
    }

    private writeLineString(LineString: LineString): string {
        if (LineString.isEmpty()) {
            return " LINESTRING EMPTY "
        }
        const coordinates = [];
        for (let i = 0;  i < LineString.getNumPoints(); i++) {
            const point = LineString.getPointN(i);
            if (point) {
                const [x, y] = point.getCoordinate();
                coordinates.push(`${x} ${y}`);
            }
        }
        return `LINESTRING(${coordinates.join(",")})`

    }

}