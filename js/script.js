console.log('PRIVIETIK')


document.addEventListener('DOMContentLoaded', function () {


   function preloadImages(array) {
      if (!preloadImages.list) {
          preloadImages.list = [];
      }
      var list = preloadImages.list;
      for (var i = 0; i < array.length; i++) {
          var img = new Image();
          img.onload = function() {
              var index = list.indexOf(this);
              if (index !== -1) {
                  // remove image from the array once it's loaded
                  // for memory consumption reasons
                  list.splice(index, 1);
              }
          }
          list.push(img);
          img.src = array[i];
      }
  }
  
  preloadImages(["./img/bggg2.jpg", "./img/bggg3.jpg", "./img/bg-hero.jpg", "./img/ll-hero.jpg"]);

   document.querySelector('.circle__item1').addEventListener('click', function(){
      document.querySelector('.container__hero').classList.remove('container__hero2')
      document.querySelector('.container__hero').classList.remove('container__hero3')
      document.querySelector('.container__hero').classList.add('container__hero1')
   })
   document.querySelector('.circle__item2').addEventListener('click', function(){
      document.querySelector('.container__hero').classList.remove('container__hero1')
      document.querySelector('.container__hero').classList.remove('container__hero3')
      document.querySelector('.container__hero').classList.add('container__hero2')
   })
   document.querySelector('.circle__item3').addEventListener('click', function(){
      document.querySelector('.container__hero').classList.remove('container__hero2')
      document.querySelector('.container__hero').classList.remove('container__hero1')
      document.querySelector('.container__hero').classList.add('container__hero3')
   })
   


   document.querySelectorAll('.circle__item').forEach (function (circules) {
      circules.addEventListener('click', function (ent) {
         const path = event.currentTarget.dataset.path
         document.querySelectorAll('.circle__item').forEach (function (TabContent) {
            TabContent.classList.remove('circle__item-active')
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('circle__item-active')
      })

      
   })




   document.querySelector('.burger').addEventListener('click', function () {
      document.querySelector('.burger__menu').classList.toggle('menu__active')
      document.querySelector('.burger').classList.toggle('burger__active')
      document.querySelector('.header__logo').classList.toggle('header__logo-active')
      document.querySelector('.ss').classList.toggle('ssq')
   })

   document.querySelectorAll('.how__page-item').forEach (function (pageitem) {
      console.log(pageitem)
      pageitem.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path
         console.log (path)

         document.querySelectorAll('.how__item').forEach (function (TabContent) {
            TabContent.classList.remove('how__item-l-active')
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('how__item-l-active')
      })
   })

   const accordion = document.getElementsByClassName('container1');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
document.querySelector('.con1').addEventListener('click', function(){
   document.querySelector('.iiii1').classList.toggle('iiii-activv')
})
document.querySelector('.con2').addEventListener('click', function(){
   document.querySelector('.iiii2').classList.toggle('iiii-activv')
})
document.querySelector('.con3').addEventListener('click', function(){
   document.querySelector('.iiii3').classList.toggle('iiii-activv')
})
document.querySelector('.con4').addEventListener('click', function(){
   document.querySelector('.iiii4').classList.toggle('iiii-activv')
})
document.querySelector('.con5').addEventListener('click', function(){
   document.querySelector('.iiii5').classList.toggle('iiii-activv')
})
document.querySelector('.con6').addEventListener('click', function(){
   document.querySelector('.iiii6').classList.toggle('iiii-activv')
})

   document.querySelector('.how__page-item1').addEventListener('click', function(){
      document.querySelector('.how__item-bg').classList.remove('bg2')
      document.querySelector('.how__item-bg').classList.remove('bg3')
      document.querySelector('.how__item-bg').classList.remove('bg4')
      document.querySelector('.how__item-bg').classList.add('bg1')
   })
   document.querySelector('.how__page-item2').addEventListener('click', function(){
      document.querySelector('.how__item-bg').classList.remove('bg1')
      document.querySelector('.how__item-bg').classList.remove('bg3')
      document.querySelector('.how__item-bg').classList.remove('bg4')
      document.querySelector('.how__item-bg').classList.add('bg2')
   })
   document.querySelector('.how__page-item3').addEventListener('click', function(){
      document.querySelector('.how__item-bg').classList.remove('bg1')
      document.querySelector('.how__item-bg').classList.remove('bg2')
      document.querySelector('.how__item-bg').classList.remove('bg4')
      document.querySelector('.how__item-bg').classList.add('bg3')
   })
   document.querySelector('.how__page-item4').addEventListener('click', function(){
      document.querySelector('.how__item-bg').classList.remove('bg1')
      document.querySelector('.how__item-bg').classList.remove('bg2')
      document.querySelector('.how__item-bg').classList.remove('bg3')
      document.querySelector('.how__item-bg').classList.add('bg4')
   })

})



window.addEventListener('DOMContentLoaded', function (){
   setInterval(function () {
      setTimeout(function () {
         const button = document.getElementById('ww');
      button.click();
      }, 3000)
      setTimeout(function () {
         const button = document.getElementById('ee');
      button.click();
      }, 6000)
      setTimeout(function () {
         const button = document.getElementById('qq');
      button.click();
      }, 9000)
   }, 12000)
   
})















/* Тут добавить класс одному классу */

/* window.addEventListener('DOMContentLoaded', function () {
   document.querySelector('#abc').classList.add ('ggg')
})   

 */
/* Тут работа с каждым классом через присвоение каждоиу классу функции с добавлением восклицательного знака*/   


/* window.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.abc').forEach (function (){
      console.log('!')
   })
}) */

/* Тут я накинул на каждый класс абс функцию которую назвал ДОБАВИЛКЛАСС и присвоил этой функции значение "Добовсь класс ggg" */


/* window.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.abc').forEach (function (DOBAVILCLASS){
      DOBAVILCLASS.classList.add('ggg')
   })
}) */
/* Тут я сделаю анимацию при нажатии кнопки через событие КЛИК */
/* window.addEventListener('DOMContentLoaded', function () {
   document.querySelector('.button').addEventListener('click', function (){
      document.querySelector('.shtora').classList.toggle('active')
   })
}) */
/* Тут я сделаю так чтобы при нажатии на разные обьекты у них добавлялся класс */
/* window.addEventListener('DOMContentLoaded', function(){
   document.querySelectorAll('.text').forEach(function(pipa){
      pipa.addEventListener('click', function(ruru){
         ruru.target.classList.toggle('alert')
      })
   })
})
 */

