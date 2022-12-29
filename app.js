
$(function(){

let filter= $("[data-filter");

filter.on("click", function(event){
    event.preventDefault();

    let cat = $(this).data("filter");

    if(cat=="all"){
        $("[data-cat]").removeClass("hide");
    }
    else{

        $("[data-cat]").each(function(){

            let workCat = $(this).data("cat");

            if(workCat!=cat){
                $(this).addClass("hide");
            }
            else{
                $(this).removeClass("hide");
            }

        });
    }

});





/*
let works = document.querySelectorAll(".work");

for(let wrk of works){
    wrk.addEventListener("click",function(){
        showModals(this);
    })
}

document.getElementById("resume").addEventListener("click",function(){
    showModals(this);
})
document.getElementById("hireMe").addEventListener("click",function(){
    showModals(this);
})


let btn = document.querySelectorAll("#close");
for(let item of btn){
    item.addEventListener("click",function(){
       document.querySelector(".show-flex").classList.remove("show-flex");
    });
  
}
*/
const modals = $("[data-modal]");
const modalClose = $("[data-close]");

modals.on("click",function(event){
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data("modal");
    
    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function(){
        $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0)"
        })
    },200);
        $("#worksSlider").slick("setPosition");
    

});

modalClose.on("click",function(event){
    event.preventDefault();

    let $this = $(this);
    let modalParents = $this.parents(".modal");
   
        modalParents.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        })
    modalParents.removeClass("show");
    $("body").removeClass("no-scroll");

   
});


$(".modal").on("click",function(event){
    $(this).removeClass("show");
    $("body").removeClass("no-scroll");
    $(this).find(".modal__dialog").css({
        transform: "rotateX(90deg)"
    })
});

$(".modal__dialog").on("click",function(event){
    event.stopPropagation();
    
});




//Slider https://kenwheeler.github.io/slick/

$('[data-slider="slick"]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:false,
    dots: true
  });

  $(".slickPrev").on("click",function(event){
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click",function(event){
    event.preventDefault();
    let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
    currentSlider.slick("slickNext");
  });



//  Mobile nav Burger
const navToggle = $("#navToggle");
const nav = $("#nav")

navToggle.on("click",function(event){
    event.preventDefault();
    nav.toggleClass("show");
});


});