//Анимация кнокпи меню
/*Добавляются переменные с классами .bar и .container, 
содержащие кнопку меню и основную область страницы соответствено*/ 
const bar = document.querySelector('.bar')
const container = document.querySelector('.container')

//Добавляется переменная, содержащая экраны
const screens = document.querySelectorAll('.screen')

//Анимация кнопки меню
/*Добавляется обработчик события по клику и согласно функции, переменной container 
присваивается новый класс - active, содержащий иные настройки стиля*/
bar.addEventListener('click', () => 
    container.classList.toggle('active')
)

//Функция, которая подбирает экран, в зависимости оттого, на какой пункт меню наведен курсор мыши
function replaceBg(id) {
    //Находит нужный элемент
    const bg = document.getElementById(id)
    //Скрываются все экраны
    screens.forEach(screen => {
        screen.style.display = 'none'
    })
    //Отображается нужный экран
    bg.style.display = 'block'
}

//Функция, содержащая массив links, из которого выбирается элемент с индексом
function changeBg() {
    const links = document.querySelectorAll('.link')

    //Из массива links выбирается элемент с индексом 
    links.forEach((link, index) => {
        //Отображение нужного экрана, при наведении курсора мыши на элемент меню 
        //Добавляется обработчик события для каждого элемента link и далее возвращается событие - e    
        link.addEventListener('mouseenter', e => {
            e.preventDefault()
            //Вызывается функция replaceBg и в нее передается data-атрибут
            //Определяется какой экран отображать, в зависимости оттого, на какой пункт меню наведен курсор
            replaceBg(e.target.dataset.link)
        })
        //Переключение на нужный экран кликом мыши по пункту меню
        /*Добавляется обработчик события и далее возвращается событие - е, в котором,
         переменной container присваивается новый класс - active, содержащий иные настройки стиля для страницы*/
        link.addEventListener('click', e => {
            e.preventDefault()
            container.classList.toggle('active')
        })
        //Скрываются все остальные экраны, кроме выбранного 
        screens.forEach(screen => {
            screen.style.display = 'none'
            screens[0].style.display = 'block'
        })
    })
}

changeBg()

