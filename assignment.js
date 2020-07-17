// feet to mile conversion 

var feet;
var mile;

function feetToMile(feet) {
    if (feet != 0 && feet > 0) {
        mile = feet / 5280;
        return mile;
    }
    else {
        console.log("Invalid/ negative feet number");
    }

}
var fullResult = feetToMile(232);
var result = fullResult.toFixed(4);
console.log("Your result(mile) is = ", result);


// Wood calculation 

var chairNeed = 1;
var tableNeed = 3;
var bedNeed = 5;

function woodCalculator(noOfChair, noOfTable, noOfbed) {
    if (noOfChair >= 0 && noOfTable >= 0 && noOfbed >= 0) {
        var chair = noOfChair * chairNeed;
        var table = noOfTable * tableNeed;
        var bed = noOfbed * bedNeed;
        var total = chair + table + bed;
        return total;
    }

    else {
        console.log("Invalid/ negative number is given");
    }

}

var result = woodCalculator(0, 1, 1);
console.log("Total need of wood is =", result, "qf");


// Brick calculation

function brickCalculator(floor) {
    if (floor != 0 && floor >= 1 && floor <= 10) {
        var totalBrick = floor * 15 * 1000;
    }
    else if (floor >= 10 && floor <= 20) {
        var first10Floor = 150000;
        var secondFloorNum = floor % 10;
        var totalBrick = (secondFloorNum * 12 * 1000) + first10Floor;
    }
    else if (floor > 20) {
        var tillSecond10Floor = 270000;
        var thirdFloorNum = floor % 20;
        var totalBrick = (thirdFloorNum * 10 * 1000) + tillSecond10Floor;
    }
    else {
        console.log("Invalid/ negative number is given");
    }
    return totalBrick;
}

var brickAmount = brickCalculator(18);
console.log("you need total amount od brick is = ", brickAmount);




// Finding the smallest friend

//var friends = ['Misba', 'Tomas', 'Zim', 'Zahidul', 'karim'];
function tinyFriend(friends) {
    var tiny = friends[0];
    for (i = 0; i < friends.length; i++) {
        var temp = friends[i];
        if (temp.length < tiny.length) {
            tiny = temp;
        }

    }
    return tiny;

}

var name = tinyFriend(['Misba', 'Tomas', 'Zim', 'Zahidul', 'karim']);
console.log("Your tiny friend is =", name);


