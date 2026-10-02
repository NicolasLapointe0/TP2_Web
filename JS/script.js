const surprise_Button = document.querySelector("#surprise-button");
const sort_Name_Button = document.querySelector("#sort-name-button");
const sort_Year_Button = document.querySelector("#sort-year-button");


const bands = [
    {
        name: "Sabaton",
        genre: "War Metal/ Historical Metal",
        year: 1999,
        picture: "Image/sabaton.png",
        Fun_Fact: "Leurs musics parle de l'histoire par exemple leur music 'Chrismas Truce' parle du moment durant la première guèrre mondiale où les deux camps ont arreté de se battre pour fêter Noël."
    },
    {
        name: "Alestorm",
        genre: "Pirate Metal",
        year: 2004,
        picture: "Image/alestorm.png",
        Fun_Fact: "Durant leurs concert ils ont un gros canards jaune gonflable."
    },
    {
        name: "Metallica",
        genre: "Heavy Metal",
        year: 1981,
        picture: "Image/metallica.png",
        Fun_Fact: "Metallica est le premier groupe de musique à avoir joué sur tous les continents avec un concert en Antartique appelé 'Freeze 'Em All'."
    },
    
    {
        name: "Megadeth",
        genre: "Heavy Metal",
        year: 1983,
        picture: "Image/megadeth.png",
        Fun_Fact: "Dave Mustaine a eu l'idée du nom Megadeth du pamphlet politique évoquant 'arsenal of megadeath' qui signifie un million de morts causée par une guèrre nucléaire."
    },

    {
        name: "Ghost",
        genre: "Rock# Heavy Metal",
        year: 2006,
        picture: "Image/ghost.png",
        Fun_Fact: "Ghost est essentieellement un projet solo où Tobias Forge compose et enregistre lui-même la quasi-totalité de la musique avec un rotating lineup de musiciens anonymes connus sous le nom de 'Nameless Ghouls'."
    }

];



const band_Cards = document.querySelectorAll(".band");
const band_Container = document.querySelector("#bands");

const cards_Name_Sort = Array.from(band_Cards);

cards_Name_Sort.sort(function(a, b) {
    const nameA = a.querySelector(".band-name").textContent;
    const nameB = b.querySelector(".band-name").textContent;
    return nameA.localeCompare(nameB);
});

const cards_Year_Sort = Array.from(band_Cards);

cards_Year_Sort.sort(function(a, b) {
    const yearA = a.querySelector(".band-year").textContent;
    const yearB = b.querySelector(".band-year").textContent;
    return yearA-yearB;
});


function sort_Band_By_Name() {
    cards_Name_Sort.sort();
    console.log(cards_Name_Sort.sort());
    cards_Name_Sort.forEach(function(aBand) {
        band_Container.appendChild(aBand);
    });
}

sort_Name_Button.addEventListener("click", sort_Band_By_Name);

function sort_Band_By_Year() {
    cards_Year_Sort.sort();
    console.log(cards_Year_Sort.sort());
    cards_Year_Sort.forEach(function(aBand) {
        band_Container.appendChild(aBand);
    });
}

sort_Year_Button.addEventListener("click", sort_Band_By_Year);




function surprise_Button_Function(){

   window.open('https://youtu.be/Cxqca4RQd_M?si=7oQ-l7KW-wuevkqV');
}

surprise_Button.addEventListener('click', surprise_Button_Function)