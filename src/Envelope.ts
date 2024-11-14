import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft: Coordinate;
    private topRight: Coordinate;

    constructor(bottomLeft: Coordinate, topRight: Coordinate) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }

    isEmpty(): boolean {
        return this.bottomLeft[0] === undefined || this.bottomLeft[1] === undefined ||
        this.topRight[0] === undefined || this.topRight[1] === undefined; 
    }

    toString(): string {
        return `${this.bottomLeft[0]},${this.bottomLeft[1]},${this.topRight[0]},${this.topRight[1]}`;
    }

    getXMin(): number {
        return this.bottomLeft[0];
    }

    getYMin(): number {
        return this.bottomLeft[1];
    }

    getXMax(): number {
        return this.topRight[0];
    }

    getYMax(): number {
        return this.topRight[1];
    }
}
