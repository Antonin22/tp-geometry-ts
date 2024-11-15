import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Geometry from "../src/GeometryVisitor";

describe("LogGeometryVisitor", () => {
    let output: string[];
    const storeLog = (input: string) => output.push(input);
    beforeEach(() => (output = []));
    beforeEach(() => (console.log = storeLog as any));
    afterEach(() => (console.log = console.log));

    it("should log empty point", () => {
        const visitor = new LogGeometryVisitor();
        const point = new Point();
        point.accept(visitor);
        expect(output).to.deep.equal(["Je suis un point vide."]);
    });

    it("should log point with coordinates", () => {
        const visitor = new LogGeometryVisitor();
        const point = new Point([2.0, 3.0]);
        point.accept(visitor);
        expect(output).to.deep.equal(["Je suis un point avec x=2 et y=3."]);
    });

    it("should log empty linestring", () => {
        const visitor = new LogGeometryVisitor();
        const lineString = new LineString();
        lineString.accept(visitor);
        expect(output).to.deep.equal(["Je suis une polyligne vide."]);
    }); 

    it("should log linestring with points", () => {
        const visitor = new LogGeometryVisitor();
        const lineString = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([2.0, 2.0]),
        ]);
        lineString.accept(visitor);
        expect(output).to.deep.equal([
            "Je suis une polyligne définie par 3 point(s).",
        ]);
    });
});
