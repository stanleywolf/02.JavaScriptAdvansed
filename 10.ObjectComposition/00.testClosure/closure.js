function createClosure() {
    let counter = 0;
    return function(){
        console.log(counter++);
    }
}

let closure = createClosure();
closure();
closure();
closure();
closure();
closure();
closure();