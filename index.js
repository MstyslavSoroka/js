// ==========================================================functions==========================================================
function hw3() {
  window.location.href = "hw3/index.html";
}

function hw4() {
  window.location.href = "hw4/index.html";
}

function hw5() {
  window.location.href = "hw5/index.html";
}
// ==========================================================functions==========================================================

// let name = "Максим";
// let age = 55;

// if (age >= 0 && age <= 16) {
//   console.log("діти");
// } else if (age >= 17 && age <= 60) {
//   console.log("дорослі");
// } else if (age >= 61 && age <= 100) {
//   console.log("пенсіонери");
// } else {
//   console.log("error");
// }

// ==========================================

// let name1 = prompt("Ім'я")
// let surname = prompt("Прізвище")

// if (name1.length >= 4 && surname.length >= 5) {
//     console.log(parseInt(name1.length) + parseInt(surname.length));
// } else {
//     console.log("УПС")
// }

// ==================================================

let lang = prompt("choose lang (ua en de fr)");

switch (lang) {
    case 'ua':
        console.log("Січень");
        break;
    case 'en':
        console.log("January");
        break;
    case 'de':
        console.log("Januar");
        break;
    case 'fr':
        console.log("Janvier");
        break;
    default:
        console.log("Мова не підтримується");
}