let currentPage = "start";

function renderPage() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    const image = document.createElement("img");
    image.src = "Assets/frontendschool.webp";
    image.className = "my-image-class";
    imageContainer.appendChild(image);

    app.appendChild(imageContainer);
    app.appendChild(textContainer);


if (currentPage === "start") {
    const heading = document.createElement("h1");
    heading.innerText = "Storyn om frontendutvecklaren";
    const text = document.createElement("p");
    text.innerText = "Höstlöven faller och skolans portar står öppna för en ny generation frontendutvecklare. Här kommer du att få skapa, koda och utforska den digitala världens byggstenar - allt från pixelperfekt design till smarta funktioner och interaktiva effekter. På den här skolan möts du av erfarna lärare, ivriga klasskamrater och spännande projekt. Du kommer att ställas inför utmaningar där både kreativitet och teknik spelar huvudrollen, och du får chansen att vässa dina färdigheter i HTML, CSS, JavaScript och mycket mer. För varje steg du tar kommer du närmare målet att bli en fullfjädrad frontendutvecklare! Men innan vi börjar… Vem är du på den här resan? Välj din karaktär och låt äventyret börja – kommer du att ta dig an utmaningarna med en färgstark, kreativ syn, eller är du mer den strukturerade problemlösaren? Ditt val kommer forma din resa och hur du upplever varje steg mot att bli en frontendutvecklare."
    const hedvigButton = createButton("Hedvig den strukturerade", () => nextPage("levelSelectionHTML"));
    const ottoButton = createButton("Otto den kreative", () => nextPage("faq"));

    textContainer.appendChild(heading);
    textContainer.appendChild(text);
    textContainer.appendChild(hedvigButton);
    textContainer.appendChild(ottoButton);
}
else if (currentPage === "levelSelectionHTML") {
    const question = document.createElement("h2");
    question.innerText = "Välj erfarenhetsnivå för HTML/CSS-kursen";
    const basicButtonHTML = createButton("Grundnivå", () => nextPage("basicLevelHTML"));
    const advancedButtonHTML = createButton("Fördjupning", () => nextPage("advancedLevelHTML"));

    textContainer.appendChild(question);
    textContainer.appendChild(basicButtonHTML);
    textContainer.appendChild(advancedButtonHTML);
}

else if (currentPage === "faq") {
    const faqText = document.createElement("p");
    faqText.innerText = "Här är information om kursen. Är du redo att börja nu?";
    const readyButton = createButton("Nu är jag redo att börja", () => nextPage("levelSelectionHTML"));
    const backButton = createButton("Tillbaka till startsidan", () => nextPage("start"));

    textContainer.appendChild(faqText);
    textContainer.appendChild(readyButton);
    textContainer.appendChild(backButton);
}

else if (currentPage === "basicLevelHTML") {
    const headingBasicLevelHTML = document.createElement("h2");
    headingBasicLevelHTML.innerText = "HTML och CSS Grundnivå";
    const questionOneBasicLevelHTML = document.createElement("p");
    questionOneBasicLevelHTML.innerText = "Vad är HTML-taggen för en rubrik på högsta nivå?";
    const correctAnswerButton = createButton("<h1>", () => nextPage("levelSelectionJS"));
    const incorrectAnswerButton = createButton("<header>", () => nextPage("basicLevelHTML"));

    textContainer.appendChild(headingBasicLevelHTML);
    textContainer.appendChild(questionOneBasicLevelHTML);
    textContainer.appendChild(correctAnswerButton);
    textContainer.appendChild(incorrectAnswerButton);
}
} 

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.innerText = text;
    button.className = "style-button";
    button.addEventListener("click", onClick);
    return button;
}

function nextPage(page) {
    currentPage = page;
    renderPage();
}

renderPage();
