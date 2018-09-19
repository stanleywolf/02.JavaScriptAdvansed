let result = (function(){

    let Faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    };

    class Card{
        constructor(face,suit){
            [this.face,this.suit] = [face,suit]
        }
        get face(){
            return this._face
        }
        get suit(){
            return this._suit
        }
        set suit(s){
            if(Object.values(Suits).indexOf(s) < 0){
                throw new Error("Invalid suit!")
            }
            this._suit = s;
        }
        set face(f){
            if(Faces.indexOf(f) < 0){
                throw new Error("Invalid face!")
            }
            this._face = f;
        }
        toString(){
            return this._face + this._suit;
        }
    }
    return {
        Suits,
        Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card1 = new Card('2',Suits.SPADES);
console.log(card1.toString());