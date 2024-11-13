let currentPage = "start";
const points = [];

function addPoint(value) {
    points.push(value);
}

function calculateTotalPoints() {
    return points.reduce((total, point) => total + point, 0);
}

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
    heading.innerText = "Storyn om Frontendutvecklaren";
    const text = document.createElement("p");
    text.innerText = "Höstlöven faller och skolans portar står öppna för en ny generation Frontendutvecklare. Här får du skapa, koda och utforska digitala byggstenar – från pixelperfekt design till smarta funktioner och interaktiva effekter. Med erfarna lärare och spännande projekt utvecklar du dina färdigheter i HTML, CSS, JavaScript och mer. Varje steg tar dig närmare målet att bli en fullfjädrad Frontendutvecklare!\n\nMen innan vi börjar… Vem är du på den här resan? Välj din karaktär och låt äventyret börja – kommer du att ta dig an utmaningarna med en färgstark, kreativ syn, eller är du mer den strukturerade problemlösaren? Ditt val kommer forma din resa och hur du upplever varje steg mot att bli en frontendutvecklare."
    const hedvigButton = createButton("Hedvig den strukturerade", () => nextPage("hedvigSelected"));
    const ottoButton = createButton("Otto den kreative", () => nextPage("ottoSelected"));

    textContainer.appendChild(heading);
    textContainer.appendChild(text);
    textContainer.appendChild(hedvigButton);
    textContainer.appendChild(ottoButton);
}
else if (currentPage === "hedvigSelected") {
    image.src = "Assets/hedvigpicture1.webp";
    const question = document.createElement("h2");
    question.innerText = "Du valde Hedvig!";
    const hedvigText = document.createElement("p");
    hedvigText.innerText = "Hedvig är en noggrann och metodisk problemlösare. Hon älskar ordning och precision och närmar sig varje projekt med en tydlig plan och struktur. För Hedvig är varje detalj viktig, och hon ser till att koden är välskriven och lätt att underhålla.\n\nMen - för att bli en bra Frontendutvecklare på arbetsmarknaden krävs att Hedvig både kan koda OCH vara kunnig inom design. Inför vårterminen behöver hon välja inriktning på vad hon vill lägga mer tid på - antingen fördjupa sig i mer avancerad kod och logiskt tänkande, eller att förbättra sina kunskaper inom design och kreativitet.";
    const creativeButton = createButton("Något kreativt", () => nextPage("creativeChoice"));
    const logicalButton = createButton("Något logiskt", () => nextPage("logicalChoice"));

    textContainer.appendChild(question);
    textContainer.appendChild(hedvigText);
    textContainer.appendChild(creativeButton);
    textContainer.appendChild(logicalButton);
}

else if (currentPage === "ottoSelected") {
    image.src = "Assets/ottopicture2.webp";
    const ottoHeading = document.createElement("h2");
    ottoHeading.innerText = "Du valde Otto!";
    const ottoText = document.createElement("p");
    ottoText.innerText = "Otto är en kreativ själ med ett öppet och utforskande sinne. Han brinner för visuella uttryck och innovativa idéer, och hans tänkande är fritt och lite spretigt. Otto är snabbtänkt och ser lösningar där andra kanske inte tänker att leta, men han tycker att logiskt tänkande och matematik kan vara en utmaning.\n\nFör att bli en framgångsrik Frontendutvecklare på arbetsmarknaden behöver Otto stärka sina tekniska och strukturella färdigheter. När vårterminen närmar sig står Otto inför valet att fördjupa sig i mer avancerad kod och logik, eller att finslipa sina kreativa färdigheter för att bli ännu starkare inom design.";
    const creativeButton = createButton("Något kreativt", () => nextPage("creativeChoice"));
    const logicalButton = createButton("Något logiskt", () => nextPage("logicalChoice"));

    textContainer.appendChild(ottoHeading);
    textContainer.appendChild(ottoText);
    textContainer.appendChild(creativeButton);
    textContainer.appendChild(logicalButton);
}

else if (currentPage === "creativeChoice") {
    image.src = "Assets/creativeclassroom.webp";
    const headingHedvigCreativeChoice = document.createElement("h2");
    headingHedvigCreativeChoice.innerText = "Välkommen till UX-kursen!";
    const textHedvigCreativeChoice = document.createElement("p");
    textHedvigCreativeChoice.innerText = "Vilken färgkombination ger en mer sofistikerad och lugn känsla i design?";
    const correctAnswerButton = createButton("Marinblå och beige", () => {
        addPoint(10);
        nextPage("levelSelectionJS");
    });
    const incorrectAnswerButton = createButton("Orange och lila", () => nextPage("basicLevelHTML"));

    textContainer.appendChild(headingHedvigCreativeChoice);
    textContainer.appendChild(textHedvigCreativeChoice);
    textContainer.appendChild(correctAnswerButton);
    textContainer.appendChild(incorrectAnswerButton);
}

else if (currentPage === "logicalChoice") {
    image.src = "Assets/backendclassroom2.webp";
    const headingHedvigLogicalChoice = document.createElement("h2");
    headingHedvigLogicalChoice.innerText = "Välkommen till fördjupningskursen om olika kodsyntax!";
    const textHedvigLogicalChoice = document.createElement("p");
    textHedvigLogicalChoice.innerText = "Vilket av följande sätt används för att kontrollera om två värden är exakt lika i JavaScript?";

    textContainer.appendChild(headingHedvigLogicalChoice);
    textContainer.appendChild(textHedvigLogicalChoice);

}


const scoreDisplay = document.createElement("p");
scoreDisplay.className = "score-display";
scoreDisplay.innerText = `Total poäng: ${calculateTotalPoints()}`;

app.appendChild(scoreDisplay);
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
