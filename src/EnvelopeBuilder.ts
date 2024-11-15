import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xMin: number | undefined;
    private yMin: number | undefined;
    private xMax: number | undefined;
    private yMax: number | undefined;

    insert(coordinate: Coordinate): void {
        const [x, y] = coordinate;

        this.xMin = this.xMin !== undefined ? Math.min(this.xMin, x) : x;
        this.yMin = this.yMin !== undefined ? Math.min(this.yMin, y) : y;
        this.xMax = this.xMax !== undefined ? Math.max(this.xMax, x) : x;
        this.yMax = this.yMax !== undefined ? Math.max(this.yMax, y) : y;
    }

    build(): Envelope {
        if (
            this.xMin === undefined ||
            this.yMin === undefined ||
            this.xMax === undefined ||
            this.yMax === undefined 
        ) {
            throw new Error("IL n'Y A PAS DE COORDONNEE, IL FAUT EN RENTRER !!!");
        }

        const bottomLeft: Coordinate = [this.xMin, this.yMin];
        const topRight: Coordinate = [this.xMax, this.yMax];
        return new Envelope(bottomLeft, topRight);
    }
}
