
function order() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0)
            console.log(i)
    }
}
order()





function printNumbers() {
    for (let i = 55; i >= 20; i--) {
        console.log(i)
    }
}
printNumbers()







function numbers() {
    const arr = [3, 5, 11, 2, 8, 1, 6];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
numbers()

function numbers_squared() {
    const arr = [3, 5, 11, 2, 8, 1, 6];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * arr[i])
    }
    let numbers_squared = [];
    for (let i = 0; i < arr.length; i++) {
        numbers_squared.push(arr[i] * arr[i])
    }
    let last_elem = numbers_squared[numbers_squared.length]

    for (let i = 0; i < arr.length; i++) {
        console.log(numbers_squared[i])
    }
    console.log(numbers_squared[numbers_squared.length - 1])
}
numbers_squared()





const user =
{
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    salary: 500
}

alert("User`s name is ${first_name},${last_name}.He is  ${age} years old");








