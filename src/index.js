function displayStory(response){
    console.log("Story Generated")
    new Typewriter("#division-story", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
       });
}


function generateStory(event){
    event.preventDefault();

    let userInput = document.querySelector("#story-input");
    
    let apiKey = "a27d320o50dd0fb63e6t6dc778bc438b";
    let prompt = `Generate me an amazing and incredible ${userInput.value}`;
    let context = "Please make the story very short and easy to understand for both adults and children and use emojis and make the stories about humans. please stop using Null. use different characters each time and different scenarios";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let hidden = document.querySelector(".hidden");
    hidden.classList.remove("hidden");
    hidden.innerHTML = `<span class= "blink">⌛</span>Generating a ${userInput.value}`;

    console.log("Generate Story")
    console.log(`Prompt: ${prompt}`)
    console.log(`Context: ${context}`)

    axios.get(apiUrl).then(displayStory);
}

let storyGenerator = document.querySelector("#story-generator");
storyGenerator.addEventListener("submit", generateStory)
