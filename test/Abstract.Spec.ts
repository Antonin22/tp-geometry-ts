import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("test with Abstract", () => {
    it("test as text()", () => {
       const p = new Point([1.0, 1.0]);
       expect(p.asText()).to.equal("POINT(1 1)");
    });

    it("test as text() for empty point", () => {
        const p = new Point([]);
        expect(p.asText()).to.equal("POINT EMPTY");
    });

    it("test as text() for LineString", () => {
        const p1 = new Point([1.0, 1.0]);
        const p2 = new Point([1.0, 1.0]);
        const l1 = new LineString([p1, p2]);
        expect(l1.asText()).to.equal("LINESTRING(1 1,1 1)");
    });

    it("test as text() for LineString", () => {
        //const p1 = new Point([1.0, 1.0]);
        //const p2 = new Point([1.0, 1.0]);
        const l1 = new LineString();
        expect(l1.asText()).to.equal("LINESTRING EMPTY");
    });
});