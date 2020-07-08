$( document ).ready(function() {
    $(".header .bl_login").click(function(){
        $(".header .login_vipad").slideToggle();
        return false;
    });
    $(document).mouseup(function (e){
        var div = $(".header .bl_login");
        var div2 = $(".header .login_vipad");
        if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
            div2.slideUp();
        }
    });

    $(".opac, .okno > span").click(function(){
        $(".opac, .okno").hide();
        return false;
    });
    $(".header .lk_vhod, .block1 .bl_btns .btn1").click(function(){
        $(".opac, .okno").hide();
        $(".opac, .okno#okno1").show();
        $(".okno#okno1").css("top", $(document).scrollTop()+50);
        return false;
    });
    $(".okno form .btn2, .block1 .bl_btns .btn2").click(function(){
        $(".opac, .okno").hide();
        $(".opac, .okno#okno2").show();
        $(".okno#okno2").css("top", $(document).scrollTop()+50);
        return false;
    });
    setTimeout(function(){
        $(".opac, .okno").hide();
        $(".opac, .okno#okno3").show();
        $(".okno#okno3").css("top", $(document).scrollTop()+50);
        return false;
    }, 2000000);
    setTimeout(function(){
        $(".opac, .okno").hide();
        $(".opac, .okno#okno4").show();
        $(".okno#okno4").css("top", $(document).scrollTop()+50);
        return false;
    }, 2000000);


    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
 
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
 
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });

    var $visota;
    $(".block_vnutr .bl_opis_kurs .full_text").click(function(){
        $visota = $(".block_vnutr .bl_opis_kurs .full_text p").outerHeight();
        $(this).css("height", $visota);
        $(this).addClass("opened");
        return false;
    });

    var $visota2;
    $(".block_obsu .col2 .razv a").click(function(){
        $visota2 = $(".block_obsu .col2 .comments .height").outerHeight();
        $(".block_obsu .col2 .comments").css("height", $visota2);
        $(".block_obsu .col2 .comments").addClass("opened");
        $(this).slideUp();
        return false;
    });

    var $visota3;
    $(".block_obuch .col_r .kurs .pol2 .bl_text").click(function(){
        $visota3 = $(this).find("p").outerHeight();
        if($(this).hasClass("opened")) {
            $(this).removeAttr("style");
        } else {
            $(this).css("height", $visota3);
        }
        $(this).toggleClass("opened");
        $(this).parent().parent().toggleClass("opened");
        return false;
    });
    $(".block_obuch .col_r .kurs .pol2 .open").click(function(){
        $(this).parent().find(".bl_text").removeAttr("style");
        $(this).parent().find(".bl_text").toggleClass("opened");
        $(this).parent().parent().toggleClass("opened");
        return false;
    });

    $(".block_vnutr .zanyatiya .zanyatie .open").click(function(){
        $(this).parent().toggleClass("opened");
        return false;
    });

    $(".block_obuch .bl_polez .bxslider").bxSlider({
        touchEnabled: false,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 500
    });
    setInterval(function(){
        $(".block_obuch .bl_polez .bx-next").click();
    }, 10000);
});