document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoImg = document.querySelectorAll('.promo__adv img');
    const changeElByClass = document.querySelector('.promo__genre');
    const editBackground = document.querySelector('.promo__bg');
    const promoInteractiveItem = document.querySelector('.promo__interactive-list');
    const form = document.querySelector('form.add');
    const input = form.querySelector('.adding__input');
    const checkbox = form.querySelector('[type = "checkbox"]');

    form.addEventListener('submit', (event) => {
        // убираю перезагрузку страницы после нажания на "подтвердить"
        event.preventDefault();

        let newFilm = input.value;
        const favouriteFilms = checkbox.checked;

        if (newFilm) {
            // Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            // Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
            //"Добавляем любимый фильм"
            if (favouriteFilms) {
                console.log("Добавляем любимый фильм");
            }
            // пушу введенный пользователем фильм в массив с всеми фильмами 
            // и перевожу первую букву в верхний регистр, а все остальные в нижний регистр
            movieDB.movies.push(newFilm[0].toUpperCase() + newFilm.slice(1).toLowerCase());
            //вызываю callback function сортировки всего массива с фильмами
            sortFilms(movieDB.movies);
            //вызываю callback function для создания разметки под елемент и отображения его на странице 
            addFilmList(movieDB.movies, promoInteractiveItem);
        }
        //сбрасываю placeholder после нажатия кнопки "подтвердить"
        form.reset();
    });

    // 1) Удаляет все рекламные блоки со страницы (правая часть сайта)
    const removeImgPromo = (arr) => {
            arr.forEach(item => item.remove());
    };

    const changeBcgAndTextContent = () => {
        // 2) Изменить жанр фильма, поменять "комедия" на "драма"
        changeElByClass.textContent = 'драма';
        // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
        // Реализовать только при помощи JS
        editBackground.style.backgroundImage = 'url(img/bg.jpg)';
    };
    // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    // Отсортировать их по алфавиту 
    const sortFilms = (movies) => {
        movies.sort();
    };

    const addFilmList = (film, parent) => {
        parent.innerHTML = '';
        sortFilms(film);

        film.forEach((film, ind) => {
            promoInteractiveItem.innerHTML +=
                `<li class="promo__interactive-item">${ind + 1} ${film}
                        <div class="delete"></div>
                    </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                
                addFilmList(film, parent);
            });
        });
    };

    removeImgPromo(promoImg);
    changeBcgAndTextContent();
    addFilmList(movieDB.movies, promoInteractiveItem);
});



