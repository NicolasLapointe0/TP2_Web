const surprise_Button = document.querySelector("#surprise-button");
const sort_Name_Button = document.querySelector("#sort-name-button");
const sort_Year_Button = document.querySelector("#sort-year-button");
//trouve les boutons


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
//array avec tout les trucs pour chaques groupes



const band_Cards = document.querySelectorAll(".band");
//trouve tous les element matchant la classe band

const band_Container = document.querySelector("#bands");
//trouve le premier element  matchant l'id bands

const cards_Name_Sort = Array.from(band_Cards);
//trouve tout les trucs des arrays band_Cards

cards_Name_Sort.sort(function(a, b) {
    const nameA = a.querySelector(".band-name").textContent;
    const nameB = b.querySelector(".band-name").textContent;
    return nameA.localeCompare(nameB);
});
//trie les cartes (encadrés rouges) par ordre alphabetic via le nom du groupe

const cards_Year_Sort = Array.from(band_Cards);
//trouve tout les trucs des arrays band_Cards

cards_Year_Sort.sort(function(a, b) {
    const yearA = a.querySelector(".band-year").textContent;
    const yearB = b.querySelector(".band-year").textContent;
    return yearA-yearB;
});
//trie les cartes (encadrés rouges) par ordre croissant en fonction des années


function sort_Band_By_Name() {
    cards_Name_Sort.sort();
    console.log(cards_Name_Sort.sort());
    cards_Name_Sort.forEach(function(aBand) {
        band_Container.appendChild(aBand);
    });
}
//effectue le changement visuel du classement par ordre alphabetique

sort_Name_Button.addEventListener("click", sort_Band_By_Name);
//event listener du bouton pour trier par le nom

function sort_Band_By_Year() {
    cards_Year_Sort.sort();
    console.log(cards_Year_Sort.sort());
    cards_Year_Sort.forEach(function(aBand) {
        band_Container.appendChild(aBand);
    });
}
//effectue les changements visuel du classement par années

sort_Year_Button.addEventListener("click", sort_Band_By_Year);
//event listener du bouton pour trier par années


function surprise_Button_Function(){

   window.open('https://youtu.be/Cxqca4RQd_M?si=7oQ-l7KW-wuevkqV');
}
//logique bouton surprise

surprise_Button.addEventListener('click', surprise_Button_Function)
//event listener du bouton surprise