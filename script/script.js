document.addEventListener('DOMContentLoaded', function () {

  /*открытие бургер-меню*/

  const burgerBtn = document.querySelector('.burger')
  const closeBtn = document.querySelector('.close')
  const nav = document.querySelector('.nav__list')
  const navMobile = document.querySelector('.nav__mobile')

  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      nav.classList.toggle('active')
      navMobile.classList.toggle('active')
      burgerBtn.classList.remove('active')
      closeBtn.classList.add('active')

    })
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      nav.classList.toggle('active')
      navMobile.classList.toggle('active')
      burgerBtn.classList.add('active')
      closeBtn.classList.remove('active')
    })
  }


  //Анимация

  const animItems = document.querySelectorAll('.anim__items')

  if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll)

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];

        const animItemHeight = animItem.offsetHeight
        const animItemOffset = offset(animItem).top
        const animStart = 4

        let animItemPoint = window.innerHeight - animItemHeight / animStart

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('active')
        }
        else {

          if (!animItem.classList.contains('anim-no-hide')) {
            animItem.classList.remove('active')
          }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect()
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      scrollTop = window.pageYOffset || document.documentElement.scrollTop

      return {
        top: rect.top + scrollTop, left: rect.left + scrollLeft
      }
    }

    setTimeout(() => {
      animOnScroll
    }, 100);

    window.onload = function () {
      animOnScroll();
    }

  }

  /*Куки*/
  const cookieBanner = document.querySelector('.cookies__container');
  const acceptCookiesButton = document.getElementById('accept-cookies');

  acceptCookiesButton.addEventListener('click', function () {
    cookieBanner.style.display = 'none';
  });





  //CHOICE
  const choiceContainer = document.querySelector('.choice__container');
  const arrow = document.querySelector('.arrow');
  let choiceList = document.querySelector('.choices__inner');

  let selector = document.querySelector('.selector');

  const isInsideContainer = (target) => {
    return target.closest('.choice__container') !== null;
  };


  const toggleActive = () => {
    arrow.classList.toggle('rotated');
    choiceList.classList.toggle('active');
  };

  
  document.addEventListener('click', (event) => {
    if (!isInsideContainer(event.target)) {
      choiceList.classList.remove('active');
      arrow.classList.remove('rotated');
      selector.classList.remove('active')
    }
  });


  choiceContainer.addEventListener('click', (event) => {
    if (isInsideContainer(event.target) || event.target.tagName === 'OPTION') {
      toggleActive();

      selector.classList.toggle('active')
    }
  });


  document.getElementById('choice').addEventListener('change', () => {
    selector.classList.remove('active');
  });

  document.getElementById('choice').addEventListener('change', toggleActive);


  // Callback после инициализации choices
  const initChoices = () => {
    choiceList = document.querySelector('.choices__inner');
  };

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: true,
    allowHTML: true,
    placeholder: true,
    position: 'bottom',
    callbackOnInit: initChoices
  });


  const elementsWithSelectText = document.querySelectorAll('[data-select-text]');

  // Перебираем найденные элементы и удаляем атрибут data-select-text
  elementsWithSelectText.forEach(element => {
    element.removeAttribute('data-select-text');
  });

  const selectPlaceholder = document.querySelector('.choices__item--disabled');
  if (selectPlaceholder) {
    selectPlaceholder.remove();
  }







  //СКРОЛЛБАР
  //   const vertical = document.querySelector('.simplebar-vertical');
  //   const content = document.querySelector('.choices__list');


  //   document.addEventListener('click', (event) => {
  //     // Проверяем, был ли клик внутри контейнера .choiceContainer
  //     const isInsideContainer = event.target.closest('.choice__container') !== null;

  //     // Если клик был вне контейнера и класс scrollbar-active уже добавлен
  //     if (!isInsideContainer && vertical.classList.contains('scrollbar-active')) {
  //       vertical.classList.remove('scrollbar-active');
  //     }
  //   });

  //   // Добавляем обработчик события click для choiceContainer
  // content.addEventListener('click', () => {
  //     console.log('click')
  //     // При клике внутри контейнера добавляем класс scrollbar-active
  //     vertical.classList.add('scrollbar-active');
  //   });




  //VOLUME 

  const volumeInput = document.getElementById('volume');
  const volumeValue = document.getElementById('volumeValue');

  volumeInput.addEventListener('input', function () {
    const value = this.value;
    volumeValue.textContent = value + '%';
  });


});




