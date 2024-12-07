//1) write a function that converts naria to dollar (usin 1 dollar to 1600 naira)
function convertNaira(dollar){
    const naira = 1600;
    return dollar * 1600;

}

let currentRate = convertNaira(1);


console.log(currentRate);


//2) write a function that converts temperature in kelvin to celcius



function kelvinToCel(kelvin)
{
    let cel = kelvin - 273;
    return cel;
}
console.log(kelvinToCel(700));

// 3) write a function that uses the almighty formula to solve quadratic equation


function quad(a,b,c){
    let d = b**2-4 * a * c;
    let sq = d ** 0.5;
    let solOnum = -b +sq;
    let solTwonum = -b -sq;
    let sol1 = solOnenum /(2*a);
    let sol2 = solTwonum / (2*a);
    return sol1, sol2
}


console.log(quad(3,4,6));
