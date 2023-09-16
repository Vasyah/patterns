// Import stylesheets
import { userFactory } from './patterns/сreational/factory';
import './style.css';

const vasyaUser = userFactory('Vasya', 18, 'NSK');
const jenyaUser = userFactory('Jenya', 6, 'MSK');

console.log({ vasyaUser, jenyaUser });
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
