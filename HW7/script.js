


//Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
function numbers() {
  var div = document.querySelector('.numbers');
  for (var num = 100; num >= 50; num -= 10) {
    var paragraph = document.createElement('p');
    paragraph.textContent = num;
    div.appendChild(paragraph);
  }

}
numbers()




//Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
function usersInfo() {
  let strings = ["Hello,world", "How are you", "What is your name", "How old are you"];
  for (let i = 0; i < strings.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = strings[i];
    container.appendChild(paragraph);

  }

}
usersInfo()



//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.
function usersContainers() {
  const usersDetails = [
    {
      first_name: "Victor",
      last_name: "Stolz",
      age: 27
    },
    {
      first_name: "Ivan",
      last_name: "Ivanov",
      age: 35
    },
    {
      first_name: "Nicolai",
      last_name: "Slabu",
      age: 15
    }
  ];

  const section = document.querySelector("section")

  for (let i = 0; i < usersDetails.length; i++) {
    if (usersDetails[i].age > 18) {
      console.log(usersDetails[i].first_name, usersDetails[i].last_name, usersDetails[i].age);
    }

    section.innerHTML += `<div class ="usersContainer">
                                   <p>${usersDetails[i].first_name}</p>
                                   <p>${usersDetails[i].last_name}</p>
                                   <p>${usersDetails[i].age}</p>       
                            </div> `;
  }
}

usersContainers();