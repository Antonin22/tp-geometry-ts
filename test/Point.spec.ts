import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor (empty point)", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([NaN, NaN]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
        expect(p.isEmpty()).to.be.true;
    });

    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.be.false;
    });

    it("test getType of point", () => {
        const p = new Point([1.0, 1.0]);
        expect(p.getType()).to.equal("Point");
    })

    it("test to translate a point", () => {
        const p = new Point([3.0, 4.0]);
        p.translate(1.0, 1.0);
        expect(p.getCoordinate()).to.deep.equal([4.0, 5.0]);
        expect(p.x()).to.equal(4.0);
        expect(p.y()).to.equal(5.0);
        expect(p.isEmpty()).to.be.false;
    });

    
    it("test to clone a point", () => {
        const p = new Point([3.0, 4.0]);
        const copy_p = p.clone();
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(copy_p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(copy_p.x()).to.equal(3.0);
        expect(copy_p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.be.false;
    });

    it("test to translate a copy of a point", () => {
        const p = new Point([1.0, 1.0]);
        const copy_p = p.clone();
        p.translate(1.0, 1.0);
        copy_p.translate(2.0, 2.0);
        expect(p.getCoordinate()).to.deep.equal([2.0, 2.0]);
        expect(copy_p.getCoordinate()).to.deep.equal([3.0, 3.0]);
        expect(p.x()).to.equal(2.0);
        expect(p.y()).to.equal(2.0);
        expect(copy_p.x()).to.equal(3.0);
        expect(copy_p.y()).to.equal(3.0);
        expect(p.isEmpty()).to.be.false;
    });
});
