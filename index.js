const btnEle = document.querySelector(".btn");
const joke = document.querySelector(".joke");

async function getJoke(){
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b93498b94mshf2b8288d86f5d7ap129577jsnacb571cd9af7',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    
    try {
        joke.textContent = "updating...";
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.body[0].setup);
        joke.textContent = result.body[0].setup;
    } catch (error) {
        joke.textContent = error;
        console.error(error);
    }
}

btnEle.addEventListener('click',getJoke);