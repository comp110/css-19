import { print, promptNumber } from "introcs";

export let main = async () => {
    print("Give me two numbers and I'll tell you the greatest...");
    let a = await promptNumber("a");
    let b = await promptNumber("b");

    // TODO #2: Make a Function Call to max

};

// TODO #1: Define a function named max

main();