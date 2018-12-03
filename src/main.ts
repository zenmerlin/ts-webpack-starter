import { greet, Person, Student } from "./greeter";
import "./style.css";
import zenCircle from "./zen_circle.png";

function sayHello(divName: string, person: Person) {
  const elem = document.getElementById(divName);
  elem.classList.add("hello");
  elem.innerText = greet(person);
}

let person: Person = { firstName: "Person", lastName: "One" };

let student: Student = new Student("Person", "2", "Two");

let mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "content");
document.body.appendChild(mainDiv);

sayHello("content", student);

let imageDiv = document.createElement("div");
let myImage = new Image();
myImage.src = zenCircle;
imageDiv.appendChild(myImage);
document.body.appendChild(imageDiv);
