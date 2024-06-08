function contact(){
    const content = document.querySelector('#content');

    const contactBoard = document.createElement('div');
    contactBoard.classList.add('contactBoard');

    contactBoard.appendChild(new contactPerson('Oliver Brotherhood', 'owner', '905-712-213', 'OliverBrotherhood@gmail.com').loadDiv());
    contactBoard.appendChild(new contactPerson('Theo Brotherhood', 'manager', '905-236-789', 'TheoBrotherhood@gmail.com').loadDiv());
    contactBoard.appendChild(new contactPerson('Arthur Wright', 'Head Tea Maker', '905-888-919', 'ArthurWright@gmail.com').loadDiv());
    content.appendChild(contactBoard);
   

}

class contactPerson {

    constructor(name, job, number, email) {
       this.name = name;
       this.job = job;
       this.number = number;
       this.email = email;
    }
 
    loadDiv() {
        const individual = document.createElement('div');

        individual.classList.add('contactPerson');
        
        const contactName = document.createElement('h3');
        contactName.textContent = this.name;

        const info = document.createElement('div');

        const job = document.createElement('div');
        const number = document.createElement('div');
        const email = document.createElement('div');
        
        job.textContent = this.job;
        number.textContent = this.number;
        email.textContent = this.email;

        info.appendChild(job);
        info.appendChild(number);
        info.appendChild(email);

        individual.appendChild(contactName);
        individual.appendChild(info);
 
       return individual;
    }
 }

export { contact as default }