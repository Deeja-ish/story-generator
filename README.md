# AI-Powered Story Generator

This project is a web-based story generator that leverages an AI API to create unique narratives based on user prompts and context. Built with HTML, CSS, and JavaScript, it provides a simple and interactive way to explore AI storytelling.

## How It Works

1.  **User Input:** You provide a prompt and any relevant context for the story you want to generate through the web interface.
2.  **API Interaction:** The JavaScript code takes your input and sends it as a request to a connected AI API endpoint (`apiURL`).
3.  **AI Processing:** The AI model processes your request, using the prompt and context to generate a story.
4.  **Story Display:** The generated story is then received by the JavaScript code and dynamically displayed on the webpage.

## Files Included

* `index.html`: The main HTML file that structures the user interface (input fields, buttons, display area).
* `style.css`: The CSS file responsible for the styling and visual presentation of the story generator.
* `index.js`: The JavaScript file containing the logic for handling user input, making API calls, and updating the HTML with the generated story.

## Setup and Usage

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Deeja-ish/story-generator.git
    cd Deeja-ish/story-generator.git
    ```

2.  **API Key and `apiURL`:**
    * **Important:** This project relies on an AI API. Ensure you have a valid API key.
    * In your `index.js` file, you will need to replace the placeholder `apiURL` with the actual endpoint provided by your AI service

3.  **Open `index.html`:** Open the `index.html` file in your web browser.

4.  **Generate Stories:**
    * In the input field labeled "Enter your story" enter the main idea or starting point for your story.
    * In the "Context" field (if available), provide any additional information or background that might help the AI generate a more relevant story.
    * Click the "Submit" button.
    * The generated story will appear in the designated display area on the page.

## Technologies Used

* HTML
* CSS
* JavaScript
* SheCodes API

## API Information

* **API Provider:** (https://www.shecodes.io/)
## Contributing

If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -am 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a pull request.

## License

    MIT License

## Acknowledgements

* Thanks to SheCodes for providing the AI technology.
