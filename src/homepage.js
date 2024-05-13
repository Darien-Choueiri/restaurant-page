export default function homeapage() {
    const content = document.querySelector('#content');

    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const para = document.createElement('p');

    h1.textContent = 'Explore Toto';
    h2.textContent = 'Where the teas of the world gather';
    para.textContent = `         
    Welcome to Toto, a teahouse full with the flavors of the world. 
    Enjoy a relaxing cup of tea of your choice, expertly brewed to 
    your personal preferences. We take pride in the many fresh
    tea varietals we offer and our expertise in finding the perfect 
    choice for you!`;

    content.appendChild(h1);
    content.appendChild(h2);
    content.appendChild(para);
};
