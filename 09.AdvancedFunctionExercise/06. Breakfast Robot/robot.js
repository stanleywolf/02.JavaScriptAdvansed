function robot(...inputArray) {

    let productArgs = {
        'protein' : 0,
        'carbohydrate' : 0,
        'fat' : 0,
        'flavour' : 0,
    }

    for (const part of inputArray) {
        let commandArgs = part.split(' ');
        
        let[command,product,quantity] = commandArgs;
            
         switch (command) {
            case 'restock':
                productArgs[product] += +quantity;
                //console.log(productArgs)
                return restock(product,quantity);
                break;
            case 'prepare':
                return madeRecipi(product,quantity);
                break;
            case 'report':
                return print(productArgs);
            break;
             default:
              break;
            }
        
    }
    function restock([microelement, quantity]) {
        quantity = Number(quantity);
        productArgs[microelement] += quantity;
         return "Success";
    }
    function print(args) {
        let result = [];
        for (let key in args) {
            result.push(`${key}=${args[key]}`)
        }
        return result.join(' ');
    }
    function madeRecipi(meal,quantity) {
        let message = '';
        switch (meal) {
            case 'apple':
                 if(productArgs['flavour'] < quantity * 2){
                    message = `Error: not enough flavour in stock`;
                 }
                 if(productArgs['carbohydrate'] < quantity ){
                    message = `Error: not enough carbohydrate in stock`;
                 }
                 if(message === ''){
                     message = 'Success';
                 }
                 return massage;
            case 'coke':
                if (productArgs['flavour'] < quantity * 20) {
                 message = "Error: not enough flavour in stock";
             }
                if (productArgs['carbohydrate'] < quantity * 10) {
                message = "Error: not enough carbohydrate in stock";
             }
             if (message == "") {
                  productArgs['flavour'] -= quantity * 20;
                  productArgs['carbohydrate'] -= quantity * 10;
                return "Success";
            }
            return message;
        case "burger":
            if (productArgs['flavour'] < quantity * 3) {
                message = "Error: not enough flavour in stock";
            }
            if (productArgs['fat'] < quantity * 7) {
                message = "Error: not enough fat in stock";
            }
            if (productArgs['carbohydrate'] < quantity * 5) {
                message = "Error: not enough carbohydrate in stock";
            }
            if (message == "") {
                productArgs['flavour'] -= quantity * 3;
                productArgs['fat'] -= quantity * 7;
                productArgs['carbohydrate'] -= quantity * 5;
                return "Success";
            }
            return message;
        case "omelet":
            if (productArgs['flavour'] < quantity) {
                message = "Error: not enough flavour in stock";
            }
            if (productArgs['fat'] < quantity) {
                message = "Error: not enough fat in stock";
            }
            if (productArgs['protein'] < quantity * 5) {
                message = "Error: not enough protein in stock";
            }
            if (message == "") {
                productArgs['flavour'] -= quantity;
                productArgs['fat'] -= quantity;
                productArgs['protein'] -= quantity * 5;
                return "Success";
            }
            return message;
        case "cheverme":
            if (productArgs['flavour'] < quantity * 10) {
                message = "Error: not enough flavour in stock";
            }
            if (productArgs['fat'] < quantity * 10) {
                message = "Error: not enough fat in stock";
            }
            if (productArgs['carbohydrate'] < quantity * 10) {
                message = "Error: not enough carbohydrate in stock";
            }
            if (productArgs['protein'] < quantity * 10) {
                message = "Error: not enough protein in stock";
            }
            if (message == "") {
                productArgs['flavour'] -= quantity * 10;
                productArgs['fat'] -= quantity * 10;
                productArgs['carbohydrate'] -= quantity * 10;
                productArgs['protein'] -= quantity * 10;
                return "Success";
            }
            return message;   
        }
        
    }
   
    
}

// robot('restock carbohydrate 10',
//     'restock flavour 10',
//     'prepare apple 1',
//     'restock fat 10',
//     'prepare burger 1',
//     'report'
//     );

robot('prepare cheverme 1',
'restock protein 10',
'prepare cheverme 1',
'restock carbohydrate 10',
'prepare cheverme 1',
'restock fat 10',
'prepare cheverme 1',
'restock flavour 10',
'prepare cheverme 1',
'report'
);