import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Point", () => {
    it("test Line String", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([4.0,5.0]);
        const p3 = new Point([5.0,6.0]);
        const l1 = new LineString([p1, p2, p3]);
        expect(l1.getNumPoints()).to.equal(3);
    });

    it("test Line String", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([4.0,5.0]);
        const p3 = new Point([5.0,6.0]);
        const l1 = new LineString([p1, p2, p3]);
        expect(l1.getPointN(1)).to.equal(p2);
    });
});