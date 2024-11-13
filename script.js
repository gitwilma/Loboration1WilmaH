let currentPage = "start";
const points = [];

const app = document.getElementById("app");
let textContainer;
let imageContainer;

function addPoint(value) {
    points.push(value);
}

function calculateTotalPoints() {
    return points.reduce((total, point) => total + point, 0);
}

function renderPage() {
    app.innerHTML = "";

    imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    textContainer = document.createElement("div");
    textContainer.className = "text-container";

    const image = document.createElement("img");
    image.src = "Assets/frontendschool.webp";
    image.className = "my-image-class";
    imageContainer.appendChild(image);

    app.appendChild(imageContainer);
    app.appendChild(textContainer);


if (currentPage === "start") {
    const heading = document.createElement("h1");
    heading.innerText = "En Frontendutvecklares Resa";
    const text = document.createElement("p");
    text.innerText = "Höstlöven faller och skolans portar står öppna för en ny generation Frontendutvecklare. Med erfarna lärare och spännande projekt utvecklar eleverna sina färdigheter i HTML, CSS, JavaScript och mer. Men innan vi börjar… Vilken karaktär vill du följa på den här resan? Välj din karaktär och låt äventyret börja – ditt val kommer forma resan och hur du upplever varje steg mot att bli en frontendutvecklare. För att klara spelet krävs full pott på de kunskapskontroller du ställs inför. Lycka till!"
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
    const headingCreativeChoice = document.createElement("h2");
    headingCreativeChoice.innerText = "UX och Usability";
    const textCreativeChoice = document.createElement("p");
    textCreativeChoice.innerText = "Vilken färgkombination ger en mer sofistikerad och lugn känsla i design?";
    const correctAnswerButton = createButton("Marinblå och beige", () => {
        addPoint(50);
        showSecondCreativeQuestion();
    });
    const incorrectAnswerButton = createButton("Orange och lila", () => showSecondCreativeQuestion());

    textContainer.appendChild(headingCreativeChoice);
    textContainer.appendChild(textCreativeChoice);
    textContainer.appendChild(correctAnswerButton);
    textContainer.appendChild(incorrectAnswerButton);
}

else if (currentPage === "logicalChoice") {
    image.src = "Assets/backendclassroom2.webp";
    const headingHedvigLogicalChoice = document.createElement("h2");
    headingHedvigLogicalChoice.innerText = "Avancerad Programmering och Logik";
    const textHedvigLogicalChoice = document.createElement("p");
    textHedvigLogicalChoice.innerText = "Vilket av följande sätt används för att kontrollera om två värden är exakt lika i JavaScript?";
    const incorrectAnswerButtonLogic = createButton("==!", () => showSecondLogicalQuestion());
    const correctAnswerButtonLogic = createButton("===", () => {
        addPoint(50);
        showSecondLogicalQuestion();
    })

    textContainer.appendChild(headingHedvigLogicalChoice);
    textContainer.appendChild(textHedvigLogicalChoice);
    textContainer.appendChild(incorrectAnswerButtonLogic);
    textContainer.appendChild(correctAnswerButtonLogic);

}

else if (currentPage === "internshipApplicationSuccess") {
    image.src = "Assets/techcompany2.webp";
    const headingInternshipApplicationSuccess = document.createElement("h2");
    headingInternshipApplicationSuccess.innerText = "Stort grattis!";
    const textInternshipApplicationSuccess = document.createElement("p");
    textInternshipApplicationSuccess.innerText = "Fantastiskt jobbat! Du har bevisat dina färdigheter och klarat av alla utmaningar med full pott. Med både kreativitet och kodkunskaper har du tagit dig hela vägen och visat att du har vad som krävs för att bli en fullfjädrad frontendutvecklare. Framtiden som utvecklare ligger framför dig – det här är bara början! Grattis och lycka till på din fortsatta resa!";
    const goBackButton = createButton("Tillbaka till startsidan", () => nextPage("start"));

    textContainer.appendChild(headingInternshipApplicationSuccess);
    textContainer.appendChild(textInternshipApplicationSuccess);
    textContainer.appendChild(goBackButton);
}

else if (currentPage === "internshipApplicationDenied") {
    image.src = "Assets/applicationdenied.webp";
    const headingInternshipApplicationDenied = document.createElement("h2");
    headingInternshipApplicationDenied.innerText = "Tyvärr, du nådde inte hela vägen fram den här gången.";
    const textInternshipApplicationDenied = document.createElement("p");
    textInternshipApplicationDenied.innerText = "Men misströsta inte! Alla stora utvecklare har mött utmaningar längs vägen, och varje misstag är en chans att växa och bli bättre. Du har nu möjligheten att starta om från början, med ny erfarenhet och kunskap i bagaget. Ta dig an utmaningarna igen, lär dig av det du har gått igenom, och visa vad du går för. Vi tror på dig – du har det som krävs för att lyckas!";
    const tryAgainButton = createButton("Försök igen", () => nextPage("start"));

    textContainer.appendChild(headingInternshipApplicationDenied);
    textContainer.appendChild(textInternshipApplicationDenied);
    textContainer.appendChild(tryAgainButton);
}


const scoreDisplay = document.createElement("p");
scoreDisplay.className = "score-display";
scoreDisplay.innerText = `Total poäng: ${calculateTotalPoints()}`;

app.appendChild(scoreDisplay);
} 

function showSecondCreativeQuestion() {
    textContainer.innerHTML = "";

    const headingSecondCreativeQuestion = document.createElement("h2");
    headingSecondCreativeQuestion.innerText = "UX och Usability";
    const textSecondCreativeQuestion = document.createElement("p");
    textSecondCreativeQuestion.innerText = "Vilken färg på knappar är oftast mest användarvänlig för att visa en bekräfta-åtgärd?";
    const correctAnswerButton2 = createButton("Grön", () => {
        addPoint(50);
        checkScoreAndProceed();
    });
    const incorrectAnswerButton2 = createButton("Röd", () => nextPage("internshipApplicationDenied"));

    textContainer.appendChild(headingSecondCreativeQuestion);
    textContainer.appendChild(textSecondCreativeQuestion);
    textContainer.appendChild(correctAnswerButton2);
    textContainer.appendChild(incorrectAnswerButton2);
}

function showSecondLogicalQuestion() {
    textContainer.innerHTML = "";

    const headingSecondLogicalQuestion = document.createElement("h2");
    headingSecondLogicalQuestion.innerText = "Avancerad Programmering och Logik";
    const textSecondLogicalQuestion = document.createElement("p");
    textSecondLogicalQuestion.innerText = "Hur anropar du en funktion med namnet myFunction i JavaScript?";
    const correctAnswerButtonLogic2 = createButton("myFunction();", () => {
        addPoint(50);
        checkScoreAndProceed();
    });
    const incorrectAnswerButtonLogic2 = createButton("call myFunction", () => nextPage("internshipApplicationDenied"));

    textContainer.appendChild(headingSecondLogicalQuestion);
    textContainer.appendChild(textSecondLogicalQuestion);
    textContainer.appendChild(correctAnswerButtonLogic2);
    textContainer.appendChild(incorrectAnswerButtonLogic2);
}

function checkScoreAndProceed() {
    if (calculateTotalPoints() >= 100) {
        nextPage("internshipApplicationSuccess");
    } else {
        nextPage("internshipApplicationDenied");
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
