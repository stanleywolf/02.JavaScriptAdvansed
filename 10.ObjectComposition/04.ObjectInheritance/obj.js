function car(input) {
    let commandProcesor = (function(){
        let result = {};
        function create(arr) {
            let name = arr[0];
            if(arr.length > 2){
                let inhariteName = arr[2];
                result[name] = Object.create(result[inhariteName]);
            }else{
                result[name] = {};
            }
        }
        function set(arr) {
            let objName = arr[0];
            let Key = arr[1];
            let value = arr[2];

            result[objName][Key] = value;
        }
        function print(arr) {
            let printresult = [];
            let name = arr[0];
            
            for (const key in result[name]) {
                printresult.push(key + ':' + result[name][key])
            }
            console.log(printresult.join(', '))
        }       
    return{create,set,print};
    })()
    for (const inputElement of input) {
        let tokens = inputElement.split(' ');
        let command = tokens.shift();
        commandProcesor[command](tokens);
    }
}

car(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)