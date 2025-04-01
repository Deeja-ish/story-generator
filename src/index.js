function generateStory(event){
    event.preventDefault();
    
    new Typewriter("#division-story", {
     strings: "Dust motes danced in the moonlit hall.A single rocking chair moved, tap... tap... tap.  No breeze stirred.",
     autoStart: true,
     delay: 1,
    });

}

let storyGenerator = document.querySelector("#story-generator");
storyGenerator.addEventListener("submit", generateStory)
