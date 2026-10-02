const surpriseButton = document.querySelector("#surprise-button");
const sortNameButton = document.querySelector("#sort-name-button");
const sortYearButton = document.querySelector("#sort-year-button");


//artistes
const band = [
    {
        name: "Sabaton",
        genre: "War Metal/ Historical Metal",
        year: 1999,
        picture: "Image/sabaton.png",
        Fun_Fact: "Leurs musics parle de l'histoire par exemple leur music 'Chrismas Truce' parle du moment durant la première guèrre mondiale où les deux camps ont arreté de se battre pour fêter Noël.",

        name: "Alestorm",
        genre: "Pirate Metal",
        year: "2004",
        picture: "Image/alestorm.png",
        Fun_Fact: "Durant leurs concert ils ont un gros canards jaune gonflable.",

        name: "Metallica",
        genre: "Heavy Metal",
        year: "1981",
        picture: "Image/metallica.png",
        Fun_Fact: "Metallica est le premier groupe de musique à avoir joué sur tous les continents avec un concert en Antartique appelé 'Freeze 'Em All'."
    } //tu duplique la section entre {} et les {} en ajoutant une virgule a la fin pour ajouter les autres

]



const Band_Cards = document.querySelectorAll(".band");
const Band_Container = document.querySelector("#band");

const cardsNameSort = Array.from(Band_Cards);

cardsNameSort.sort(function(a, b) {
    const nameA = a.querySelector(".band-name").textContent;
    const nameB = b.querySelector(".band-name").textContent;
    return nameA.localeCompare(nameB);
});

const cardsYearSort = Array.from(Band_Cards);

cardsYearSort.sort(function(a, b) {
    const yearA = a.querySelector(".band-year").textContent;
    const yearB = b.querySelector(".band-year").textContent;
    return yearA-yearB;
});


function sortBandByName() {
    cardsNameSort.sort();
    console.log(cardsNameSort.sort());
    cardsNameSort.forEach(function(anArtist) {
        Band_Container.appendChild(anArtist);
    });
}

sortNameButton.addEventListener("click", sortBandByName);

function sortBandByYear() {
    cardsYearSort.sort();
    console.log(cardsYearSort.sort());
    cardsYearSort.forEach(function(anArtist) {
        Band_Container.appendChild(anArtist);
    });
}

sortYearButton.addEventListener("click", sortBandByYear);