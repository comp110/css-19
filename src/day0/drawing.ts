import { group, line, add } from "./helpers";

export let drawing = () => {
    let shapes = group();
    for (let i = 0; i < 50; i++) {
        add(shapes, drawUNC(-45 + i * 20, 10));
    }
    return shapes;
};

let drawUNC = (topY: number, height: number) => {
    let shapes = group();
    add(shapes, drawU(-40, -20, topY, topY + height));
    add(shapes, drawN(-10, 10, topY, topY + height));
    add(shapes, drawC(20, 40, topY, topY + height));
    return shapes;
};

let drawU = (xLeft: number, xRight: number, yTop: number, yBottom: number) => {
    let shapes = group();
    add(shapes, line(xLeft, yTop, xLeft, yBottom));
    add(shapes, line(xLeft, yBottom, xRight, yBottom));
    add(shapes, line(xRight, yBottom, xRight, yTop));
    return shapes;
};

let drawN = (xLeft: number, xRight: number, yTop: number, yBottom: number) => {
    let shapes = group();
    add(shapes, line(xLeft, yTop, xLeft, yBottom));
    add(shapes, line(xLeft, yTop, xRight, yBottom));
    add(shapes, line(xRight, yTop, xRight, yBottom));
    return shapes;
}

let drawC = (xLeft: number, xRight: number, yTop: number, yBottom: number) => {
    let shapes = group();
    add(shapes, line(xLeft, yTop, xLeft, yBottom));
    add(shapes, line(xLeft, yTop, xRight, yTop));
    add(shapes, line(xLeft, yBottom, xRight, yBottom));
    return shapes;
};