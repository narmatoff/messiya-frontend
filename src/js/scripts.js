$(document).ready(function() {
    // Отключение клика на НЕ активных элементах
    $(".disabled, .disabled a").click(function() {
        return false;
    });

    // Раскрытие меню пользователя
    $(".header .bl_login").click(function() {
        $(".header .login_vipad").slideToggle();
        return false;
    });
    $(document).mouseup(function(e) {
        var div = $(".header .bl_login");
        var div2 = $(".header .login_vipad");
        if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
            div2.slideUp();
        }
    });

    // Закрытие всплывающих окон
    $(".opac, .okno > span").click(function() {
        $(".opac, .okno").hide();
        return false;
    });
    $(".block_obuch .col_l > span").click(function() {
        $(".opac, .okno, .block_obuch .col_l").hide();
        return false;
    });

    // Открытие окна логина
    $(".header .lk_vhod, .block1 .bl_btns .btn1").click(function() {
        $(".opac, .okno").hide();
        $(".opac, .okno#okno1").show();
        $(".okno#okno1").css("top", $(document).scrollTop() + 50);
        return false;
    });
    // Открытие окна регистрации
    $(".okno form .btn2, .block1 .bl_btns .btn2").click(function() {
        $(".opac, .okno").hide();
        $(".opac, .okno#okno2").show();
        $(".okno#okno2").css("top", $(document).scrollTop() + 50);
        return false;
    });
    // Открытие окна Вебинара
    /*setTimeout(function(){
        $(".opac, .okno").hide();
        $(".opac, .okno#okno3").show();
        $(".okno#okno3").css("top", $(document).scrollTop()+50);
        return false;
    }, 200000);
    // Открытие окна Участников
    setTimeout(function(){
        $(".opac, .okno").hide();
        $(".opac, .okno#okno4").show();
        $(".okno#okno4").css("top", $(document).scrollTop()+50);
        return false;
    }, 600000);*/


    // Для стилизации input[type="file"]
    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function(input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input__file-button-text').innerText;

        input.addEventListener('change', function(e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.input__file-button-text').innerText = labelVal;
        });
    });

    // Раскрытие полного текста на странице Курс
    var $visota;
    $(".block_vnutr .bl_opis_kurs .full_text").click(function() {
        $visota = $(".block_vnutr .bl_opis_kurs .full_text p").outerHeight();
        $(this).css("height", $visota);
        $(this).addClass("opened");
        return false;
    });

    // Раскрытие всех комментариев
    var $visota2;
    $(".block_obsu .col2 .razv a").click(function() {
        $visota2 = $(".block_obsu .col2 .comments .height").outerHeight();
        $(".block_obsu .col2 .comments").css("height", $visota2);
        $(".block_obsu .col2 .comments").addClass("opened");
        $(this).slideUp();
        return false;
    });

    // Раскрытие карточки на странице Обучение
    var $visota3;
    $(".block_obuch .col_r .kurs .pol2 .bl_text").click(function() {
        $visota3 = $(this).find("p").outerHeight();
        if ($(this).hasClass("opened")) {
            $(this).removeAttr("style");
        } else {
            $(this).css("height", $visota3);
        }
        $(this).toggleClass("opened");
        $(this).parent().parent().toggleClass("opened");
        return false;
    });
    // Скрытие карточки на странице Обучение
    $(".block_obuch .col_r .kurs .pol2 .open").click(function() {
        $(this).parent().find(".bl_text").removeAttr("style");
        $(this).parent().find(".bl_text").toggleClass("opened");
        $(this).parent().parent().toggleClass("opened");
        return false;
    });

    // Раскрытие карточки на странице Курс
    $(".zanyatiya .zanyatie .open").click(function() {
        $(this).parent().toggleClass("opened");
        $(this).parent().find(".raskr").slideToggle();
        return false;
    });

    // Подгрузка аудио-файлов
    $(".audio").each(function() {
        var block = $(this);
        var path = $(this).parent().find(".audio").attr('data-path');
        var xhr = $.ajax({
            type: "HEAD",
            url: path,
            success: function(msg) {
                block.find(".razm").text(Math.round(xhr.getResponseHeader('Content-Length') / 1024 / 1024, 1) + ' MB');
            }
        });
    });

    // Инициализация слайдера Полезная информация
    $(".block_obuch .bl_polez .bxslider").bxSlider({
        touchEnabled: false,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 500
    });
    setInterval(function() {
        $(".block_obuch .bl_polez .bx-next").click();
    }, 10000);

    // Запуск аудио
    $(".block_vnutr .zanyatiya .zanyatie .pol2 .audio .bl_player .play").click(function() {
        $(this).parent().find(".pause").show();
        $(this).hide();
    });
    // Пауза аудио
    $(".block_vnutr .zanyatiya .zanyatie .pol2 .audio .bl_player .pause").click(function() {
        $(this).parent().find(".play").show();
        $(this).hide();
    });


    // Раскрытие меню в мобильной версии
    $("#menu_tg").click(function() {
        $(".header .menu_top").slideToggle();
        return false;
    });
    $("#menu_tg2").click(function() {
        $(".footer .menu_top").slideToggle();
        return false;
    });

    // Раскрытие фильтра в обучении в мобильной версии
    $("#tg_filt").click(function() {
        $(".opac, .okno").hide();
        $(".opac, .block_obuch .col_l").show();
        return false;
    });

    // Раскрытие поиска в шапке
    $(".header .bl_search .btn").click(function() {
        $(this).toggleClass("opened");
        $(this).parent().find("form").slideToggle();
        return false;
    });
    $(document).mouseup(function(e) {
        var div = $(".header .bl_search");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".header .bl_search form").slideUp();
            $(".header .bl_search .btn").removeClass("opened");
        }
    });

    // Раскрытие комментариев в новостях
    $(".block_obuch .bl_novosti .novost .comm_op").click(function() {
        if ($(this).text() == "Показать комментарии") {
            $(this).text("Свернуть комментарии");
            $(this).parent().find(".comments").slideDown();
        } else {
            $(this).text("Показать комментарии");
            $(this).parent().find(".comments").slideUp();
        }
        return false;
    });

    // Открытие окна "товар добавлен"
    $(".block_obuch .bl_tovars .tovarr .ui_btn1, .okno#okno6 li .obol .pol2 .ui_btn1").click(function() {
        $(".opac, .okno").hide();
        $(".opac, .okno#okno5").show();
        $(".okno#okno5").css("top", $(document).scrollTop() + 50);
        return false;
    });

    // Инициализация слайдера с товарами
    var carousel = $(".okno#okno6 .bxslider").bxSlider({
        touchEnabled: false
    });

    // Открытие окна с полным товаром
    $(".block_obuch .bl_tovars .tovarr .zago, .block_obuch .bl_tovars .tovarr .bl_img").click(function() {
        $(".opac, .okno").hide();
        $(".opac, .okno#okno6").show();
        $(".okno#okno6").css("top", $(document).scrollTop() + 50);
        carousel.reloadSlider();
        return false;
    });

    // Переключение фото товара
    $(".okno#okno6 .bx-viewport li .obol .pol1 .bl_imgs a").click(function() {
        $(this).parent().find("a").removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().find(".full").attr("src", $(this).find("img").attr("src"));
        return false;
    });

    // Раскрытие комментариев в проекте экстрасенсорики
    $(".block_obsu .col2 .tema1 .comm_op").click(function() {
        if ($(this).hasClass("opened")) {
            $(this).removeClass("opened");
            $(this).parent().find(".comments").slideUp();
        } else {
            $(this).addClass("opened");
            $(this).parent().find(".comments").slideDown();
        }
        return false;
    });

    // Раскрытие всех комментариев в проекте экстрасенсорики
    var $visota3;
    $(".block_obsu .col2 .tema1 .all_comm").click(function() {
        $visota3 = $(this).parent().find(".height").outerHeight();
        $(this).parent().find(".comments").css("height", $visota3);
        $(this).parent().find(".comments").addClass("opened");
        $(this).slideUp();
        return false;
    });

    // Открытие окна Правильный ответ
    $(".block_obsu .col2 .tema1 .prav").click(function() {
        $(".opac, .okno").hide();
        $(".opac, .okno#okno7").show();
        $(".okno#okno7").css("top", $(document).scrollTop() + 50);
        return false;
    });

    // Раскрытие комментариев в библиотеке
    $(".block_obuch .bl_biblio .tema1 .col2 .razv").click(function() {
        $(this).parent().find(".full_text").slideToggle();
        if ($(this).hasClass("opened")) {
            $(this).text("Развернуть");
        } else {
            $(this).text("Свернуть");
        }
        $(this).toggleClass("opened");
        return false;
    });

    // Раскрытие всех комментариев в библиотеке
    $(".block_obuch .bl_biblio .tema1 .all_comm").click(function() {
        $(this).parent().find(".comments").toggleClass("opened");
        $(this).slideUp();
        return false;
    });

    // Раскрытие всех сумм в волшебной помощи
    $(".block_obsu.volsheb .col1 .summa1 .openn").click(function() {
        $(this).parent().find(".obol").toggleClass("opened");
        $(this).slideUp();
        return false;
    });

    // Изменение пароля
    $(".block_obsu.lichniy .bl_profil .izm").click(function() {
        $(".block_obsu.lichniy .bl_profil .new_pass").slideDown();
        $(this).slideUp();
        return false;
    });

    // Показ пароля
    $(".block_obsu.lichniy .bl_profil .obol_input .visi").click(function() {
        if ($(this).parent().find("input").attr("type") == "text") {
            $(this).parent().find("input").attr("type", "password");
        } else {
            $(this).parent().find("input").attr("type", "text");
        }
        $(this).toggleClass("vivibl");
        return false;
    });

    // Раскрытие комментариев в ЛК отчёты
    $(".block_obsu.lichniy .bl_otchety .otchet1 .comm_op").click(function() {
        if ($(this).hasClass("opened")) {
            $(this).removeClass("opened");
            $(this).parent().find(".comments").slideUp();
            $(this).parent().find(".all_comm").slideUp();
            $(this).parent().find(".add_com").slideUp();
        } else {
            $(this).addClass("opened");
            $(this).parent().find(".comments").slideDown();
            $(this).parent().find(".all_comm").slideDown();
            $(this).parent().find(".add_com").slideDown();
        }
        return false;
    });

    // Раскрытие всех комментариев в ЛК отчёты
    var $visota3;
    $(".block_obsu .col2 .otchet1 .all_comm").click(function() {
        $visota3 = $(this).parent().find(".height").outerHeight();
        $(this).parent().find(".comments").css("height", $visota3);
        $(this).parent().find(".comments").addClass("opened");
        $(this).slideUp();
        return false;
    });

    // Открытие окна Создать отчёт
    $(".block_obsu.lichniy .bl_otchety .ui_btn1").click(function() {
        $(".opac, .okno").hide();
        $(".opac, .okno#okno8").show();
        $(".okno#okno8").css("top", $(document).scrollTop() + 50);
        return false;
    });

});