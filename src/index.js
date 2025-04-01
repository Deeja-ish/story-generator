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

    let input = document.querySelector("#story-input")
    
    let apiKey = "a27d320o50dd0fb63e6t6dc778bc438b"
    let prompt = `Generate me an amazing ${input}`
    let context = "Please make the story very short and easy to understand for both adults and children and use emojis and make the stories about humans. please stop using Null"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    console.log("Generate Story")
    console.log(`Prompt: ${prompt}`)
    console.log(`Context: ${context}`)

    axios.get(apiUrl).then(displayStory)
}

let storyGenerator = document.querySelector("#story-generator");
storyGenerator.addEventListener("submit", generateStory)
