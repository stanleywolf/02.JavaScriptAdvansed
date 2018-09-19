function printDeckOfCards(arr){
    function makeCard(faces,suit) {

        let validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
    
        if(validFaces.indexOf(faces) < 0
            || !validSuits.hasOwnProperty(suit)){
                throw new Error('Invalid input MF')
        }
        return {
            toString: function(){
                return faces + validSuits[suit];
            }
        }
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let end = arr[i].length -1;
        let card = arr[i].substring(0,end);
        let suit = arr[i][end];

        try {
            arr[i] = makeCard(card,suit); 
            result.push(arr[i])  
        } catch (e) {
            console.log('Invalid card: ' + arr[i]);
            return;
        }
    }
    console.log(result.join(', '))
}



printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);