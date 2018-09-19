function procesor(arr) {

    let commandExec = (function(){
        let resultArr = [];

        function add(str) {
            resultArr.push(str);
        }
        function remove(str) {
            resultArr = resultArr.filter(el => el !== str);
        }
        function print() {
            console.log(resultArr.join(','));
        }
        return{add,remove,print};
    })()
    for (const element of arr) {
        let[command,value] = element.split(' ');

        commandExec[command](value);
    }
}

procesor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
procesor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);

