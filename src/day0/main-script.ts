import { svg, group, line, grid, add } from "./helpers";

import { drawing } from "./drawing";

export let main = async () => {
    let canvas = svg("canvas");
    let shapes = group();
    add(shapes, grid(-50, -50, 50, 50, 10).shapes());
    add(shapes, drawing());
    canvas.render(shapes);
};

main();