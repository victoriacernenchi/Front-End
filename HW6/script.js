
//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.


function even_odd (a,b) {
    let start = Math.max(a,b);
    let end = Math.min(a,b);
    for (let num = start; num >= end; num --){
        if(num % 2 ===0){
            console.log(num)
         }
    }
}
   even_odd(20,60)
    



//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2

function power (base, exponent = 2){
    return Math.pow(base,exponent);
    
}
console.log(power(24))


//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumNumbers(n){
    let sum = 0;
    for(let i= 1; i <= n; i++){
        sum+=i
    }
    return sum;
}
console.log(sumNumbers(8))





//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).


function sum_even_odd(n,m){
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = n; i <= m; i++){
        if(i % 2 ===0){
            sumEven +=i;}
        else{
            sumOdd +=i;
         }    
}
console.log("Sum of even numbers:"+ sumEven);
console.log("Sum of odd numbers:"+ sumOdd)
}
sum_even_odd(15,33)
    




/*Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
Пример: [ 'one', 'two', 'three' ] => 'three'*/

function getLongestString(arr){
    if(arr.length === 0){
        return null;
    }
    let longest = arr[0];
    for(let i =1; i< arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}
console.log(getLongestString (["unu","doi","trei"]))




