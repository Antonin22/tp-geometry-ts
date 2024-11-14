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

    it("test Line String is empty", () => {
        const l1 = new LineString();
        expect(l1.getPointN(1)).to.equal(undefined);
    });

    it("test translate LineString", () => {
        const p1 = new Point([2.0, 2.0]);
        const p2 = new Point([3.0, 3.0]);
        const l1 = new LineString([p1, p2]);
        l1.translate(1.0, 1.0);
        expect(l1.getPointN(0)?.getCoordinate()).to.deep.equal([3.0, 3.0]);
        expect(l1.getPointN(1)?.getCoordinate()).to.deep.equal([4.0, 4.0]);
    });
});