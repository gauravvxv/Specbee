
const data = [
    {
        img: "./images/speaker-1.png",
        name: "John Doe",
        position: "Chief Marketing Officer",
        company: 'Acme Corp'
    },
    {
        img: "./images/speaker 2.png",
        name: "John Doe",
        position: "Chief Engagement Officer",
        company: 'Acquia'
    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon'
    },
    {
        img: "./images/speaker 4.png",
        name: "John Doe",
        position: "Chief Marketing Officer",
        company: 'Specbee'
    }
]

let cards = document.querySelector(".cards");

data.forEach((e)=>{
    let card = document.createElement("article");
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = e.img;

    let name = document.createElement("h2");
    name.textContent = e.name;

    let position = document.createElement('h3');
    position.classList.add("position")
    position.textContent = e.position;

    let company = document.createElement('p');
    company.classList.add("company")
    company.textContent = e.company;

    card.append( img , name , position , company );

    cards.append(card);



    
})