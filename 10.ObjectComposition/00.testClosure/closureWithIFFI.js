let closure = (function () {
    let counter = 0;
    return function(){
        console.log(counter++);
    }
})()

closure();
closure();
closure();
closure();
closure();