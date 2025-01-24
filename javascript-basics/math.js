function add7(number){
    console.log("add7 returned " + Number(number + 7));
}

add7(9);

let multiply = function(number, number2){
    console.log("multiply returned " + Number(number * number2));
}

multiply(9, 16);

let capitalize = (string) =>{
    string = string.toLowerCase();
    char = string[0].toUpperCase();
    string = string.replace(string[0], char);
    console.log("capitalize returned " + string);
};

capitalize("dfRhjughhjHTGghjk");
capitalize("IAIONDIOAUQWBBU");

let lastLetter = (string) => {
    console.log("lastLetter returned " + string[string.length - 1]);
};

lastLetter("BEEZLEBUB");