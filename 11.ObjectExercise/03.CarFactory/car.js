function solve(car) {
    let fixCar = {
        model: car.model,
        engine:{
            power: getCarPower(car.power),
            volume: getVolume(car.power)
        },
        carriage:{
            type: car.carriage,
            color: car.color
        },
        wheels: getWheelSize(car.wheelsize)
    }

    function getVolume(power) {
        if(power <= 90){return 1800}
        else if(power > 120){return 3500}
        else{return 2400}
    }
    function getCarPower(power) {
        if(power <= 90){return 90}
        else if(power > 120){return 200}
        else{return 120}
    }
    function getWheelSize(n) {
        let wheels = [];
        if(n % 2 === 0){
            n-= 1;
        }
        wheels.push(n);
        wheels.push(n);
        wheels.push(n);
        wheels.push(n);

        return wheels;
    }
    return fixCar;
    
}


console.log(solve({ 
model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
console.log(solve({ 
model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));
