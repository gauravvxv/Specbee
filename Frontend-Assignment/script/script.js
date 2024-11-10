

const data = [
    {
        img: "./images/speaker-1.png",
        name: "John Doe",
        position: "Chief Marketing Officer",
        company: 'Acme Corp',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
    },
    {
        img: "./images/speaker 2.png",
        name: "John Doe",
        position: "Chief Engagement Officer",
        company: 'Acquia',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 4.png",
        name: "John Doe",
        position: "Chief Marketing Officer",
        company: 'Specbee',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
    {
        img: "./images/speaker 3.png",
        name: "John Doe",
        position: "Chief Technical Developer",
        company: 'Pantheon',
        bio: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'

    },
]


let cards = document.querySelector(".cards");
let currentPage = 0;
let limit = 4;


let speakers = () => {
    cards.innerHTML = '';
    const start = currentPage * limit;
    const end = start + limit;
    let speak = data.slice(start , end);

speak.forEach((e)=>{
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
    
    card.addEventListener('click' , ()=>{
        localStorage.setItem('speaker', JSON.stringify(e));
        display();
    })
    
    cards.append(card);
    
})
}

document.getElementById('next').addEventListener("click" , ()=>{
    if((currentPage + 1) * limit<data.length){
        currentPage++;
        speakers()
    }
})

document.getElementById('prev').addEventListener('click' , () => {
    if(currentPage > 0){
        currentPage--;
        speakers();
    }
})

speakers();

function display(){
    
    let popupContainer = document.querySelector('.popup-container');    
    popupContainer.innerHTML = '';

    
    let e = JSON.parse(localStorage.getItem('speaker'));
    
    if(e){

        let popup = document.createElement('article');
        popup.classList.add('popup');

        let card = document.createElement("header");
        card.classList.add('card-popup');

        let img = document.createElement('img');
        img.classList.add("img2");
        img.src = e.img;

        let profile = document.createElement("div");
        profile.classList.add("profile-info");

        let name = document.createElement("h2");
        name.classList.add('name')
        name.textContent = e.name;

        let position = document.createElement('h3');
        position.classList.add("pos");
        position.textContent = e.position;

        let company = document.createElement("p");
        company.classList.add("com");
        company.textContent = e.company;

        let nav = document.createElement("nav");
    nav.classList.add("social");

    let vector = document.createElement('img');
    vector.src = './images/vector.png'

     let linkedin = document.createElement('img');
    linkedin.src = './images/linkedin.png'

     let twitter = document.createElement('img');
    twitter.src = './images/X.png'

    nav.append(vector , linkedin, twitter);

    let cancel = document.createElement('button');
    cancel.classList.add('close-btn')
        cancel.innerHTML = `&times;`;

        cancel.addEventListener("click" , ()=>{
           localStorage.removeItem('speaker')  
         popupContainer.innerHTML= '';
        })

    profile.append(name , position , company , nav , cancel);

   

    card.append(img , profile );

    let description = document.createElement("section");
    description.classList.add('card-content');

    let content = document.createElement('p');
    content.textContent = e.bio;

    description.append(content);

    popup.append(card , description);

    popupContainer.append(popup)



    }

}





