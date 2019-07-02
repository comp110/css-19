import { group, line, add } from "./helpers";

export let drawing = () => {
    let shapes = group();

    add(shapes, line(-40, -10, -40, 10));
    // TODO: Add additional lines to form a U

    return shapes;
};