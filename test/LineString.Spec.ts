import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {
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
        expect(l1.getPointN(1)?.getCoordinate()).to.deep.equal(p2.getCoordinate());
    });

    it("test getType LineString", () => {
        const p1 = new Point([1.0, 1.0]);
        const p2 = new Point([2.0, 2.0]);
        const l1 = new LineString([p1, p2]);
        expect(l1.getType()).to.equal("LineString");
    })

    it("test isEmpty for LineString", () => {
        const l1 = new LineString([]);
        expect(l1.isEmpty()).to.be.true;
    })

    it("test a copy of Line String", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([4.0,5.0]);
        const p3 = new Point([5.0,6.0]);
        const l1 = new LineString([p1, p2, p3]);
        const l2 = l1.clone();
        expect(l1.getPointN(1)?.getCoordinate()).to.deep.equal(p2.getCoordinate());
        expect(l2.getPointN(1)?.getCoordinate()).to.deep.equal(p2.getCoordinate());
        expect(l1.getNumPoints()).to.equal(3);
        expect(l2.getNumPoints()).to.equal(3);
        
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

    it("test to translate a copy of LineString", () => {
        const p1 = new Point([2.0, 2.0]);
        const p2 = new Point([3.0, 3.0]);
        const l1 = new LineString([p1, p2]);
        const l2 = l1.clone();
        l1.translate(1.0, 1.0);
        l2.translate(5.0, 5.0);
        expect(l1.getPointN(0)?.getCoordinate()).to.deep.equal([3.0, 3.0]);
        expect(l1.getPointN(1)?.getCoordinate()).to.deep.equal([4.0, 4.0]);
        expect(l2.getPointN(0)?.getCoordinate()).to.deep.equal([7.0, 7.0]);
        expect(l2.getPointN(1)?.getCoordinate()).to.deep.equal([8.0, 8.0]);
    });

    it("test get envelope of a LineString", () => {
        const p1 = new Point([1.0, 1.0]);
        const p2 = new Point([2.0, 3.0]);
        const p3 = new Point([4.0, 0.0]);
        const l1 = new LineString([p1, p2, p3]);
        const envelope = l1.getEnvelope();
        expect(envelope.toString()).to.equal("1,0,4,3");
    });
});