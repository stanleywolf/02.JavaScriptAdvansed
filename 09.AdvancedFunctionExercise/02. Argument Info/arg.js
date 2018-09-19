function result(...arguments) {
    
    var sumary = {};
    for (let i = 0; i < arguments.length; i++) {
        
        var obj = arguments[i];
        var type = typeof obj;

        console.log(type + ": " + obj);
        
        if(!sumary[type]){
            sumary[type] = 1;
        }else{
            sumary[type]++;
        }
    }
   
    Object.keys(sumary).sort((a,b) => sumary[b] - sumary[a])
    .forEach(element => console.log(`${element} = ${sumary[element]}`))

}

result('cat', 42, function () { console.log('Hello world!'); });