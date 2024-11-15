import Geometry from "./Geometry";
import Envelope from "./Envelope";
import WktVisitor from "./WktVisitor";
import GeometryVisitor from "./GeometryVisitor";

export default abstract class AbstractGeometry implements Geometry {
    abstract getType(): string;
    abstract isEmpty(): boolean;
    abstract translate(dx: number, dy: number): void;
    abstract clone(): AbstractGeometry;
    abstract getEnvelope(): Envelope;

    asText(): string {
        const visitor = new WktVisitor();
        this.accept(visitor);
        return visitor.getResult();
    }

    abstract accept(visitor: GeometryVisitor): void;
}
