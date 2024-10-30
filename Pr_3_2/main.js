const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
let kick = 0 ;
$btn2.disabled = true ; 
const character = { 
  name: 'Pikachu',
  defaultHP: 100, 
  damageHP: 100, 
  elHP: document.getElementById('health-character'), 
  elProgressbar: document.getElementById('progressbar-character'), // Предполагаем, что у вас есть элемент прогрессбара
  renderHPLife : function () { 
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP; 
  },
  renderProgressbarHP :function (){
  const healthPercentage = (this.damageHP / this.defaultHP) * 100;
  this.elProgressbar.style.width = healthPercentage + '%';
  },

  changeHP : function(count){
    if(this.damageHP < count){
      this.damageHP = 0 ;
      alert('Бедний' + this.name + 'проиграл бой!');
      $btn1.disabled = true;
      $btn2.disabled = true;
  }  else{
      this.damageHP -= count ;
  }
  if( kick % 3 === 0){
      $btn2.disabled = false;
  }
  else{
      $btn2.disabled = true;
  }
   character.renderHP();
  },
  renderHP : function(){
    this.renderHPLife();
    this.renderProgressbarHP();
  }
};


const enemy = { 
  name: 'Charmander', 
  defaultHP: 180, 
  damageHP: 180, 
  elHP: document.getElementById('health-enemy'), 
  elProgressbar: document.getElementById('progressbar-enemy'),// Предполагаем, что у вас есть элемент прогрессбара для врага
  renderHPLife : function () { 
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP; 
  },
  renderProgressbarHP :function (){
    const healthPercentage = (this.damageHP / this.defaultHP) * 100;
    this.elProgressbar.style.width = healthPercentage + '%';
    },

  changeHP : function(count){
    if(this.damageHP < count){
      this.damageHP = 0 ;
      alert('Бедний' + this.name + 'проиграл бой!');
      $btn1.disabled = true;
      $btn2.disabled = true;
  }  else{
      this.damageHP -= count ;
  }
  if( kick % 3 === 0){
      $btn2.disabled = false;
  }
  else{
      $btn2.disabled = true;
  }
   enemy.renderHP();
  },
  renderHP : function(){
    this.renderHPLife();
    this.renderProgressbarHP();
    }


};

function init() { 
  console.log('Start Game!'); 
  character.renderHP();
  enemy.renderHP(); 
}
function random(num){
    return Math.ceil(Math.random() * num);
}
$btn2.addEventListener('click' , function(){
    character.changeHP(random(70));
    enemy.changeHP(random(70));
    $btn2.disabled = true ; 
})
$btn1.addEventListener('click' , function(){
    kick++ ;
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
   
    
})
// Инициализация игры
init();


