window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove( 'hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })

    // Timer

    let deadline = '2022-10-10';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds =  timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } else if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            }
        }
    }

    setClock('timer', deadline);

    // Modal 

    let more = document.querySelectorAll('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
    
        for (let i in more) {

            // more[i].addEventListener('click', function() {
            //     overlay.style.display = 'block';
            //     this.classList.add('more-splash');
            //     document.body.style.overflow = 'hidden';
            // });
        
        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            more[i].classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event){
        event.preventDefault();
       
    });

    // Slider

    const wrapContainer = document.querySelector('.wrap-container'),
          next = document.querySelector('.next'),
          prev = document.querySelector('.prev'),
          sliderDots = document.querySelectorAll('.dot');

    let offset = 0;


        next.addEventListener('click', () => {
            offset = offset - 100
            toChangeDots()
                if (offset < -300) {
                    offset = 0
                }
            wrapContainer.style.left = offset + '%'
        })

        prev.addEventListener('click', () => {
            offset = offset + 100
            toChangeDots()
            if (offset >= 0) {
                offset = 0
            } 
            wrapContainer.style.left = offset + '%'
        })

        const toChangeDots = () => {
            sliderDots.forEach((item) => {
                item.classList.remove('dot-active')
                if (offset == -100) {
                    sliderDots[1].classList.add('dot-active')
                } else if (offset == -200) {
                    sliderDots[2].classList.add('dot-active')
                } else if (offset == -300) {
                    sliderDots[3].classList.add('dot-active')
                }

                if (offset < -300 || offset == 0) {
                    sliderDots[0].classList.add('dot-active')
                    offset = 0
                }
            })
        }

});











