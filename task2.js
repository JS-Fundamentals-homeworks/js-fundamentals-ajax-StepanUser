// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const getUserButton = document.querySelector("#getUserButton");
const userNameInput = document.querySelector("#userNameInput");
const userCityElement = document.querySelector("#userCity");

getUserButton.addEventListener("click", async () => {
  const userName = userNameInput.value;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const user = users.find((user) => user.name === userName);
    if (user) {
      const userCity = user.address.city;
      userCityElement.textContent = userCity;
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error during loading user names:", error);
  }
});
