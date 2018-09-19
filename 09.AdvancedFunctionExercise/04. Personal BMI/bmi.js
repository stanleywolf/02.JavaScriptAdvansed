'use strict';

function bmi(name,age,weight,height) {
    
    let result = {};

    result['name'] = name;
    result['personalInfo'] = {
        'age' : age,
        'height' : height,
        'weight' : weight
    };
    let bmi = (weight/(height/100 * height/100));
    result['BMI'] = Math.round(bmi);

    let status = getStatus(bmi);

    result['status'] = status;
    if(status === 'obese'){
        result['recommendation'] = 'admission required';
    }
    return result;

    function getStatus(bmi){
        if(bmi < 18.5 ){
            return 'underweight';
        }else if(bmi >= 18.5 && bmi < 25){
            return 'normal';
        }else if(bmi >= 25 && bmi < 30){
            return 'overweight';
        }else{
            return 'obese';
        }
    }
}

console.log(bmi('Peter', 29, 75, 182));
console.log(bmi('Honey Boo Boo', 9, 57, 137));