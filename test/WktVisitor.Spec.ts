import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("WktVisitor", () => {
    it("should generate WKT for empty point", () => {
        const point = new Point();
        const visitor = new WktVisitor();
        point.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });

    it("should generate WKT for point with coordinates", () => {
        const point = new Point([3.0, 4.0]);
        const visitor = new WktVisitor();
        point.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3 4)");
    });

    it("should generate WKT for empty linestring", () => {
        const lineString = new LineString();
        const visitor = new WktVisitor();
        lineString.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });

    it("should generate WKT for linestring with coordinates", () => {
        const p1 = new Point ([0.0, 0.0]);
        const p2 = new Point ([1.0, 1.0]);
        const p3 = new Point ([5.0, 5.0]);
        const l1 = new LineString([p1, p2, p3]);
        const visitor = new WktVisitor();
        l1.accept(visitor);
        expect(visitor.getResult()).to.equal(
            "LINESTRING(0 0,1 1,5 5)"
        );
    });
});
