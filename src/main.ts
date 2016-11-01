import { greet } from "./greeter";

function sayHello(divName: string, name: string) {
    const elem = document.getElementById(divName);
    elem.innerText = greet(name);
}

sayHello("content", "Squirrel");