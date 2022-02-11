var ageRestriction = 16;
var driverAge = 18;
if (driverAge < ageRestriction) 
{
    console.log("You are not old enough to drive.");
}
else{
    console.log("You are able to drive.");
}

var grade ="x";

switch (grade.toUpperCase()) {
    case "A":
        console.log("90-100%");
        break;
    case "B":
        console.log("80-89%");
        break;
    case "C":
        console.log("70-79%");
        break;
    case "D":
        console.log("60-69%");
        break;    
    default:
        console.log("0-59%");
        break;
}