// Code your solution in this file!
const ScuberHq = 42;
function distanceFromHqInBlocks(num) {
    if (num > ScuberHq) {
        return num - ScuberHq;
    }
    return ScuberHq - num;
}
// console.log(distanceFromHqInBlocks(34));
function distanceFromHqInFeet(num) {
    let Block = distanceFromHqInBlocks(num)
    return Block * 264;
}
// console.log(distanceFromHqInFeet(34));
function distanceTravelledInFeet(num1, num2) {
    if (num1 < num2) {
        return (num2 - num1) * 264;
    }
    return (num1 - num2) * 264;
}
// console.log(distanceTravelledInFeet(43, 44));
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    return 'cannot travel that far';
}
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));
