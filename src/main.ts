import { greet } from "./greeter";
import { Person } from "./greeter";
import { Student } from "./greeter";
import "./style.css";
// error: cannot find module zen_circle?
// import Pic from "./zen_circle.png";

function sayHello(divName: string, person: Person) {
  const elem = document.getElementById(divName);
  elem.classList.add("hello");
  // elem.appendChild(new Image().src = Pic);
  elem.innerText = greet(person);
}

let person: Person = { firstName: "Person", lastName: "One" };

let student: Student = new Student("Person", "2", "Two");

let mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "content");
document.body.appendChild(mainDiv);

sayHello("content", student);
