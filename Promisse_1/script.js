function add(a, b){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(a+b)
        },3000)
    })
  }
  add(5,3).then(result=> 
    console.log(result))




    function checkEvenNumber(number) {
        return new Promise(function(resolve, reject) {
          if (typeof number !== "number") {
            reject("Ошибка: переданное значение не является числом");
          } else if (number % 2 === 0) {
            resolve("Число " + number + " является четным");
          } else {
            resolve("Число " + number + " является нечетным");
          }
        });
      }
      checkEvenNumber(10)
     .then(function(message){
        console.log(message)
      })
      .catch((error) => console.log(error));