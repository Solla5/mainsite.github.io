new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',

        clickable: true,

        dinamicBullets: true,
      },
      // автоподстройка размера
      autoHeight: true,
      // количество картинок в слайде 
      slidesPerView: 1,

      // настройка отступа между картинками 
      spaceBetween: 30,

      // бесконечный слайдер
      loop:true,

      // свободный режим 
      freeMode: true,

      autoplay: {
        // пауза между прокруткой
        dalay:100,
        //Закончить на последнем слайдере 
        stopOnLastSlide:false,
        // Отключить при ручном переключении
        disableOnInteraction: false
      },

      // скорость прокрутки
      speed: 900,

      // адаптив 
      breakpoints: {
        320:{
            slidesPerView:1,
        },
        480:{
            slidesPerView:1,
        },
        992:{
            slidesPerView:1,
        }
      }
  });


  class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
          }
        }
        elHeader.parentElement.classList.toggle('accordion__item_show');
      });
    }
  }

  new ItcAccordion('#accordion-1');


  