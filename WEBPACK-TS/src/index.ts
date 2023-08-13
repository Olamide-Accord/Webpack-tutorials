import generateJoke from "./generateJoke"
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg') as HTMLImageElement;
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn') as HTMLButtonElement;
jokeBtn.addEventListener('click', generateJoke);

generateJoke()