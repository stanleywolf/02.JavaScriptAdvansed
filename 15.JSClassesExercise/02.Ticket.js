
function printTicket(arr, destination) {
    class Ticket{
        constructor(destination,price,status){
            [this.destination,this.price,this.status] =
                [destination,price,status];
        }
    }
    let result = []
    let typeSort = destination;
    for (let inputArgs of arr) {
        let[destination,price,status] = inputArgs.split('|');
        let ticket = new Ticket(destination,+price,status);
        result.push(ticket)
    }
    let orderResult = [];
    switch (typeSort){
        case 'destination':
            orderResult = result.sort((a,b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            orderResult = result.sort((a,b) => a.destination - b.destination);
            break;
        case 'status':
            orderResult = result.sort((a,b) => a.status.localeCompare(b.status));
            break;
    }
    return orderResult
}
let allTicket = printTicket(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
console.log(allTicket.forEach(a => console.log(a)));


