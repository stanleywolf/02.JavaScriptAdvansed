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

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));