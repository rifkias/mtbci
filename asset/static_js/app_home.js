$(document).ready(function(){new Swiper("#swiper-container-1",{navigation:{nextEl:"#swiper-container-1 .swiper-button-next",prevEl:"#swiper-container-1 .swiper-button-prev"},pagination:{clickable:!0,el:"#swiper-container-1 .swiper-pagination"},loop:!0,autoplay:{delay:5e3},updateOnImagesReady:!0,paginationClickable:!0,spaceBetween:30,centeredSlides:!0,autoplayDisableOnInteraction:!1})}),$(document).ready(function(){new Swiper("#swiper-container-2",{navigation:{nextEl:"#swiper-container-2 .swiper-button-next",prevEl:"#swiper-container-2 .swiper-button-prev"},pagination:{clickable:!0,el:"#swiper-container-2 .swiper-pagination"},loop:!0,autoplay:{delay:5e3},paginationClickable:!0,spaceBetween:30,centeredSlides:!0,autoplayDisableOnInteraction:!1})}),$(document).ready(function(){new Swiper("#home_global_presence .swiper-container",{autoHeight:!0,navigation:{nextEl:"#home_global_presence .swiper-button-next",prevEl:"#home_global_presence .swiper-button-prev"},updateOnImagesReady:!0,slidesPerView:3,loop:!0,breakpoints:{991:{slidesPerView:1}},on:{init:function(){e(this)},slideChangeTransitionStart:function(){e(this)}},autoplay:{delay:5e3}});function e(e){$(window).width()>991?($("#home_global_presence .width-30").removeClass("width-30"),$("#home_global_presence .width-40").removeClass("width-40"),e.slides.eq(e.activeIndex).addClass("width-30"),e.slides.eq(e.activeIndex+1).addClass("width-40"),e.slides.eq(e.activeIndex+2).addClass("width-30")):($("#home_global_presence .width-30").removeClass("width-30"),$("#home_global_presence .width-40").removeClass("width-40"))}}),$(function(){new Swiper("#home_company_news_container",{direction:"vertical",simulateTouch:!1,shortSwipes:!0,slidesPerView:4,autoplay:{delay:2500,disableOnInteraction:!1},mousewheel:{releaseOnEdges:!1,sensitivity:3}})});