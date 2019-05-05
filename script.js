var side = 50;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var nightArr = []; // Gishatich
var lionArr = []; // First character
var gazzeleArr = []; // Second character

function genetareMatrix(lengthY, lengthX, number) {

    let matrix = [];
    
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
    
    for (let y = 0; y < lengthY; y++) {
    matrix.push([]);
    for (let x = 0; x < lengthX; x++) {
    let randomCount = getRandomInt(number);
    matrix[y].push(randomCount);
    }
    }
    return matrix;
    
    }
    
    let matrix = genetareMatrix(12,30,6 );
    


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');

    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }else if (matrix[y][x] == 3) {
                var night = new Nighteat(x,y);
                nightArr.push(night);
            }else if(matrix[y][x] == 4){
                var lion = new Lion(x,y);
                lionArr.push(lion);
            }
            else if(matrix[y][x] == 5){
                var gazzele = new Gazzele(x,y);
                gazzeleArr.push(gazzele);
            }
        }
    }
}


//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side , i * side, side ,side);
            }
            else if (matrix[i][j] == 4) {
                fill("yellow");
                rect(j * side , i * side, side ,side);
            }
            else if (matrix[i][j] == 5) {
                fill("brown");
                rect(j * side , i * side, side ,side);
            }
        }
    }
    


    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for(var i in nightArr){
        nightArr[i].eat();
    }
    for(var i in lionArr){
        lionArr[i].eat();
    }
    for(var i in gazzeleArr){
        gazzeleArr[i].eat();
    }
}