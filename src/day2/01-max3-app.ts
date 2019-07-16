import { print, promptNumber } from "introcs";

export let main = async () => {
    print("Give me three numbers and I'll tell you the greatest...");
    let a = await promptNumber("a");
    let b = await promptNumber("b");
    let c = await promptNumber("c");

    // TODO #2: Make a Function Call to max3 and print the highest

};

let max3 = (x: number, y: number, z: number): number => {
    // TODO: Correct this function implementation
    return x;
};

let max2 = (x: number, y: number) => {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

main();