import chamomile from './camomile-tea.png';

function menu() {
   const content = document.querySelector('#content');

   const title = document.createElement('h1');
   title.textContent = "Toto's Menu";

   const menu = document.createElement('div');
   menu.classList.add('menu');

   menu.appendChild(new menuItem('Chamomile Tea', `A lovely chamomile tea sourcd from Egypt's renowned Nile Valley`).loadDiv());
   menu.appendChild(new menuItem('Black Tea', 'Soothing Keemun black tea with a gentle combination of smoky, malty, and nutty flavors').loadDiv());
   menu.appendChild(new menuItem('Oolong Tea', 'Fresh and bright oolong tea with floral notes').loadDiv());
   menu.appendChild(new menuItem('Green Tea', `A lighght and refreshing green tea full of herbaceous flavors`).loadDiv());

   
   const tea = document.createElement('img');
   tea.src = chamomile;
   menu.appendChild(tea);

   content.appendChild(title);

   content.appendChild(menu);
   

};

class menuItem {

   constructor(name, desc) {
      this.name = name;
      this.desc = desc;
   }

   loadDiv() {
      const itemDiv = document.createElement('div');

      const teaName = document.createElement('h3');
      teaName.textContent = this.name;
      teaName.classList.add('teaName');

      const itemDesc = document.createElement('p');
      itemDesc.textContent = this.desc;

      itemDiv.appendChild(teaName);
      itemDiv.appendChild(itemDesc);

      return itemDiv;
   }
}
export { menu as default }