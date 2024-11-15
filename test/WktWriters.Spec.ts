import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter"
import Geometry from "../src/Geometry";

describe("test WktWriters", () => {
    it("test the EMPTY point", () => {
        const p1 = new Point([]);
        const writer = new WktWriter;
        expect(writer.write(p1)).to.equal(" POINT EMPTY ");
    });

    it("test point with coordinate", () => {
        const p1 = new Point([1.0, 7.0]);
        const writer = new WktWriter;
        expect(writer.write(p1)).to.equal("POINT(1 7)");
    });

    it("test LineString with EMPTY coordinates", () => {
        const l1 = new LineString();
        const writer = new WktWriter;
        expect(writer.write(l1)).to.equal(" LINESTRING EMPTY ");
    });

    it("test LineString with coordinates", () => {
        const p1 = new Point([1.0, 1.0]);
        const p2 = new Point([2.0, 2.0]);
        const l1 = new LineString([p1, p2]);
        const writer = new WktWriter;
        expect(writer.write(l1)).to.equal("LINESTRING(1 1,2 2)");
    })

    it("test with geometry error", () => {
        const writer = new WktWriter();
        expect(() => writer.write({} as Geometry)).to.throw("geometry type not supported");
    });
});