import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Coordinate from "../src/Coordinate";

describe("test EnvelopeBuilder", () => {
    it("test to create a envelope", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);

        const envelope = builder.build();
        expect(envelope.toString()).to.equal("0,0,2,3");
    });

    it("test isEmpty of Envelope", () => {
        const env = new Envelope([], []);
        expect(env.isEmpty()).to.equal(true);
    });

    it("test if no coordinates", () => {
        const builder = new EnvelopeBuilder();
        expect(() => builder.build()).to.throw("IL n'Y A PAS DE COORDONNEE, IL FAUT EN RENTRER !!!");
    });

    it("test Envelope getters", () => {
        const env = new Envelope([1.0, 2.0], [10.0, 11.0]);
        expect(env.getXMax()).to.equal(10);
        expect(env.getXMin()).to.equal(1);
        expect(env.getYMax()).to.equal(11);
        expect(env.getYMin()).to.equal(2);
    });
});
