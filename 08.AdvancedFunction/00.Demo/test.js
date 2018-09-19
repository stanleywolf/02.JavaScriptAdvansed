function higherOrder(arr) {
    for (const arrElement of arr) {
        arrElement();
    }
}
    let last = function(){console.info("Four")}
higherOrder([
    () => console.log("One"),
    () => console.warn("Two"),
    () => console.error("Three"),
    last
]);