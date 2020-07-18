//feetToMile-converter-program-1-Start
function feetToMile(feet){
    var Mile = feet / 5280;
    return Mile;
}
var convertMile = feetToMile(60000);
console.log(convertMile);
// feetToMile-converter-program-1-END

// woodCalculator-program-2-Start
function woodCalculator(chair, table, bed){
    var totalChair = chair * 1;
    var totalTable = table * 3;
    var totalBed   = bed * 5;
    return totalChair + totalTable + totalBed; 
}
var totalWood = woodCalculator(15,5,3);
console.log(totalWood);
// woodCalculator-program-2-END

// brickCalculator-program-3-Start
function brickCalculator(calculate){
    const oneFeetBrick      = 1000;
    const firstTenFloors    = 15;
    const secondTenFloors   = 12;
    const TwentyOverFloors  = 10;
    if(calculate <= 10){
        var totalBrick = calculate * firstTenFloors;
        var result = totalBrick * oneFeetBrick;
        return result;
    }else if(calculate <= 20){
        var subtract     = calculate - 10;
        var totalBrick   = subtract * secondTenFloors;
        var firstTen     = 10 * 15;
        var total        =  firstTen + totalBrick;
        var result       = total * oneFeetBrick;
        return result;
    }else if( calculate > 20){
        var subtract     = calculate - 20;
        var totalBrick   = subtract * TwentyOverFloors;
        var firstTen     = 10 * 15;
        var secondTen    = 10 * 12;
        var total        = totalBrick + firstTen + secondTen;
        var result       = total * oneFeetBrick;
        return result;
    }
}
console.log(brickCalculator(75));

// brickCalculator-program-3-END

// tinyFriend-Program-4-Start
function tinyFriend(name){
    var prevFrndName = name[0];
    for(var i = 0; i < name.lenght; i++){
        var currentFrndName = name[i];
        if(currentFrndName.lenght < prevFrndName.lenght){
            prevFrndName = currentFrndName;
        }
    }
    return prevFrndName;
}
var frndArrayName = tinyFriend(['Tanjid','Abdullah','Ayat','Raeid']);
console.log(frndArrayName);
// tinyFriend-Program-4-END