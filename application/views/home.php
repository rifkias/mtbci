
<script data-cfasync="false" src="<?php echo base_url('/asset/static_js/email-decode.min.js'); ?>"></script><script type="text/javascript">
    $(document).ready(function(){
        let z = document.querySelector(".file-dropzone__container");
        if ( typeof(z) !== "undefined" && z !== null ) {
            z = z.parentNode;
            $(z).addClass("px-1 pt-2");
            $('.file-dropzone').addClass('border-upload-form');
        }
    });
    </script>
    <style>
    .footer_pa p{
        padding-top: 25px !important;
    }
        .bmw-car{
     margin-right: auto !important;
        position: relative !important;
        margin-left: 166px !important;
        display: inline-block !important;
        width: auto !important;
        }
         .payment-mobile {
        max-width: 80% !important;
        margin: 0 auto;
    }

         @media(max-width:1366px){
             .footer_pa {
        text-align: center;
    }
             .bmw-car{
                /*height: 168px;*/
                max-height: 100%;
             }
        }

    @media(max-width:1199px){

        .bmw-car {
        margin-left: 18px !important;
        max-height: 100%;
    }
     .footer_pa {
        text-align: center;
    }
    }

        @media(max-width:1024px){
             .bmw-car{
               height: auto;
             }

        }
        @media(max-width:993px){
            .bmw-car{
               height: auto;
             }
        }
         @media(max-width:768px){
          .bmw-medium{
               margin: 0 auto;
             }
        }
        @media(max-width:767px){
            .bmw-medium{
               height: auto;
             }
        }
    </style>
    <script type="text/javascript">
        if (["HK", "CN"].includes(document.querySelector("meta[name=c_code]")?.content)) {
            var p = document.querySelector(".footer_pa p:last-of-type");
            p.innerText = p.innerText.replace("169 Electric Road, North Point, Hong Kong. ", "");
        }
    </script>
	<script src="<?php echo base_url('/asset/static_js/lang_data/id.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/swiper-4.3.5.min.js'); ?>" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/jquery.dataTables.min.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/bootstrap_new.min.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/lazysizes.min.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/jquery.validate.min.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/intlTelInput.min.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/table_pagination.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/ib-offer.js'); ?>" type="text/javascript"></script>
    <script src="<?php echo base_url('/asset/static_js/20-bonus-blue.js'); ?>" type="text/javascript"></script>
    <script type="text/javascript">
    $('#home-carousal-banner-1').slick({
                centerMode: true,
                centerPadding: '15px',
                slidesToShow: 6,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
    {
                breakpoint: 1366,
                settings: {
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 5
                }
    },
    {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 4
                }
    },
    {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 3
                }
    },{
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '15px',
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '15px',
                        slidesToShow: 2
                    }
                }, {
                breakpoint: 300,
                settings: {
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 1
                }
    },]

            });


           const regulations = $('.basic').slick({
                arrows: true,
                draggable: true,
                autoplay: true,
                centerMode:false,
                autoplaySpeed: 5000,
                swipe: true,
                infinite:true,
                swipeToSlide: true,
                slidesToShow: 5,
                touchThreshold: 1000,
               responsive: [{
         breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
    },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
            });

    jQuery('.platform-slide-1').slick({
                // fade: true,
                arrows: true,
                autoplay: false,
                infinite: false,
                slideToShow: 1,
                SlideToScroll: 1,
                centerPadding: '0',
            });
         if(window.innerWidth < 768 && window.location.href !== "https://multibankfx.com/"){
    $('.platform-slide-2').slick({
                // fade: true,
                arrows: true,
                autoplay: false,
                infinite: false,
                slideToShow: 1,
                SlideToScroll: 1,
                centerPadding: '30',
            });


    let advantageSlider = $('.advantage-slider').slick({
                        centerPadding: '60px',
                        slidesToShow: 3,
                        centerMode: false,
                        infinite: false,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 3000,
                        responsive: [{
                            breakpoint: 1008,
                            settings: {
                                centerMode: false,
                                centerPadding: '60px',
                                slidesToShow: 2
                            }
                        },{
                            breakpoint: 768,
                            settings: {
                                centerMode: false,
                                centerPadding: '30px',
                                slidesToShow: 1
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                centerMode: false,
                                centerPadding: '30px',
                                slidesToShow: 1
                            }
                        }]

            });
    }

    $('.cwtg-wrapper').slick({
                        centerPadding: '60px',
                        slidesToShow: 6,
                        centerMode: false,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        responsive: [{
                            breakpoint: 1008,
                            settings: {
                                centerMode: true,
                                centerPadding: '30px',
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                centerMode: true,
                                centerPadding: '30px',
                                slidesToShow: 2
                            }
                        },
            {
                            breakpoint: 480,
                            settings: {
                                centerMode: true,
                                centerPadding: '30px',
                                slidesToShow: 1
                            }
                        }]

            });



    let partnershipSlider= $('.partnership-slider').slick({
                        centerMode: false,
                        slidesToShow: 3,
                        infinite: false,
                        centerMode: false,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 3000,
                        responsive: [{
                            breakpoint: 1008,
                            settings: {
                                centerMode: false,
                                centerPadding: '60px',
                                slidesToShow: 2
                            }
                        },{
                            breakpoint: 768,
                            settings: {
                                centerMode: false,
                                centerPadding: '30px',
                                slidesToShow: 1
                            }
                        }]

            });




            // banner slider under Hero slider
            let acc = $('.panel-heading');
            let panel = $('.panel-collapse');
            acc.click(function() {
                let currEl = $(this);
                for (let i = 0; i < panel.length; i++) {
                    if (!$(panel[i]).is(currEl.next()) && $(panel[i]).hasClass("show")) {
                        $(panel[i]).removeClass("show in");
                    }
                }
            })
        </script>
    <script type="text/javascript">
    $(function() {
        $('.mex-translatable').each(function() {
            var url_parts = location.hostname.split('.');
            if (url_parts.length == 3) {
                var subdomain = url_parts.shift();

                if (subdomain == 'ae' && document.documentElement.lang == 'aen') {
                    subdomain = 'aen';
                }
                if ($(this).data(subdomain) && (typeof $(this).data(subdomain) !== 'undefined')) {



                    var translation = $(this).data(subdomain);
                    $(this).html(translation);
                }
            }
        });


        var test_lang =getUrlVars()['test_lang'];
        if (typeof test_lang !== 'undefined') {
            $('a').each(function() {
                var old_url = $(this).attr("href");
                if (typeof old_url !== 'undefined') {
                    var newUrl = old_url + '?test_lang=' + test_lang;
                    $(this).attr("href", newUrl);
                }
            });
        }
    });

    </script>
    <script type="text/javascript">
    $(function() {
            $('form:not("#demo_competition_form_2019_08_13") .sms_verif_code').val('215121');
    });
    </script>
    <script type="text/javascript">
    $(function(){
    var iframe_ibnum =getUrlVars()['ibNum'];
    var is_iframe = getUrlVars()['is_iframe'];
    if(typeof iframe_ibnum === 'string' && typeof is_iframe === 'string'){
        $('a').each(function() {
        var querystring = 'ibNum=888104724';
        var href = $(this).attr('href');
        if (href) {
            href += (href.match(/\?/) ? '&' : '?') + querystring;
            $(this).attr('href', href);
        }
    });
    }
    });
    </script>
