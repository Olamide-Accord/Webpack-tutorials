import axios from "axios";

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  axios.get('https://icanhazdadjoke.com', config).then(res => {
    const joke = document.getElementById('joke') as HTMLElement;
    joke.innerHTML = res.data.joke;
  })
}

export default generateJoke;