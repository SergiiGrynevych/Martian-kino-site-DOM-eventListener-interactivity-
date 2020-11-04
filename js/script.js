/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удаляет все рекламные блоки со страницы (правая часть сайта)
const promoImg = document.querySelectorAll('.promo__adv img');

promoImg.forEach((item) => item.remove());

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
const changeElByClass = document.querySelector('.promo__genre');
changeElByClass.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
const editBackground = document.querySelector('.promo__bg');

editBackground.style = 'background-image: url(../img/bg.jpg)';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

const promoInteractiveItem = document.querySelector('.promo__interactive-list');

promoInteractiveItem.innerHTML = '';

const sortedFilms = movieDB.movies.map((item) => item).sort(); 
// можно сделать вместо 47 строчки:
// movieDB.movies.sort();
// и в 52 строчку вместо sortedFilms вписать movieDB.movies

sortedFilms.forEach((film, ind) => {
    promoInteractiveItem.innerHTML +=
        `<li class="promo__interactive-item">${ind + 1} ${film}
            <div class="delete"></div>
         </li>`;
});

console.log(promoInteractiveItem);



