    // Prevent click Jacking
    // if (top != window) {
    //     top.location = window.location;
    //   }
    // window.onbeforeunload = function() {
    //     return false;
    //   };
// Prevent click Jacking
// Restricts input for the set of matched elements to the given inputFilter function.
(function($) {
    $.fn.inputFilter = function(inputFilter) {
      return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    };
  }(jQuery));
  $(document).ready(function() {
    $(".input_with_phone").inputFilter(function(value) {
      return /^\d*$/.test(value);    // Allow digits only, using a RegExp
    });
  });

  $('.lang-menu').click(() => {
              $('.lang-menu-dropdown').toggle();
              $('.nav-menu').hide();
  });

  $(function() {
      $('.lang-menu-dropdown a, .lang-mobile-menu a').each(function() {
          const urlLang = window.location.pathname.split("/")[1];

          const isMultibank = location.host === "multibankfx.com";
          const isMexchina = location.host === "mexchn.com";

          const isMultibankEnglish = isMultibank && document.documentElement.lang === "en" && !["en", "eu", "english"].includes(urlLang);
          const isMexchinaChinies = isMexchina && document.documentElement.lang === "zh-CN";

          let language = $(this).attr("href");
          if ((language === "/en" && isMultibank) || (language === "/zh" &&  isMexchina)) {
              language = "";
          }

          if (isMultibankEnglish || isMexchinaChinies) {
              $(this).attr("href", language + window.location.pathname);
          } else {
              $(this).attr("href", window.location.pathname.replace(/^\/([^\/]*)/, language) || "/");
          }
      });
      var ua = navigator.userAgent || navigator.vendor || window.opera;
      function isFacebookApp() {
          var ua = navigator.userAgent || navigator.vendor || window.opera;
          return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
      }
      var isInstagram = (ua.indexOf('Instagram') > -1) ? true : false;
      var isFacebook = isFacebookApp();
      var isAndroid = ua.toLowerCase().indexOf("android") > -1;
      if (isInstagram || isFacebook && isAndroid) {
          $("input[type='file']").attr("accept", "/*");
      }

  });

  const bothRegulationList = ["+355", "+61", "+43", "+994", "+32", "+359", "+86", "+385", "+357", "+420", "+45", "+372", "+358", "+33", "+995", "+49", "+30", "+379", "+36", "+354", "+353", "+39", "+965", "+371", "+423", "+370", "+352", "+356", "+373", "+377", "+382", "+31", "+389", "+47", "+48", "+351", "+40", "+378", "+421", "+386", "+34", "+46", "+41", "+886", "+90", "+971", "+44"];

  $(function(){
      if(window.location.href.includes("-f2") && JSON.parse(localStorage.getItem('f1Data')) && JSON.parse(localStorage.getItem('f1Data')).length){
          const localStorageData = JSON.parse(localStorage.getItem('f1Data'));
          const countryCode = localStorageData[localStorageData.length - 1];
          if(!bothRegulationList.includes(countryCode['value'])){
              $(".mex-aus").parent().remove();
              $(".tooltip-2").remove();
              $(".tooltip.tooltip-1").css("top", "44%");
          }
      }

  });

  var is_menu_hover = !1,
      is_menu_btn_hover = !1,
      special_country_list = new Array("AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SM", "SK", "SI", "ES", "SE", "GB", "VA", "UK", "AU"),
      telOnlyCountryList = ['al', 'at', 'by', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr', 'ge', 'de', 'gr', 'hu', 'ie', 'it', 'kz', 'lv', 'lt', 'lu', 'mt', 'mc', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'rs', 'sk', 'si', 'es', 'se', 'ch', 'tr', 'ua', 'gb', 'bh', 'eg', 'jo', 'kw', 'om', 'qa', 'sa', 'ae', 'ar', 'bo', 'br', 'cl', 'co', 'cr', 'ec', 'mx', 'pz', 'py', 'pe', 'uy', 've', 'ca', 'id', 'my', 'ph', 'vn', 'hk'];



      var isMobile = false; //initiate as false

      // device detection
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
          || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
          isMobile = true;
      }

  const locationBasedText = {
      desktop:{"th":"à¸¥à¸²à¸à¹à¸¥à¸°à¸§à¸²à¸‡ à¸«à¸£à¸·à¸­à¸„à¸¥à¸´à¸à¹€à¸žà¸·à¹ˆà¸­à¸­à¸±à¸›à¹‚à¸«à¸¥à¸”à¹€à¸­à¸à¸ªà¸²à¸£à¸‚à¸­à¸‡à¸„à¸¸à¸“","vi":"KÃ©o vÃ  tháº£ hoáº·c nháº¥p Ä‘á»ƒ táº£i lÃªn tÃ i liá»‡u cá»§a báº¡n.", "ms":"Tarik dan lepaskan atau klik untuk muat naik dokumen anda","en": 'Drag and drop or click to upload your documents.', "fr":"Glissez et dÃ©posez ou cliquez pour tÃ©lÃ©charger vos documents.",
      "zh":"è¯·ç‚¹å‡»è¿™é‡Œ/æ‹–æ‹½ä¸Šä¼ æ‚¨çš„æ–‡ä»¶", "tw":"è«‹é»žæ“Šé€™è£¡/æ‹–æ‹½ä¸Šå‚³æ‚¨çš„æª”æ¡ˆ",
      "ru":"ÐŸÐµÑ€ÐµÑ‚Ð°Ñ‰Ð¸Ñ‚Ðµ Ð¸Ð»Ð¸ Ñ‰ÐµÐ»ÐºÐ½Ð¸Ñ‚Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ñ‹.","latam": "Arrastra y suelta o haz clic para subir tus documentos.", "ar":"Ù‚Ù… Ø¨Ø¥,Ø±ÙØ§Ù‚ Ø§Ù„Ù…Ù„ÙØ§Øª Ø£Ùˆ Ø§Ø¶ØºØ· ÙÙˆÙ‚ Ø²Ø± Ø§Ù„ØªØ­Ù…ÙŠÙ„."},
      mobile:{"th":"à¹à¸•à¸°à¸—à¸µà¹ˆà¸™à¸µà¹ˆà¹€à¸žà¸·à¹ˆà¸­à¸­à¸±à¸›à¹‚à¸«à¸¥à¸”à¹„à¸Ÿà¸¥à¹Œà¸«à¸£à¸·à¸­à¸–à¹ˆà¸²à¸¢à¸ à¸²à¸žà¹‚à¸”à¸¢à¹ƒà¸Šà¹‰à¸à¸¥à¹‰à¸­à¸‡à¸‚à¸­à¸‡à¸„à¸¸à¸“","vi":"Nháº¥n vÃ o Ä‘Ã¢y Ä‘á»ƒ táº£i tá»‡p lÃªn hoáº·c chá»¥p áº£nh báº±ng mÃ¡y áº£nh cá»§a báº¡n.", "ms":"Tekan sini untuk muat naik fail atau ambil gambar dokumen menggunakan kamera anda.","ru":"ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Ð·Ð´ÐµÑÑŒ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ñ„Ð°Ð¹Ð» Ð¸Ð»Ð¸ ÑÐ´ÐµÐ»Ð°Ñ‚ÑŒ ÑÐ½Ð¸Ð¼Ð¾Ðº Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ ÐºÐ°Ð¼ÐµÑ€Ñ‹.","fr":"Touchez ici pour tÃ©lÃ©charger un fichier ou prendre une photo avec votre appareil photo.","en": 'Tap here to upload a file or take a photo using your camera.', "latam": "Haz clic aquÃ­ para subir un archivo o tomar una foto con tu cÃ¡mara.",
        "zh":"è¯·ç‚¹å‡»è¿™é‡Œä¸Šä¼ æ‚¨çš„æ–‡ä»¶", "tw":"è«‹é»žæ“Šé€™è£¡ä¸Šå‚³æ‚¨çš„æª”æ¡ˆ",
        "ar":"Ø§Ù†Ù‚Ø± Ù‡Ù†Ø§ Ù„ØªØ­Ù…ÙŠÙ„ Ù…Ù„Ù Ø£Ùˆ Ø§Ù„ØªÙ‚Ø§Ø· ØµÙˆØ±Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ÙƒØ§Ù…ÙŠØ±Ø§."},
      limitMessage:{"th":"à¸­à¸±à¸žà¹‚à¸«à¸¥à¸”à¹„à¸”à¹‰à¸ªà¸¹à¸‡à¸ªà¸¸à¸”à¸«à¹‰à¸²à¹„à¸Ÿà¸¥à¹Œ","vi":"Cho phÃ©p tá»‘i Ä‘a nÄƒm tá»‡p","ms":"Maksimum lima fail dibenarkan","en": 'Maximum five files are allowed.'
      , "zh":"æœ€å¤šå…è®¸ä¸Šä¼ 5ä¸ªæ–‡ä»¶","tw":"æœ€å¤šå…è¨±ä¸Šå‚³5å€‹æª”æ¡ˆ",
        "fr":"Cinq dossiers au maximum sont autorisÃ©s.", "ru":"Ð”Ð¾Ð¿ÑƒÑÐºÐ°ÐµÑ‚ÑÑ Ð¼Ð°ÐºÑÐ¸Ð¼ÑƒÐ¼ Ð¿ÑÑ‚ÑŒ Ñ„Ð°Ð¹Ð»Ð¾Ð²", "latam": "Ha alcanzado el nÃºmero mÃ¡ximo de 5 archivos.", "ar":"Ù…Ø³Ù…ÙˆØ­ Ø¨Ø®Ù…Ø³ ØµÙˆØ± ÙƒØ­Ø¯ Ø£Ù‚ØµÙ‰."},
  }


  const LatamCountries = ['BZ', 'CR', 'MX', 'SV', 'GT', 'HN', 'NI', 'PA', 'AR', 'BO', 'CL', 'CO', 'EC', 'PY', 'PE', 'UY', 'VE', 'CU', 'DO', 'PR'];

  let countryLanguage = "en";
  let locationURL = window.location.href;
  if(locationURL.includes("/latam/")){
      countryLanguage = "latam";
  }
  else {
      countryLanguage = $('html').attr('lang');
  }

  // FileDropZone Prototype
  function FileDropZone(formObject) {
      this.maxNumFiles = 5;
      this.numFiles = 0;
      this.files = [];

      this.formObject = formObject;
      this.dropzone = formObject.find('.file-dropzone');
      this.dropzoneLabel = formObject.find('.file-dropzone__label');
      if(countryLanguage === "latam"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.latam) : this.dropzoneLabel.text(locationBasedText.mobile.latam);
      }
      else if(countryLanguage === "ar"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.ar) : this.dropzoneLabel.text(locationBasedText.mobile.ar);
      }

     else if(countryLanguage === "ms"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.ms) : this.dropzoneLabel.text(locationBasedText.mobile.ms);
      }
      else if(countryLanguage === "vi"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.vi) : this.dropzoneLabel.text(locationBasedText.mobile.vi);
      }
      else if(countryLanguage === "th"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.th) : this.dropzoneLabel.text(locationBasedText.mobile.th);
      }
      else if(countryLanguage === "fr"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.fr) : this.dropzoneLabel.text(locationBasedText.mobile.fr);
      }
      else if(countryLanguage === "ru"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.ru) : this.dropzoneLabel.text(locationBasedText.mobile.ru);
      }
      else if(countryLanguage === "zh-CN" || countryLanguage === "zh_CN" || countryLanguage === "zh"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.zh) : this.dropzoneLabel.text(locationBasedText.mobile.zh);
      }
      else if(countryLanguage === "zh-TW" || countryLanguage === "zh_TW" || countryLanguage === "tw"){
          !isMobile ? this.dropzoneLabel.text(locationBasedText.desktop.tw) : this.dropzoneLabel.text(locationBasedText.mobile.tw);
      }
     else{
         !isMobile ? this.dropzoneLabel.text('Drag and drop or click to upload your documents.') : this.dropzoneLabel.text('Tap here to upload a file or take a photo using your camera.');
     }

      this.dropzoneBtnClear = formObject.find('.file-dropzone__btn-clear');
      this.dropzoneFiles = formObject.find('.file-dropzone__files');
      this.dropzoneInput = formObject.find('.file-dropzone__input');

      const self = this;
      this.dropzoneBtnClear.click(function() {
          self.clearAllFiles();
      });

      this.dropzoneInput.on('change', function(e) {
          const uploadedFiles = e.target.files;
          uploadedFiles.length > 0 ? $(".file-dropzone_logo").hide() : $(".file-dropzone_logo").show(); $(".no-picture-error").hide();
          if(countryLanguage === "latam"){
              uploadedFiles.length > 4 && $(".file-dropzone__label").text(locationBasedText.limitMessage.latam);
          }
          else if(countryLanguage === "ar"){
              uploadedFiles.length > 4 && $(".file-dropzone__label").text(locationBasedText.limitMessage.ar);
          }
          else if(countryLanguage === "vi"){
              uploadedFiles.length > 4 && $(".file-dropzone__label").text(locationBasedText.limitMessage.vi);
          }
          else if(countryLanguage === "th"){
              uploadedFiles.length > 4 && $(".file-dropzone__label").text(locationBasedText.limitMessage.th);
          }
          else{
              uploadedFiles.length > 4 && $(".file-dropzone__label").text(locationBasedText.limitMessage.en);
          }
          for (let i = 0; i < uploadedFiles.length; i++) {
              if (self.numFiles >= self.maxNumFiles) {
                  $(this).attr('disabled', 'disabled');
                  if(countryLanguage === "latam"){
                      self.dropzoneLabel.text('Ha alcanzado el nÃºmero mÃ¡ximo de 5 archivos');
                  }
                  else if(countryLanguage === "ar"){
                      self.dropzoneLabel.text('Ù„Ù‚Ø¯ ÙˆØµÙ„Øª Ø¥Ù„Ù‰ Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ù‚ØµÙ‰ Ù„Ø¹Ø¯Ø¯ Ø§Ù„Ù…Ù„ÙØ§Øª ÙˆÙ‡Ùˆ 5');
                  }
                  else if(countryLanguage === "ms"){
                      self.dropzoneLabel.text('Maksimum lima fail dibenarkan');
                  }
                  else if(countryLanguage === "vi"){
                      self.dropzoneLabel.text('Báº¡n Ä‘Ã£ Ä‘áº¡t Ä‘áº¿n sá»‘ lÆ°á»£ng tá»‘i Ä‘a 5 tá»‡p');
                  }
                  else if(countryLanguage === "th"){
                      self.dropzoneLabel.text('à¸­à¸±à¸žà¹‚à¸«à¸¥à¸”à¹„à¸”à¹‰à¸ªà¸¹à¸‡à¸ªà¸¸à¸”à¸«à¹‰à¸²à¹„à¸Ÿà¸¥à¹Œ');
                  }
                  else{
                      self.dropzoneLabel.text('maximum five files are allowed');
                  }
                  self.dropzone.addClass('disabled');
                  break;
              }

              self.files.push(uploadedFiles[i]);
              self.numFiles++;
          }

          self.refreshDropzone();
          self.dropzoneInput.val(null);
      });
  }

  FileDropZone.prototype.clearAllFiles = function() {
      // this.dropzoneLabel.text('Drag and drop or click to upload your documents.');
      this.dropzoneLabel.removeClass('yield-files')
      this.dropzone.removeClass('disabled');
      this.dropzoneBtnClear.removeClass('show');
      this.files = [];
      this.dropzoneFiles.html('');
      this.dropzoneInput.removeAttr('disabled');
      this.dropzoneInput.val(null);
      this.numFiles = 0;
      $(".file-dropzone_logo").show();
  }

  FileDropZone.prototype.refreshDropzone = function() {
      let filesHtml = '';

      for (let i = 0; i < this.files.length; i++) {
          filesHtml +=
              '<div class="file-dropzone__file">' +
              '<div class="file-dropzone__file--name">' +
              this.files[i].name +
              '</div>' +
              '<div class="file-dropzone__file--size">' +
              this.convertByteToKiloByte(this.files[i].size) +
              '</div>' +
              '</div>';
      }
      this.dropzoneFiles.html(filesHtml);
      if (this.files.length > 0) {
          $(".file-dropzone__label.mex-translatable").addClass('yield-files');
          this.dropzoneBtnClear.addClass('show');
      }
  }

  FileDropZone.prototype.convertByteToKiloByte = function(size) {
      let formattedSize = '';
      if (size >= 1048576) {
          formattedSize = (size / 1048576).toFixed(2) + ' MB';
      } else if (size >= 1024) {
          formattedSize = (size / 1024).toFixed(2) + ' KB';
      } else if (size > 1) {
          formattedSize = size + ' bytes';
      } else if (size === 1) {
          formattedSize = size + ' byte';
      } else {
          formattedSize = '0 bytes';
      }

      return formattedSize;
  }


  function openDropdownMenu(e) {
      $(".nav-menu").show();
      for (var a = document.getElementsByClassName("header-nav-menu"), n = 0; n < a.length; n++) a[n].style.display = "none";
      $(".nav-" + e).css("display", "block");
  }

  function closeDropdownMenu(e) {
      $(".nav-menu").hide();
  }
  $(function() {
          $(".std-la-form .selection-country").change(function() {
              var e = $(this).find("option:selected").data("name");
              $(this).parent().find('input[name="country_name"]').val(e);
              var a = $(this).parent().parent("form");
              1 != a.find('select[name="company"] option:selected').val() || special_country_list.includes(e.toUpperCase()) || (a.find('select[name="company"]').val(6), alterForm_TinField());
          });
      }),
      $(function() {
          (window.innerWidth > 0 ? window.innerWidth : screen.width) <= 1024
              ?
              $("nav-menu").empty() :
              $(".header-menu-trigger").hover(function() {
                  $(this).addClass("active");
                  var e = $(this).data("type") + "-menu";
                  openDropdownMenu(e),
                      $(".nav-menu").unbind("hover"),
                      $(".nav-menu").hover(
                          function() {
                              is_menu_hover = !0;
                          },
                          function() {
                              (is_menu_hover = !1), closeDropdownMenu(e);
                          }
                      );
              }),
              $(".nav-menu-mobile-section").click(function() {
                  var e = $(this).children("ul"),
                      a = e.css("display");
                  $(".nav-menu-mobile-section > ul").hide(), "block" == a ? e.hide() : e.show();
              }),
              $(".nav-menu-hamburger").click(function() {
                  $(".nav-menu-mobile").toggle();
              });
      });
  var itiList = {};

  function parseUrl(e) {
      return window.location.href.includes("www.multibankfx.me") ? e : "/~cms/mfx/v1" + e;
  }
  $(function() {
          $(".send-verification-code-btn").click(function(e) {
                  e.preventDefault();
                  var a = $(this).parent().parent().attr("id"),
                      n = $(this).parent().parent().find('input[name="country_code"]').val(),
                      t = $(this).parent().parent().find(".input_with_phone").first(),
                      i = $(this).parent().parent().find(".sms_verif_code").first(),
                      o = $(this);
                  if ((o.attr("disabled", !0), t.parent().find("#phone-error").remove(), "" == n || void 0 === typeof n)) t.parent().append('<label id="phone-error" class="error" for="phone">Please select a country</label>'), o.attr("disabled", !1);
                  else if (itiList[a].isValidNumber()) {
                      let e = t.val().replace(n, "").replace("-", "").replace("(", "").replace(")", "").replace(/ /g, "");
                      $.ajax({
                          url: "/api/sendSMSCode",
                          type: "POST",
                          data: { countrycode: n, phone: e },
                          success: function(e) {
                              if ("success" == JSON.parse(e).response.status.toLowerCase()) {
                                  i.parent().parent().find(".form-tooltip").remove(), i.parent().append('<span class="form-tooltip active success">SMS Code Sent</span>'), i.data("verified", "0");
                                  let e = 60;
                                  var a = setInterval(function() {
                                      o.text("(" + e + ")"), --e <= 0 && (clearInterval(a), "0" === i.data("verified") && o.attr("disabled", !1), o.text("Send Code"));
                                  }, 1e3);
                              } else o.attr("disabled", !1);
                          },
                          error: function(e) {
                              o.attr("disabled", !1);
                          },
                      });
                  } else i.parent().parent().find(".form-tooltip").remove(), t.parent().append('<span class="form-tooltip active error">Invalid Phone Number</span>'), o.attr("disabled", !1);
              }),
              $(".sms_verif_code").keyup(function() {
                  var e = $(this).parent().find(".sms_verif_code").first();
                  if (e.val().length < 6) return;
                  if ("1" === e.data("verified")) return;
                  var a = $(this).parent().parent().find('input[name="country_code"]').val(),
                      n = $(this).parent().parent().find(".input_with_phone").first(),
                      t = $(this).parent().parent().find(".phone-field").first(),
                      i = $(this).parent().parent().find(".send-verification-code-btn").first();
                  e.attr("readonly", !0), n.parent().find("#phone-error").remove();
                  let o = n.val().replace(a, "").replace("-", "").replace("(", "").replace(")", "").replace(/ /g, "");
                  $.ajax({
                      url: "/api/verifySMSCode",
                      type: "POST",
                      data: { countrycode: a, phone: o, verify_code: e.val() },
                      success: function(a) {
                          "success" == JSON.parse(a).response.status.toLowerCase() ?
                              (e.addClass("border-valid"),
                                  e.attr("readonly", "true"),
                                  e.parent().parent().find(".form-tooltip").remove(),
                                  e.parent().append('<span class="form-tooltip active success">Code Verified</span>'),
                                  e.data("verified", "1"),
                                  i.attr("disabled", !0),
                                  e.prop("readonly", !0),
                                  t.append('<div style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 10; background-color: transparent; cursor: not-allowed;"></div>')) :
                              (e.parent().parent().find(".form-tooltip").remove(), e.parent().append('<span class="form-tooltip active error">Invalid Code</span>'), e.attr("readonly", !1));
                      },
                  });
              }),
              $.validator.addMethod(
                  "regex",
                  function(e, a, n) {
                      var t = new RegExp(n);
                      return this.optional(a) || t.test(e);
                  },
                  function(e, a) {
                      return void 0 !== $(a).data("extra-message") ? $(a).data("extra-message") : "Invalid Input";
                  }
              ),
              $.validator.addMethod(
                  "phone_format",
                  function(e, a) {
                      if ($.trim(e)) {
                          let e = $(a).closest("form").attr("id");
                           if(itiList[e].s.iso2 === "mm"){
                              if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(a.value)){
                                  return !0;
                              }
                              else return !1;
                          }
                          return !!itiList[e].isValidNumber();
                      }
                      return !1;
                  },
                  function(e, a) {
                      let countryLanguage = "en";
                      let locationURL = window.location.href;
                      if(locationURL.includes("/latam/")){
                          return "Formato de nÃºmero de telÃ©fono no vÃ¡lido";
                      }
                      else if(locationURL.includes("/ar/")){
                          return "ØªÙ†Ø³ÙŠÙ‚ Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­";
                      }
                      else if(locationURL.includes("/ms/")){
                          return "Format Nombor Telefon Tidak Sah";
                      }
                      else if(locationURL.includes("/vi/")){
                          return "Äá»‹nh dáº¡ng sá»‘ Ä‘iá»‡n thoáº¡i khÃ´ng há»£p lá»‡";
                      }
                      else if(locationURL.includes("/th/")){
                          return "à¸£à¸¹à¸›à¹à¸šà¸šà¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œà¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡";
                      }
                      else{
                          return "Invalid Phone Number Format";
                      }
                  }
              ),
              // file upload
              $("form").each(function() {
                  var form_id = $(this).attr('id');
                  var e = $(this).attr("id"),
                      a = $(this);
                  let dropzone = null;
                  if (a.hasClass('with-dropzone')) {
                      dropzone = new FileDropZone(a);
                  }
                  if (a.hasClass("new")) {
                      let a = document.querySelector("#" + e + ' input[name="phone_display"]');
                      if (null !== a) {
                          let s = {
                              initialCountry: "auto",
                              separateDialCode: 1,
                              nationalMode: !1,
                              geoIpLookup: function(e) {
                                  var n = a.dataset.ip_country_code;
                                  void 0 !== n && "" != n && e(n);
                              },
                              preferredCountries: [],
                              utilsScript: "/asset/static_js/utils.js",
                          };
                          "philippine_seminar_registration_form" == e && (s.onlyCountries = ["ph"]),
                              "demo_competition_form_2019_08_13" == e && (s.onlyCountries = telOnlyCountryList),
                              (itiList[e] = window.intlTelInput(a, s)),
                              "" != (t = $("#" + e + ' select[name="country_name"] option:selected')).val() && itiList[e].setCountry(t.data("country_iso_code"));
                          var n = $("#" + e + ' input[name="country_code"]').val();
                          if (void 0 !== (i = a.dataset.ip_country_code))
                              if ("" != i) void 0 !== (o = itiList[e].getSelectedCountryData()).iso2 && ($("#" + e + ' select[name="country_name"]').val(o.iso2.toUpperCase()), $("#" + e + ' input[name="country_code"]').val("+" + o.dialCode));
                              "" != n && itiList[e].setNumber($("#" + e + ' input[name="phone_display"]').val()),
                              (a.onfocus = function() {
                                  if ("" == a.value) {
                                      var n = itiList[e].getSelectedCountryData();
                                      // a.value = "+" + n.dialCode;
                                  }
                              }),
                              a.addEventListener("countrychange", function() {
                                  var a = itiList[e].getSelectedCountryData();
                                  let disclaimer =  {"vi":"Do cÃ¡c quy Ä‘á»‹nh cá»§a SEC, chÃºng tÃ´i khÃ´ng thá»ƒ má»Ÿ rá»™ng dá»‹ch vá»¥ cá»§a mÃ¬nh cho cÃ´ng dÃ¢n Hoa Ká»³. Náº¿u báº¡n lÃ  cÃ´ng dÃ¢n cá»§a má»™t quá»‘c gia khÃ¡c cÃ³ sá»‘ Ä‘iá»‡n thoáº¡i cá»§a Hoa Ká»³, báº¡n cÃ³ thá»ƒ tiáº¿n hÃ nh nhÆ° bÃ¬nh thÆ°á»ng.","ms":"Disebabkan peraturan SEC, kami tidak dapat memberikan perkhidmatan kami kepada warganegara US. Jika anda merupakan warga negara lain dan mempunyai nombor telefon US, anda boleh meneruskan permohonan seperti biasa.","en":"Due to SEC regulations, we are unable to extend our services to US citizens. If you are a citizen of another country with a US phone number you may proceed as normal.","latam":"Debido a las regulaciones SEC, no podemos brindar nuestros servicios a los ciudadanos de EE.UU. Si eres un ciudadano de otro paÃ­s con un nÃºmero de telÃ©fono de EE.UU. puedes proceder normalmente.", "ar":"Ø¨Ø³Ø¨Ø¨ Ù„ÙˆØ§Ø¦Ø­ Ù‡ÙŠØ¦Ø© Ø§Ù„Ø£ÙˆØ±Ø§Ù‚ Ø§Ù„Ù…Ø§Ù„ÙŠØ© ÙˆØ§Ù„Ø¨ÙˆØ±ØµØ§Øª (SEC) ØŒ Ù„Ø§ ÙŠÙ…ÙƒÙ†Ù†Ø§ ØªÙˆØ³ÙŠØ¹ Ø®Ø¯Ù…Ø§ØªÙ†Ø§ Ù„ØªØ´Ù…Ù„ Ø§Ù„Ù…Ù‚ÙŠÙ…ÙŠÙ† ÙÙŠ Ø§Ù„ÙˆÙ„Ø§ÙŠØ§Øª Ø§Ù„Ù…ØªØ­Ø¯Ø© Ø§Ù„Ø§Ù…Ø±ÙŠÙƒÙŠØ© . Ø¥Ø°Ø§ ÙƒÙ†Øª Ù…Ù‚ÙŠÙ…Ø§Ù‹Â ÙÙŠ Ø¨Ù„Ø¯ Ø¢Ø®Ø± ÙˆØªØ­Ù…Ù„ Ø±Ù‚Ù… Ù‡Ø§ØªÙ Ø£Ù…Ø±ÙŠÙƒÙŠ ÙÙŠÙ…ÙƒÙ†Ùƒ Ø§Ù„Ù…ØªØ§Ø¨Ø¹Ø©."}
                                  if(a.iso2 ==="us"){
                                     if(countryLanguage === "latam"){
                                          window.innerWidth < 769 ? alert(disclaimer.latam) : $(this).parent().append("<label class='d-block error error-for-us' style='top:105%'>"+disclaimer.latam+"</label>");
                                      }
                                      else
                                      window.innerWidth < 769 ? alert(disclaimer[countryLanguage]) : $(this).parent().append("<label class='d-block error error-for-us' style='top:105%'>"+disclaimer[countryLanguage]+"</label>");

                                          $("label.claim-trem-p").css("margin-top","20px");
                                          $("input[type='email']").parent().css("margin-top","25px");
                                  }
                                  else {
                                      $("input[type='email']").parent().css("margin-top","0px");
                                      $("label.claim-trem-p").css("margin-top","0px");
                                      $(".error-for-us").remove();
                                  }

                                  let countryName = $('meta[name="c_code"]').attr("content").toUpperCase();
                                  if(countryName == "N/A"){
                                      countryName = a.iso2.toUpperCase()
                                  }

                                  $("input[name='country_code']").val("+"+a.dialCode);
                                  $('input[name="country_name"]').val(countryName);
                                  void 0 !== a.iso2 &&
                                      ($("#" + e + ' select[name="country_name"]').val(a.iso2.toUpperCase()),
                                          $("#" + e + ' input[name="country_code"]').val("+" + a.dialCode),
                                          1 != $("#" + e + ' select[name="company"] option:selected').val() || special_country_list.includes(a.iso2.toUpperCase()) || ($("#" + e + ' select[name="company"]').val(6), alterForm_TinField()));
                              }),
                              "philippine_seminar_registration_form" == e && itiList[e].setCountry("ph");
                      }
                  } else if (a.hasClass("old-new")) {
                      let a = document.querySelector("#" + e + ' input[name="phone_display"]');
                      if (null !== a) {
                          var t;
                          (itiList[e] = window.intlTelInput(a, {
                              separateDialCode: 1,
                              initialCountry: "auto",
                              geoIpLookup: function(e) {

                                  var n = a.dataset.ip_country_code;
                                  void 0 !== n && "" != n && e(n);
                              },
                              preferredCountries: [],
                              utilsScript: "/asset/static_js/utils.js",
                          })),
                          "" != (t = $("#" + e + ' select[name="country_name"] option:selected')).val() && itiList[e].setCountry(t.data("country_iso_code"));
                          var i, o;
                          n = $("#" + e + ' input[name="country_code"]').val();
                          if (void 0 !== (i = a.dataset.ip_country_code))
                              if ("" != i) void 0 !== (o = itiList[e].getSelectedCountryData()).iso2 && $("#" + e + ' input[name="country_code"]').val("+" + o.dialCode);
                              "" != n && itiList[e].setNumber(n + $("#" + e + ' input[name="phone_display"]').val()),
                              a.addEventListener("countrychange", function() {
                                  var a = itiList[e].getSelectedCountryData();
                                  void 0 !== a.iso2 && $("#" + e + ' input[name="country_code"]').val("+" + a.dialCode);
                              });
                      }
                      $("#" + e + " .selection-country").change(function(a) {
                          itiList[e].setCountry($(this).children("option:selected").data("country_iso_code"));
                      });
                  }
                  $(this).find(".selection-country").parent().find('input[name="country_name"]').val($(this).find(".selection-country").find("option:selected").data("name")),
                      $(this)
                      .find(".selection-country")
                      .change(function() {
                          var n = $(this).find("option:selected").data("name");
                          $(this).parent().find('input[name="country_name"]').val(n),
                              "live_account_form" == e && (1 != a.find('select[name="company"] option:selected').val() || special_country_list.includes(n) || a.find('select[name="company"]').val(6));
                      });
                  var s = {},
                      l = {};
                  $(this)
                      .find(":input")
                      .each(function() {
                          if (void 0 !== $(this).attr("name")) {
                              var n = $(this).attr("name");
                              if (((s[n] = {}), $(this).prop("required"))) {
                                  s[n].required = !0;
                                  $(this).attr("");
                                  "hidden" != $(this).attr("type") &&
                                      "radio" != $(this).attr("type") &&
                                      "checkbox" != $(this).attr("type") &&
                                      ("phone_display" === n ? $(this).parent().prev().append('<sup class="sup-size">*</sup>') : $(this).siblings("label").append('<sup class="sup-size">*</sup>'));
                              }
                              void 0 !== $(this).data("regex") && null !== $(this).data("regex") && (s[n].regex = $(this).data("regex")),
                                  void 0 !== $(this).data("message") && null !== $(this).data("regex") && ((l[n] = {}), (l[n].required = $(this).data("message"))),
                                  "confirm_email" == $(this).attr("name") && ((s[n].equalTo = "#" + e + ' input[name="email"]'), (l[n].equalTo = $(this).data("extra-message"))),
                                  a.hasClass("new") && "phone_display" == $(this).attr("name") && (s[n].phone_format = !0);
                          }
                      });
                  var formObject = $(this);

                  var r = $(this);
                  $(this).validate({
                      rules: s,
                      messages: l,
                      submitHandler: function(e) {

                          const locationURL = window.location.href;
                          let countryLanguage = "en";
                          let loadingMessage = "";
                          if(locationURL.includes("/latam/")){
                              countryLanguage = "latam";
                              loadingMessage = "Por favor espera un momento...";
                          }
                          else if(locationURL.includes("/vi/")){
                              countryLanguage = "vi";
                              loadingMessage = "Xin vui lÃ²ng chá» trong giÃ¢y lÃ¡t...";
                          }
                          else if(locationURL.includes("/ar/")){
                              countryLanguage = "ar";
                              loadingMessage = "Ø±Ø¬Ø§Ø¡Ù‹ Ø§Ù†ØªØ¸Ø± Ù„Ø­Ø¸Ø©...";
                          }
                          else if(locationURL.includes("/th/")){
                              countryLanguage = "th";
                              loadingMessage = "à¹‚à¸›à¸£à¸”à¸£à¸­à¸ªà¸±à¸à¸„à¸£à¸¹à¹ˆ...";
                          }
                          else if(locationURL.includes("/ms/")){
                              countryLanguage = "ms";
                              loadingMessage = "Tunggu sebentar...";
                          }
                          else if(locationURL.includes('/pt/')){
                              countryLanguage = "pt";
                              loadingMessage = "Por favor aguarde um momento...";
                          }
                          else if(locationURL.includes('/ru/')){
                              countryLanguage = "ru";
                              loadingMessage = "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ð¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ...";
                          }
                          else if(locationURL.includes('/fr/')){
                              countryLanguage = "fr";
                              loadingMessage = "Patientez, s'il vous plaÃ®t...";
                          }
                          else{
                              loadingMessage = "Please wait a moment...";
                          }
                         if (form_id === 'new_demo_account_form'){

                            $(".demo-account-form-mobile").append('<div class="form-loader-container"> <img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/> <br> <p class="d-block">'+loadingMessage+'</p></div>');
                         }
                           if (form_id === 'vps_form'){

                            $(".demo-account-form-mobile").append('<div class="form-loader-container"> <img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/> <br> <p class="d-block">'+loadingMessage+'</p></div>');
                         }

                         if (form_id === 'new_contact_us_form_2105'){
                             $("#candles-loader-overlay").fadeIn(300);
                             $('body').css({'overflow':'hidden'});
                         }

                         if (form_id === 'new_contact_us_form'){
                            $(".demo-div .contact-us-div").append('<div class="form-loader-container"><img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/><br> <p class="d-block">'+loadingMessage+'</p></div>');
                         }

                         if (form_id === 'referrer_form'){
                            $(".contact-us-div").append('<div class="form-loader-container"><img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/><br> <p class="d-block">'+loadingMessage+'</p></div>');
                         }

                         if (form_id === 'new_contact_us_form_ic'){
                            $(".contact-us-div").append('<div class="form-loader-container"><img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/><br> <p class="d-block">'+loadingMessage+'</p></div>');
                         }
                         if (form_id === 'new_ib_form_offer'){

                            $(".ib-form-container").append('<div class="form-loader-container"><div class="loader-img-center"> <img src="/asset/images/common/icons/form-loading.gif"/></div><p class="d-block">'+loadingMessage+'</p></div>');
                         }
                         if (form_id === 'ifx_expo_2021'){

                            $(".fx-register-form").append('<div class="form-loader-container"><div class="loader-img-center"> <img src="/asset/images/common/icons/form-loading.gif"/></div><p class="d-block">'+loadingMessage+'</p></div>');
                         }
                         if (form_id === 'zh_conatct_us_form'){
                              $("#registration-form").append('<div id="candles-loader-overlay" class="overlay"><div class="candles-loader"><div class="candles-loader-candle"></div><div class="candles-loader-candle"></div><div class="candles-loader-candle"></div><div class="candles-loader-candle"></div></div>');
                         }

                       if($('form[name="vps_form')){
                             $("form").append('<div class="form-loader-container"><div class="loader-img-center"> <img src="/asset/images/common/icons/form-loading.gif"/></div><p class="d-block">'+loadingMessage+'</p></div>');
                         }
                     if($('form[name="trading_tools_apply_mam_pamm_acc_form')){
                             $("form").append('<div class="form-loader-container"><div class="loader-img-center"> <img src="/asset/images/common/icons/form-loading.gif"/></div><p class="d-block">'+loadingMessage+'</p></div>');
                         }
                      if($('form[name="trading_tools_apply_api_form')){
                             $("form").append('<div class="form-loader-container"><div class="loader-img-center"> <img src="/asset/images/common/icons/form-loading.gif"/></div><p class="d-block">'+loadingMessage+'</p></div>');
                         }
                          var a = r.find('input[name="phone_display"]');
                          if (void 0 !== a && a.length > 0) {
                              let e = a.val();
                              if(r.find('input[name="country_code"]').length > 0) {
                                  n = r.find('input[name="country_code"]').val();
                              }
                              else {
                                  n='';
                              }

                              if(r.find('input[name="phone"]').length > 0) {
                                  r.find('input[name="phone"]').val(e.replace(n, "").replace("-", "").replace("(", "").replace(")", ""));
                              }
                          }

                          if (r.hasClass('ajax-submission')) {
                              var formData = new FormData(r[0]);
                              if (dropzone) {
                                  const isUplaodRequired = ["new_live_account_post", "demo_account_form_comp"].includes(form_id);

                                  if (dropzone.files.length < 1 && isUplaodRequired) {
                                      // if (0) {
                                      $('.for_' + form_id).remove();
                                      let errorsHtml = "";
                                      if(countryLanguage === "latam"){
                                      errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>Por favor, sube al menos un documento de apoyo</div></div>';
                                      }
                                      if(countryLanguage === "th"){
                                      errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>à¹‚à¸›à¸£à¸”à¸­à¸±à¸›à¹‚à¸«à¸¥à¸”à¹€à¸­à¸à¸ªà¸²à¸£à¸ªà¸™à¸±à¸šà¸ªà¸™à¸¸à¸™à¸­à¸¢à¹ˆà¸²à¸‡à¸™à¹‰à¸­à¸¢à¸«à¸™à¸¶à¹ˆà¸‡à¸‰à¸šà¸±à¸š</div></div>';
                                      }
                                      else if(countryLanguage === "ar"){
                                      errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>ÙŠØ±Ø¬Ù‰ ØªØ­Ù…ÙŠÙ„ Ù…Ø³ØªÙ†Ø¯ Ø¯Ø§Ø¹Ù… ÙˆØ§Ø­Ø¯ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„</div></div>';
                                      }

                                      else if(countryLanguage === "ms") {
                                          errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>Sila muat naik sekurang-kurangnya satu dokumen sokongan.</div></div>';
                                      }
                                      else if(countryLanguage === "vi") {
                                          errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>Vui lÃ²ng táº£i lÃªn Ã­t nháº¥t má»™t tÃ i liá»‡u há»— trá»£!</div></div>';
                                      }
                                      else if(countryLanguage === "ru") {
                                          errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚Ðµ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ Ð¾Ð´Ð¸Ð½ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð¶Ð´Ð°ÑŽÑ‰Ð¸Ð¹ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚!</div></div>';
                                      }

                                      else if(countryLanguage === "fr") {
                                          errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>Veuillez tÃ©lÃ©charger au moins une piÃ¨ce justificative !</div></div>';
                                      }
                                      else {
                                          errorsHtml = '<div style="position: absolute; top: 105%; margin-left: -20px;" class="no-picture-error errors error1 for_' + form_id + '"><div>Please upload at least one supporting document</div></div>';
                                      }
                                      $(".claim-bonus-cs-form").removeClass("form-loading");
                                        r.removeClass("form-loading");
                                        $(".file-dropzone__input").after(errorsHtml)
                                      // $(errorsHtml).insertBefore(r);
                                      $('.form-loader-container').remove();
                                      // document.querySelector('.for_' + form_id).scrollIntoView({
                                      //     behavior: 'smooth'
                                      // });
                                      return;
                                  }

                                  for (let i = 0; i < dropzone.files.length; i++) {
                                      formData.append('file_upload_multiple[]', dropzone.files[i]);
                                  }
                              }

                              if (form_id === 'journey_step_1') {
                                  $(".claim-bonus-cs-form").append('<div class="form-loader-container"> <img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/> <br> <p class="d-block">'+loadingMessage+'</p></div>');

                                  $("input[name='phone']").val($("input[name='country_code']").val()+$("input[name='phone']").val());

                                  // $("input[name='phone_display']").val($("input[name='country_code']").val()+$("input[name='phone']").val());

                                  localStorage.setItem('f1Data', JSON.stringify($('#journey_step_1').serializeArray()));

                                  localStorage.setItem('email', JSON.stringify($("#journey_step_1 input[name='email']").val()));

                              }

                              if (form_id === 'referrer_form'){
                                $(".contact-us-div").append('<div class="form-loader-container"><img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/><br> <p class="d-block">'+loadingMessage+'</p></div>');
                             }

                              if (form_id === 'user_journey') {
                                  $(".claim-bonus-cs-form").append('<div class="form-loader-container"> <img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/> <br> <p class="d-block">'+loadingMessage+'</p></div>');

                                  $("input[name='phone']").val($("input[name='country_code']").val()+$("input[name='phone']").val());


                                  localStorage.setItem('f1Data', JSON.stringify($('#user_journey').serializeArray()));

                                  localStorage.setItem('email', JSON.stringify($("#user_journey input[name='email']").val()));

                              }

                              if (form_id === 'new_demo_account_form'){

                                  $("input[name='phone']").val($("input[name='country_code']").val()+$("input[name='phone']").val());
                              }

                              if ((form_id ==='new_live_account_post') &&($(window).width() < 767)){
                                  $(".form-head").addClass("form-loading");
                                  $("#new_live_account_post").addClass("form-loading");
                                  $(document).scrollTop(0);
                              $(".section-live-account-2").append('<div class="form-loader-container"> <img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/> <br> <p class="d-block">'+loadingMessage+'</p></div>');
                              }
                              if(form_id === "ifx_expo_2021"){
                                  $("#ifx_expo_2021").append('<div class="form-loader-container"> <img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/></div>');
                              }
                              else{
                               $("#new_live_account_post").addClass("form-loading");
                                  $(document).scrollTop(0)
                                $(".claim-bonus-cs-form").append('<div class="form-loader-container"> <img style="margin-bottom:30px" src="/asset/images/common/icons/form-loading.gif"/> <br> <p class="d-block">'+loadingMessage+'</p></div>');
                         }
                              formData.append('is_ajax', 1);

                      $.ajax({
                          type: 'POST',
                          enctype: 'multipart/form-data',
                          url: formObject.attr('action'),
                          data: formData,
                          processData: false,
                          contentType: false,
                          success: function(data) {
                          try {
                              const responseJson = (JSON.parse(data)).response;
                                          if (form_id === 'new_live_account_post') {
                                              window.location.href ="account/live-account-verify-email";
                                          }
                                          else if(form_id === 'journey_step_1'){
                                              const urlParams = new URLSearchParams(window.location.search);
                                              const bonusName = urlParams.get('bonus');
                                            if( typeof(bonusName) == "object" ) {window.location.href ="account/live-account-f2"}
                                            else window.location.href ="account/live-account-f2?bonus="+bonusName;
                                          }
                                          else if (form_id === 'new_contact_us_form_ic') {
                                              window.location.href = "contact-us-ic/thank-you";
                                          }
                                           else if (form_id === 'new_contact_us_form') {
                                              window.location.href = "contact-us-ib/thank-you";
                                          }
                                          else if (form_id === 'new_ib_form_offer') {
                                              window.location.href = "ib-offer-thank-you?src=callback_partnership";
                                          }
                                          else if (form_id === 'demo_competition_form_feb_2021') {
                                              window.location.href = "contact-us-ib/thank-you";
                                          }
                                          else if (form_id === 'ifx_expo_2021') {
                                              window.location.href = "lp/expo2021/thank-you";
                                          }
                                          else if (form_id === 'user_journey') {
                                              window.location.href = "account/live-account-f2";
                                          }

                                          else if (form_id === 'ifx_expo_2020') {
                                              window.location.href = responseJson.redirect_url;
                                          }

                                          else if (form_id === 'new_test_call_back_footer_form') {
                                              window.location.href = "contact-us-ib/thank-you";
                                          }

                                          else if (form_id === 'referrer_form') {
                                              window.location.href = "thank-you?src=refer_friend";
                                          }


                                          else {

                                              window.location.href = responseJson.redirect_url;
                                          }
                                           var selectedVal = $("#new_institutional_form .valid option:selected").val();
                                          if(form_id === 'new_institutional_form'){
                                              switch(selectedVal){
                                                  case '7':
                                                      window.location.href = "thank-you?src=cpa";
                                                      break;
                                                  case '2':
                                                      window.location.href = "thank-you?src=whitelabel";
                                                      break;
                                                  case'3':
                                                       window.location.href = "thank-you?src=franchise";
                                                      break;
                                                  case'8':
                                                       window.location.href = "thank-you?src=corporate";
                                                      break;
                                              }


                                          }

                             } catch (err) {

                                 // form loader remove code
                                        $(".claim-bonus-cs-form").removeClass("form-loading");
                                        $(".form-head").removeClass("form-loading");
                                        $("#new_live_account_post").removeClass("form-loading");
                                        $('.form-loader-container').remove();
                                        r.removeClass("form-loading");
                                  // form loader remove code
                                          $('.for_' + form_id).remove();
                                          let errorsHtml = '<div>Unknown Error Please <a style="color:red; text-decoration:underline" href="contact">Contact Support</a></div>';
                                          errorsHtml = '<div class="errors error1 for_' + form_id + '">' + errorsHtml + '</div>';
                                          $(errorsHtml).insertBefore(r);
                                          $('.form-loader-container').remove();
                                          document.querySelector('.for_' + form_id).scrollIntoView({
                                              behavior: 'smooth'
                                          });
                                      }
                           },
                          error: function(xhr, textStatus, errorThrown) {

                              // form loader remove code
                              $(".claim-bonus-cs-form").removeClass("form-loading");
                              $("#new_live_account_post").removeClass("form-loading");
                              $(".form-head").removeClass("form-loading");
                              $('.form-loader-container').remove();
                              $('#candles-loader-overlay').remove();
                              r.removeClass("form-loading");
                              // form loader remove code

                              $('.for_' + form_id).remove();
                              let errorsHtml = '';
                              if (form_id === 'new_live_account_post' && $("[name='client_type']").val() == 1) {
                                  $(".lei-input-container").removeClass('d-none');
                                  $(".lei-input-container").addClass('d-block')
                              }

                              if (xhr.status === 400) {
                                  try {
                                      const responseJson = (JSON.parse(xhr.responseText)).response;

                                      if(responseJson.errors && responseJson.errors.length){
                                          errorsHtml = responseJson.errors[0];
                                          errorsHtml = '<div class="errors error1 for_' + form_id + '">' + errorsHtml + '</div>';
                                          $(errorsHtml).insertBefore(formObject);
                                          $('.form-loader-container').remove();
                                          return 0;
                                      }

                                      if(JSON.parse(xhr.responseText).response.errors.errors[0] && JSON.parse(xhr.responseText).response.errors.errors && JSON.parse(xhr.responseText).response.errors.errors[0] === "Email/phone already registered!"){
                                          $(".email-exists-error").length && $(".email-exists-error").remove();
                                          $("input[type='email']").after("<span class='email-exists-error' style='color:red; font-size:12px'>Email or Phone Already Registered, Please <a href='https://my.multibankfx.com/en/traders/login' style='font-size:14; color:#bb914a !important'>Click here</a> to Sign In or Reset Password.</span>")
                                      }
                                      if(responseJson.errors[0] && responseJson.errors[0].toLowerCase() === "email already registered"){
                                          window.location.href = "account/live-account-email-exists";
                                          return 0;
                                      }
                                      if(responseJson.errors[0] && responseJson.errors[0].toLowerCase().includes("country name is required") ){
                                          window.location.href = "account/live-account-f1";
                                          return 0;
                                      }

                                      for (let i = 0; i < responseJson.errors.length; i++) {
                                          errorsHtml += '<div>' + responseJson.errors[i] + '</div>';
                                      }
                                  } catch (err) {
                                      errorsHtml = '<div>Unknown Error Please <a style="color:red; text-decoration:underline" href="contact">Contact Support</a></div>';
                                  }
                              }
                              if(errorsHtml && errorsHtml.length < 1){
                                  if(xhr.status === 404 ){
                                      errorsHtml = '<div>Something went wrong Please <a style="color:red; text-decoration:underline" href="contact">Contact Support</a></div>';
                                  }
                                  else if(xhr.status !== 404) {
                                      errorsHtml = '<div>Unknown Error Please <a style="color:red; text-decoration:underline" href="contact">Contact Support</a></div>';
                                  }
                                  else{
                                  errorsHtml = '<div class="errors error1 for_' + form_id + '">' + errorsHtml + '</div>';
                                  }
                              }


                              $(errorsHtml).insertBefore(formObject);
                              $('.form-loader-container').remove();
                              document.querySelector('.for_' + form_id).scrollIntoView({
                                behavior: 'smooth'
                              });
                          }
                      })
                          }
                          else {
                              e.submit();
                          }
                      },
                      errorPlacement: function(e, n) {
                          "privacy" == n.attr("name") ?
                              e.insertAfter(n.parent()) :
                              "file_id_front" === n.attr("name") ?
                              e.insertAfter(n.parent().children().last()) :
                              a.hasClass("new") && "phone_display" == n.attr("name") ?
                              e.insertAfter(n.parent()) :
                              e.insertAfter(n);
                      },
                  });
              });
      }),
      $(function() {
          for (var e = document.querySelectorAll(".article-block"), a = 0; a < e.length; a++) {
              "" == e[a].querySelector(".article-big-title").textContent && (e[a].style.display = "none");
          }
      }),
      $(".bonus-page-tab").click(function(e) {
          var a = $(this).data("tab");
          $(".bonus-page-tab").removeClass("active"), $(this).addClass("active"), $(".bonus-page-pane").removeClass("active"), $("#" + a).addClass("active");
      });
  var isHeaderFixed = !1,
      winHeight = 0;

  function getUrlVars() {
      var e = {};
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a, n, t) {
          e[n] = t;
      });
      return e;
  }
  $(function() {
          function e() {
              var e = $(window).scrollTop();
              e >= winHeight && window.innerWidth >= 768 ? $(".slidebar").show(200) : e < winHeight && window.innerWidth >= 768 && $(".slidebar").hide(200);
          }
          (winHeight = window.innerHeight),
          e(),
              $(window).scroll(function() {
                  var a;
                  e(),
                      (a = $(window).scrollTop()) >= winHeight && !isHeaderFixed && window.innerWidth >= 1200 ?
                      ($(".header").addClass("sticky"), (isHeaderFixed = !0)) :
                      a < winHeight && isHeaderFixed && window.innerWidth >= 1200 && ($(".header").removeClass("sticky"), (isHeaderFixed = !1)),
                      (function() {
                          var e = $(window).scrollTop();
                          e >= winHeight && window.innerWidth >= 1200 ? $(".bottom-bar").slideDown(300) : e < winHeight && window.innerWidth >= 1200 && $(".bottom-bar").slideUp(300);
                      })();
              }),
              $(window).resize(function() {
                  winHeight = window.innerHeight;
              }),
              $(".slidebar a").mouseover(function() {
                  $(this).find(".text").show();
              }),
              $(".slidebar a").mouseout(function() {
                  $(this).find(".text").hide();
              });
      }),
      $(function() {
          var e = getUrlVars().page_year;
          if ((void 0 === e && (e = 1), "undefined" != typeof numNewsPage)) {
              var a = '<li class="page-item';
              1 == e && (a += " disabled"), (a += '"><a class="page-link" href="/about/company-news?page_year=' + (e - 1) + '" tabindex="-1">Previous</a></li>');
              for (var n = 0; n < numNewsPage; n++)(a += '<li class="page-item'), n + 1 == e && (a += " active"), (a += '"><a class="page-link" href="/about/company-news?page_year=' + (n + 1) + '">' + (n + 1) + "</a></li>");
              (a += '<li class="page-item'), e == numNewsPage && (a += " disabled"), (a += '"><a class="page-link" href="/about/company-news?page_year=2">Next</a></li>'), $(".pagination").html(a);
          }
      });
  const uploadButton = document.querySelector(".browse-btn");

  function alterForm_TinField() {
      var e = "not available",
          a = new Array("1"),
          n = $("#la_select_company option:selected").val();
      a.indexOf(n) >= 0 ?
          ($(".la-container-has_tin").removeClass("d-none"),
              $(".std-la-form input[name=has_tin]").prop("required", !0),
              $(".std-la-form input[name=tin_number]").prop("required", !0),
              1 == $(".std-la-form input[name=has_tin]:checked").val() ?
              ($(".std-la-form input[name=tin_number]").val() == e && $(".std-la-form input[name=tin_number]").val(""), $(".la-container-tin_number").removeClass("d-none")) :
              0 == $(".std-la-form input[name=has_tin]:checked").val() && ($(".la-container-tin_number").addClass("d-none"), $(".std-la-form input[name=tin_number]").val(e))) :
          ($(".std-la-form input[name=has_tin]").prop("checked", !1),
              $(".la-container-has_tin").addClass("d-none"),
              $(".std-la-form input[name=tin_number]").val(""),
              $(".la-container-tin_number").addClass("d-none"),
              $(".std-la-form input[name=tin_number]").prop("required", !1),
              $(".std-la-form input[name=has_tin]").prop("required", !1));
  }

  function switchLayout() {
      var e = $("#la_select_client_type option:selected").val();
      switch (e) {
          case "1":
              if (document.documentElement.lang === 'ae' || document.documentElement.lang === 'ar') {
                  $(".la-label-name").html('Ø§Ø³Ù… Ø§Ù„Ø´Ø±ÙƒÙ‡<sup class="sup-size">*</sup>');
              } else {
                  $(".la-label-name").html('Company Name<sup class="sup-size">*</sup>');
              }
              $(".la-field-name-2").val(""), $(".la-container-name").removeClass("col-lg-6"), $(".la-container-name-2").addClass("d-none");
              break;
          case "3":
              if (document.documentElement.lang === 'ae' || document.documentElement.lang === 'ar') {
                  $(".la-label-name").html('Ø§Ù„Ø§Ø³Ù… Ø§Ù„ÙƒØ§Ù…Ù„ Ù„ØµØ­Ø§Ø¨ Ø§Ù„Ø­Ø³Ø§Ø¨ Ø§Ù„Ø§ÙˆÙ„\n<sup class="sup-size">*</sup>');
              } else {
                  $(".la-label-name").html('Name of 1st Individual\n<sup class="sup-size">*</sup>');
              }
              $(".la-container-name").addClass("col-lg-6"), $(".la-container-name-2").removeClass("d-none");
              break;
          case "2":
          case "4":
          default:
              if (document.documentElement.lang === 'ae' || document.documentElement.lang === 'ar') {
                  $(".la-label-name").html('Ø§Ù„Ø§Ø³Ù… Ø§Ù„ÙƒØ§Ù…Ù„<sup class="sup-size">*</sup>')
              } else {
                  $(".la-label-name").html('Name<sup class="sup-size">*</sup>')
              }
              $(".la-container-name-2").addClass("d-none"), $(".la-field-name-2").val("");
      }
      // "1" == e && "1" == $("#la_select_company option:selected").val() ?
      //     ($(".lei-input-container").removeClass("invisible"), $(".lei-input-container").addClass("visible")) :
      //     ($(".lei-input-container").removeClass("visible"), $(".lei-input-container").addClass("invisible"));
  }
  $(function() {
          // "1" == $("#la_select_company option:selected").val() && "1" == $("#la_select_client_type option:selected").val() ?
          //     ($(".lei-input-container").removeClass("invisible"), $(".lei-input-container").addClass("visible")) :
          //     ($(".lei-input-container").removeClass("visible"), $(".lei-input-container").addClass("invisible")),
              $("#la_select_company").length && alterForm_TinField(),
              $(".multibank-form #la_select_platform_version").change(function() {
                  let e = $(this).val(),
                      a = $(this).closest("form").find("select[name=platform_type]"),
                      n = $(this).closest("form").find("select[name=company]");
                  "MT5" === e
                      ?
                      (("5" !== a.val() && "ST" !== a.val()) || a.val("3"), a.find('option[value="5"]').addClass("d-none"), a.find('option[value="ST"]').addClass("d-none"), n.val("6")) :
                      "MT4" === e && (a.find('option[value="5"]').removeClass("d-none"), a.find('option[value="ST"]').removeClass("d-none"));
              });

          let platformVersionObject = $('.multibank-form #la_select_platform_version');
          if (platformVersionObject) {
              let val = platformVersionObject.val();
              let platformObject = platformVersionObject.closest('form').find('select[name=platform_type]');
              let companyObject = platformVersionObject.closest('form').find('select[name=company]');

              if (val === 'MT5') {
                  companyObject.find('option[value=1]').addClass('d-none');
                  companyObject.val(6);
                  platformObject.find('option[value="5"]').addClass('d-none');
                  platformObject.find('option[value=ST]').addClass('d-none');
              }
          }


          $("#la_select_company").change(function() {
              if("1" == $("#la_select_company option:selected").val()){
                  $("label[for='terms_conditions']").before(
                      "<label class='mex-aus-label form-check-label form-check-label'>By submitting this form you agree to the terms outlined in the <a class='text-22A0C4' href='/public_files/documents/pdf/MEX_Financial_Services_Guide_(FSG)_V0005_260619.pdf'>MEX FSG</a>, <a class='text-22A0C4' href='/public_files/documents/pdf/MEX_Product_Disclosure_Statement_(PDS)_V0005_19102020.pdf'>MEX PDS</a>, and <a class='text-22A0C4' href='/public_files/documents/pdf/MEX_Client_Agreement_(CA)_V0008_131020.pdf'>MEX Client Agreement</a>.</label>"),
                  $("label[for='terms_conditions']").parent().css("flex-direction","column")
              }else  $(".mex-aus-label").remove()

                  alterForm_TinField(),
                      // "1" == $("#la_select_company option:selected").val() && "1" == $("#la_select_client_type option:selected").val() ?
                      // ($(".lei-input-container").removeClass("invisible"), $(".lei-input-container").addClass("visible")) :
                      // ($(".lei-input-container").removeClass("visible"), $(".lei-input-container").addClass("invisible")),
                      "1" === $(this).val() ?
                      ($(this).closest("form").find('select[name=platform_version]').val("MT4"),
                          $(this).closest("form").find('select[name=platform_type] option[value="5"]').addClass("d-none"),
                          $(this).closest("form").find('select[name=platform_type] option[value="ST"]').addClass("d-none")) :
                      ($(this).closest("form").find('select[name=platform_type] option[value="5"]').removeClass("d-none"),
                          $(this).closest("form").find('select[name=platform_type] option[value="ST"]').removeClass("d-none"));
              }),
              $("#la_select_client_type").change(function() {
                  switchLayout();
              }),
              $(".browse-btn").click(function(e) {
                  var a = $(this).parent().parent().find('input[type="file"]');
                  a.off("change"),
                      a.on("change", function() {
                          var e = a.val(),
                              n = a[0].files[0].size / 1048576;
                          if (($(this).parent().find(".file-upload-error").remove(), !/(\.jpg|\.jpeg|\.png|\.doc|\.pdf|\.docx)$/i.exec(e)))
                              return $(this).parent().append('<div class="text-danger file-upload-error">Invalid file format.<br/>.jpeg/.jpg/.png/.doc/.docx/.pdf only</div>'), a.val(""), !1;
                          if (n > 5) return $(this).parent().append('<div class="text-danger file-upload-error">File size exceed 5MB</div>'), a.val(""), !1; {
                              const e = a.val().split(/\\|\//).pop(),
                                  n = e.length > 20 ? e.substr(e.length - 20) : e;
                              $(this).parent().find(".file-info").text(n);
                          }
                      }),
                      a.click();
              });
          var e = getUrlVars().ibNum;
          if (void 0 !== e) {
              var a = 1;
              switch (e.substring(0, 2)) {
                  case "88":
                      a = 1;
                      break;
                  case "66":
                      a = 3;
                      break;
                  case "33":
                      a = 6;
              }
              $('.std-la-form select[name="company"]').val(a);
          }
      }),
      $(".std-la-form input[name=has_tin]").change(function(e) {
          alterForm_TinField();
      });
  var jointAccountDocFields = {
      listJointAccountDocFields: function() {
          return ["secondary_file_id_front", "secondary_file_id_back", "secondary_file_address_proof"];
      },
      disableJointAccountDocFields: function() {
          for (var e = this.listJointAccountDocFields(), a = 0; a < e.length; a++) $("input[name=" + e[a] + "]").prop("disabled", !0);
      },
      enableJointAccountDocFields: function() {
          for (var e = this.listJointAccountDocFields(), a = 0; a < e.length; a++) $("input[name=" + e[a] + "]").removeAttr("disabled");
      },
      showJointAccountDocFields: function() {
          $(".secondary-file-upload-container").show();
      },
      hideJointAccountDocFields: function() {
          $(".secondary-file-upload-container").hide();
      },
  };

  function slider_login() {
      var e = $("#swiper-container-1").height();
      if ($(".login_Block").length > 0) {
          var a = $(window).width(),
              n = 0.1 * a;
          $(".nav-container nav").height();
          a >= 1400 ? (n = (a - 1300) / 2) : a >= 1150 ? (n = (a - 1150) / 2) : a >= 1e3 && (n = 20), $(".home_page .login_Block").css({ right: n }).fadeIn();
      }
  }

  function slider_login() {
      var e = $("#swiper-container-1").height();
      if ($(".login_Block").length > 0) {
          var a = $(window).width(),
              n = 0.1 * a;
          $(".nav-container nav").height();
          a >= 1400 ? (n = (a - 1300) / 2) : a >= 1150 ? (n = (a - 1150) / 2) : a >= 1e3 && (n = 20), $(".home_page .login_Block").css({ right: n }).fadeIn();
      }
  }
  if (
      ($(document).ready(function() {
          if ($("#regulations-global-presence").length) {
                  new Swiper("#regulations-global-presence", {
                      navigation: { nextEl: ".global-presence .swiper-button-next", prevEl: ".global-presence .swiper-button-prev" },
                      pagination: {
                          el: ".global-presence .swiper-pagination",
                          clickable: !0,
                          renderBullet: function(e, a) {
                              switch (e) {
                                  case 0:
                                      (text = "ASIC"), (img_url = "/asset/images/common/country/australia.png");
                                      break;
                                  case 1:
                                      (text = "BaFin"), (img_url = "/asset/images/common/country/germany.png");
                                      break;
                                  case 2:
                                      (text = "FMA"), (img_url = "/asset/images/common/country/austria.png");
                                      break;
                                  case 3:
                                      (text = "CNMV"), (img_url = "/asset/images/common/country/spain.png");
                                      break;
                                  case 4:
                                      (text = "DFSA"), (img_url = "/asset/images/common/country/uae.png");
                                      break;
                                  case 5:
                                      (text = "FSC"), (img_url = "/asset/images/common/country/british_virgin_islands.png");
                                      break;
                                  case 6:
                                      (text = "CIMA"), (img_url = "/asset/images/common/country/cayman_islands.png");
                                      break;
                                      // case 7:
                                      //     (text = "RAK"), (img_url = "/public_files/asset/images/common/country/uae.png");
                              }
                              return '<span class="' + a + '" data-img="' + img_url + '"><span>' + text + '</span><img src="' + img_url + '"></span>';
                          },
                      },
                      updateOnImagesReady: !0,
                      slidesPerView: 1,
                      loop: !0,
                      breakpoints: { 991: { slidesPerView: 1 } },
                      on: {
                          init: function() {
                              a(this);
                          },
                          slideChangeTransitionStart: function() {
                              a(this);
                          },
                      },
                  });

                  function e() {
                      var e = $(".regulations-bg .swiper-button-next"),
                          a = $(".regulations-bg .swiper-button-prev"),
                          n = $("#regulations-global-presence").width(),
                          t = ($(window).width() - n - 2 * e.width()) / 2;
                      $(window).width() < 767 && (t = 50), e.css({ right: t - 40 + "px" }), a.css({ left: t - 40 + "px" });
                  }

                  function a(e) {
                      var a = e.slides.eq(e.activeIndex).attr("data-img");
                      $(".global-presence.regulations-bg").css({ backgroundImage: "url(" + a + ")" });
                  }
                  $(window).resize(function() {
                          e();
                      }),
                      e();
              }
          }),
          $(function() {
              $(".platform-selector").click(function() {
                  var e = $(this).data("tab");
                  $(".tab-platform").removeClass("show").removeClass("active"),
                      setTimeout(function() {
                          $(".tab-platform").removeClass("active"), $("#" + e).addClass("active");
                      }, 150),
                      setTimeout(function() {
                          $("#" + e).addClass("show");
                      }, 300),
                      $(".platform-selector-container").removeClass("active"),
                      $(this).parent().addClass("active");
              });
          }),
          $(function() {
              slider_login(),
                  $(window).resize(function() {
                      slider_login();
                  }),
                  $("#login_Block_Modal").on("hidden.bs.modal", function(e) {
                      var a = $("#login_Block_Modal .login_Block");
                      a.remove(), $("body").append(a);
                  }),
                  $("#login_Block_Modal").on("show.bs.modal", function(e) {
                      var a = $(".login_Block");
                      a.remove(), $("#login_Block_Modal .modal-body").append(a);
                  }),
                  $(document).on("click", ".login_Block .title span", function() {
                      var e = $("." + $(this).attr("data-name"));
                      "long-form-block" == $(this).attr("data-name") ? $(".socialMedia-block .media_action_name").html("LOGIN WITH") : $(".socialMedia-block .media_action_name").html("REGISTER WITH"),
                          $(this).addClass("active").siblings().removeClass("active"),
                          e.addClass("active").siblings().removeClass("active"),
                          slider_login();
                  });
          }),
          void 0 === whereToGoItemLabel)
  )
      var whereToGoItemLabel = {
          ic_our_milestones_label: "Our Milestones",
          ic_our_regulations_label: "Our Regulations",
          ic_security_of_funds_label: "Security of Funds",
          ic_why_multibank_label: "Why Multibank",
          ic_accounts_funding_label: "Accounts and Funding",
          ic_bonus_programs_label: "Bonus Programs",
          ic_bonus_programs_for_ibs_label: "Bonus Programs for IBs",
          ic_Bonus_Programs_for_Individual_Clients_label: "Bonus Programs for Individual Clients",
          ic_compare_our_trading_platforms_label: "Compare our Trading Platforms",
          ic_download_mt4_label: "Download MT4",
          ic_our_products_label: "Our Products",
          ic_trading_tools_label: "Trading Tools",
          ic_partnership_programs_label: "Partnership Programs",
          ic_become_an_ib_label: "Become an IB",
          ic_live_chat_support_label: "Live Chat Support",
          ic_mymultibank_account_panel_label: "MyMultiBank Account Panel",
          ic_Call_Our_24_7_Hotline_label: "Call Our 24/5 Hotline",
          ic_forex_spreads_label: "View Forex Spreads",
          ic_global_offices_label: "Our Global Offices",
          ic_awards_label: "Our Awards",
      };
  var whereToGoItem = {
      ic_our_milestones: '<a href="about/milestones"><span class="ico-ic_our_milestones"> </span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_our_milestones_label + "</div></a>",
      ic_our_regulations: '<a href="about/regulations"><span class="ico-ic_our_regulations">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_our_regulations_label + "</div></a>",
      ic_security_of_funds: '<a href="about/security-of-funds"><span class="ico-ic_security_of_funds">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_security_of_funds_label + "</div></a>",
      ic_why_multibank: '<a href="about/why-multibank-group"><span class="ico-ic_why_multibank">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_why_multibank_label + "</div></a>",
      ic_accounts_funding: '<a href="account"><span class="ico-ic_accounts_funding">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_accounts_funding_label + "</div></a>",
      ic_bonus_programs: '<a href="account/bonus"><span class="ico-ic_bonus_programs">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_bonus_programs_label + "</div></a>",
      ic_bonus_programs_for_ibs: '<a href="account/bonus"><span class="ico-ic_bonus_programs_for_ibs"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_bonus_programs_for_ibs_label + "</div></a>",
      ic_Bonus_Programs_for_Individual_Clients: '<a href="account/bonus"><span class="ico-ic_Bonus_Programs_for_Individual_Clients"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_Bonus_Programs_for_Individual_Clients_label + "</div></a>",
      ic_compare_our_trading_platforms: '<a href="platforms/compare-platforms"><span class="ico-ic_compare_our_trading_platforms"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_compare_our_trading_platforms_label + "</div></a>",
      ic_download_mt4: '<a href="platforms/download-center"><span class="ico-ic_download_mt4">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_download_mt4_label + "</div></a>",
      ic_our_products: '<a href="products"><span class="ico-ic_our_products">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_our_products_label + "</div></a>",
      ic_trading_tools: '<a href="tools"><span class="ico-ic_trading_tools">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_trading_tools_label + "</div></a>",
      ic_partnership_programs: '<a href="partnership"><span class="ico-ic_partnership_programs">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_partnership_programs_label + "</div></a>",
      ic_become_an_ib: '<a href="partnership/introducing-brokers#introducing-brokers-form"><span class="ico-ic_become_an_ib">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_become_an_ib_label + "</div></a>",
      ic_live_chat_support: '<a href="/#" onclick="LC_API.open_chat_window();return false;"><span class="ico-ic_live_chat_support">\x3c!-- --\x3e</span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_live_chat_support_label + "</div></a>",
      ic_mymultibank_account_panel: '<a href="https://my.multibankfx.com" target="_blank"><span class="ico-ic_mymultibank_account_panel"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_mymultibank_account_panel_label + "</div></a>",
      ic_Call_Our_24_7_Hotline: '<a href="contact"><span class="ico-ic_Call_Our_24_7_Hotline"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_Call_Our_24_7_Hotline_label + "</div></a>",
      ic_forex_spreads: '<a href="products/forex"><span class="ico-ic_forex_spreads"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_forex_spreads_label + "</div></a>",
      ic_global_offices: '<a href="about/global-presence"><span class="ico-ic_global_offices"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_global_offices_label + "</div></a>",
      ic_awards: '<a href="about/awards"><span class="ico-ic_awards"></span><div class="mex-content mex-clamp-3">' + whereToGoItemLabel.ic_awards_label + "</div></a>",
      injectIcons: function(e, a) {
          var n = "",
              t = "";
          for ($(e).hide(), i = 0; i < a.length; i++)(t = a[i]), this.hasOwnProperty(t) && (n += "<li>" + this[t] + "</li>");
          $(e).html(n), $(e).show();
      },
  };

  function openWithdrawalForm(e, a, n) {
      $(".withdrawal-form-modal").addClass("show"), $(".withdrawal-form-modal").show(), $("#withdrawal_" + e + "_form").removeClass("d-none"), $("body").css("overflow", "hidden");
  }

  function closeWithdrawalForm() {
      $(".withdrawal-form-modal").removeClass("show"), $(".withdrawal-form-modal").hide(), $(".withdrawal-form-modal form").addClass("d-none"), $("body").css("overflow", "initial");
  }

  function update_amount_value(e) {
      $(".deposit_amount_value").val(e), $(".payment_form").find('input[name="amount"]').val(e), $(".deposit_amount_value_text").html(e);
  }

  function openRedirectionOption() {
      $(".paytrust-modalbox-container").css("display", "block");
  }

  function closeModalBox() {
      $(".paytrust-modalbox-container").css("display", "none");
  }

  function toggleWMGModal(e) {
      $("#wmg_modal_box_" + e).show();
  }

  function closeWMGModal(e) {
      $("#wmg_modal_box_" + e).hide();
  }
  $(function() {
          $("#call_back_footer_form, #contact_us_form, #career_apply_job").find(".send-code-container").removeClass("col-md-2").addClass("col-md-6"),
              $("#call_back_footer_form, #contact_us_form, #career_apply_job").find(".sms-code-container").removeClass("col-md-4").addClass("col-md-6"),
              $("#call_back_footer_form .cb-partnership > label , #contact_us_form .cb-partnership > label").remove(),
              $("#contact_us_form .cb-partership input").first().attr("checked", "checked"),
              $("#call_back_footer_form .cb-partnership label , #contact_us_form .cb-partnership label").addClass("mb-0 ml-1"),
              $("#career_apply_job .send-verification-code-btn").css("width", "100%");
      }),
      $(function() {
          var e = $("#withdrawal_selection_form").validate();
          if (null != e) {
              e.destroy();
              var a,
                  n = ["neteller", "skrill", "fasapay", "bank_transfer", "credit_card", "paytrust", "perfectmoney", "paymentasia"],
                  t = ["neteller", "skrill", "bank_transfer", "credit_card", "paytrust", "perfectmoney", "fxbit", "globepay", "thunderxpay", "paymentasia"],
                  i = ["neteller", "skrill", "bank_transfer", "credit_card", "paytrust", "perfectmoney", "fxbit"];
              "vn" === document.documentElement.lang && (i.push("ngan_luong"), t.push("ngan_luong"));
              var o = getUrlVars().r;
              getUrlVars().gateway;
              switch (o) {
                  case "1":
                      a = n;
                      break;
                  case "3":
                      a = t;
                      break;
                  case "6":
                      a = i;
                      break;
                  default:
                      a = n;
              }
              $(".payment_method option").each(function() {
                      -1 == a.indexOf($(this).data("method")) && $(this).remove();
                  }),
                  $(".form-icon").each(function() {
                      -1 == a.indexOf($(this).data("method")) && $(this).remove();
                  }),
                  $("#withdrawal_selection_form .deposit_table td").click(function() {
                      $("#withdrawal_selection_form .deposit_table td").each(function() {
                              $(this).removeClass("active");
                          }),
                          $(this).addClass("active"),
                          $(this).find("input").prop("checked", !0),
                          update_amount_value($(this).find("input").val());
                  }),
                  $(".withdrawal-form-modal .modal-bg").click(function() {
                      closeWithdrawalForm();
                  }),
                  $("#withdrawal_selection_form .deposit_amount_value").change(function() {
                      return update_amount_value($(this).val()), !1;
                  }),
                  $("#withdrawal_selection_form .deposit_submit").click(function() {
                      openWithdrawalForm($(".payment_method option:selected").val(), $(".deposit_amount_value").val(), $(".currency_type option:selected").val());
                  });
          }
      }),
      $(document).ready(function() {

          setTimeout(function() {
                  $('.swiper-container').removeClass('invisible');
                  $('.swiper-container').addClass('visible');
                  $('.hero-container').removeClass('invisible');
                  $('.hero-container').addClass('visible');
                  $('.top-btn-1').css('animation', 'button-top-animation 0.5s ease-in');
                  $('.top-btn-2').css('animation', 'button-top-animation 0.5s ease-in');
                  $('.top-btn-3').css('animation', 'button-top-animation 0.5s ease-in');
                  $('.swiper-zoom-container div').css('animation', 'button-animation 1.5s');
              }, 500);


          $('.advantages-section .bg-arrow_w_left').click(function(){
              advantageSlider.slick('slickPrev');
              $('.advantages-section .bg-arrow_w_right').removeClass('disabled');
              if($(' .advantages-section .slick-current').data().slickIndex===0){

                  $('.advantages-section .bg-arrow_w_left').addClass('disabled');
              }
          });


          $('.advantages-section .bg-arrow_w_right').click(function(){
              advantageSlider.slick('slickNext');
              $('.advantages-section .bg-arrow_w_left').removeClass('disabled');
               if($('.advantages-section .slick-current').data().slickIndex === 3 && window.innerWidth > 1008){

                  $('.advantages-section .bg-arrow_w_right').addClass('disabled');
              }
              else if($('.advantages-section .slick-current').data().slickIndex === 5 && window.innerWidth < 768){

                  $('.advantages-section .bg-arrow_w_right').addClass('disabled');
              }
          });


          $('.section-regulations .bg-arrow_w_left').click(function(){
              regulationsSlider.slick('slickPrev');
              $('.bg-arrow_w_right').removeClass('disabled');
              if($('.section-regulations .slick-current').data().slickIndex===0){

                  $('.section-regulations .bg-arrow_w_left').addClass('disabled');
              }
          });

          $('.section-regulations .bg-arrow_w_right').click(function(){
              regulationsSlider.slick('slickNext');
              $('.section-regulations .bg-arrow_w_left').removeClass('disabled');
               if($('.section-regulations .slick-current').data().slickIndex === 3 && window.innerWidth > 768 && window.innerWidth < 1008){
                  $('.section-regulations .bg-arrow_w_right').addClass('disabled');
              }
              else if($('.section-regulations .slick-current').data().slickIndex === 4 && window.innerWidth < 768){

                  $('.section-regulations .bg-arrow_w_right').addClass('disabled');
              }
          });

          if(window.innerWidth > 767){
              $(".section-gp .gp-img").attr('src', '/asset/images/home/global-presence-map-202010-0.png');
          }
          else{
              $(".section-gp .gp-img").attr('src', '/asset/images/home/global-presence-map-202010-m.png');
          }

  //         partnershipSlider.on('afterChange', function(event, slick, currentSlide){
  //             let index = currentSlide;
  //             let element = ".dots-wrapper li[data-index="+index+"]";
  //             $(".dots-wrapper li").css("background", "#BB914A");
  //             $(element).css("background", "#fff");
  // });

          let prevSlideIndex = 0;
          let currSlideIndex = 0;
          function redirect(that){
              if(that.parent().hasClass('swiper-slide-active') && prevSlideIndex === currSlideIndex){
              let linkHref = that.attr('href');
              window.location.href = linkHref;
              }
          }

          let awardClickCount1 = 0;
          $('.swiper-slide a,.swiper-slide.swiper-slide-duplicate a').on('click',function(){
                 if($(this).parent().data().swiperSlideIndex === 0)
                 {
                     prevSlideIndex = 0;
                     currSlideIndex = 0;
                     redirect($(this));
                 }
                  if(awardClickCount1 === 0){
                      prevSlideIndex = $(this).parent().data().swiperSlideIndex;
                      awardClickCount1++;
                      return false;
                   }
                   else if(awardClickCount1 === 1 && $(this).parent().hasClass('swiper-slide-active')){
                       awardClickCount1--;
                       currSlideIndex = $(this).parent().data().swiperSlideIndex;
                       redirect($(this));
                       return false;
                   }
          })

          $(".section-gp .gp-img").click(function(){
              $('.section-gp .hover-img-div').show();
              $(".section-gp #full-img").attr("src", $(this).attr("src"));
              $('.section-gp .cross-icon').click(function(){
                  $('.section-gp .hover-img-div').hide();
              })
          })

          $(".dots-wrapper ul li").click(function(){
              $(".dots-wrapper ul li").css("background","#BB914A");
              $(this).css("background","#fff");
              const index = $(this).data().index;
              partnershipSlider.slick('slickGoTo', index);

          })
  //sort select option
  var sel = $('#phone-list');
  var selected = sel.val(); // cache selected value, before reordering
  var opts_list = sel.find('option');
  var asset = '/asset/images/common/country/flag/';
  opts_list.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
  sel.html('').append(opts_list);
  sel.val(selected);

          const list = [/*{
              country_name: "Austria",
              country_sn: "AT",
              Phone: "+1 646-568-9702",
              img: "/public_files/asset/images/common/country/austria.png"
          }, {
              country_name: "Portugal",
              country_sn: "PT",
              Phone: "+351 800 180 288",
              img: "/public_files/asset/images/common/country/portugal.png"
          }, {
              country_name: "Cyprus",
              country_sn: "CY",
              Phone: "+357 23 030208",
              img: "/public_files/asset/images/common/country/cyprus.png"
          }, {
              country_name: "Ireland",
              country_sn: "IE",
              Phone: "+1 646-568-9702",
              img: "/public_files/asset/images/common/country/ireland.png"
          }, {
              country_name: "Netherlands",
              country_sn: "NL",
              Phone: "+44 330 808 4315",
              img: "/public_files/asset/images/common/country/netherlands.png"
          }, {
              country_name: "Sweden",
              country_sn: "SE",
              Phone: "+44 330 808 4315",
              img: "/public_files/asset/images/common/country/sweden.png"
          }, {
              country_name: "Finland",
              country_sn: "FI",
              Phone: "+1 646-568-9702",
              img: "/public_files/asset/images/common/country/finland.png"
          }, {
              country_name: "Romania",
              country_sn: "RO",
              Phone: "+44 330 808 4315",
              img: "/public_files/asset/images/common/country/romania.png"
          }, {
              country_name: "Germany",
              country_sn: "DE",
              Phone: "+1 646-568-9702",
              img: "/public_files/asset/images/common/country/germany.png"
          }, */{
              country_name: "Australia",
              country_sn: "AU",
              Phone: "+1 646-568-9702",
              img: asset+'au.png'
          }, {
              country_name: "China",
              country_sn: "CN",
              Phone: "+400 120 8619",
              img: asset+'cn.png'
          }, {
              country_name: "South Korea",
              country_sn: "KR",
              Phone: "+1 646-568-9702",
              img: asset+'kr.png'
          }, {
              country_name: "Malaysia",
              country_sn: "MY",
              Phone: "+60126508715",
              img: asset+'my.png'
          }, {
              country_name: "Taiwan",
              country_sn: "TW",
              Phone: "+1 646-568-9702",
              img: asset+'tw.png'
          }, {
              country_name: "Thailand",
              country_sn: "TH",
              Phone: "+1 646-568-9702",
              img: asset+'th.png'
          }, {
              country_name: "Indonesia",
              country_sn: "ID",
              Phone: "+1 646-568-9702",
              img: asset+'id.png'
          }, {
              country_name: "UAE",
              country_sn: "AE",
              Phone: "800 685842265",
              img: asset+'ae.png'
          }, {
              country_name: "Bahrain",
              country_sn: "BH",
              Phone: "+1 833-291-1788",
              img: asset+'bh.png'
          }, {
              country_name: "South Africa",
              country_sn: "ZA",
              Phone: "+27 80 001 4862",
              img: asset+'za.png'
          }, {
              country_name: "USA",
              country_sn: "US",
              Phone: "+1 833 291 1788",
              img: asset+'us.png'
          }, {
              country_name: "Mexico",
              country_sn: "MX",
              Phone: "+52181277226660",
              img: asset+'mx.png'
          }, {
              country_name: "Canada",
              country_sn: "CA",
              Phone: "1 437-887-1634",
              img: asset+'ca.png'
          }, {
              country_name: "Cayman Islands",
              country_sn: "KY",
              Phone: "+1 833 291 1788",
              img: asset+'ky.png'
          }, {
              country_name: "Argentina",
              country_sn: "AR",
              Phone: "+44 330 808 4315",
              img: asset+'ar.png'
          }, {
              country_name: "Brazil",
              country_sn: "BR",
              Phone: "+55 800 878 4081",
              img: asset+'br.png'
          }, {
              country_name: "Chile",
              country_sn: "CL",
              Phone: "+56 800 231 014",
              img: asset+'cl.png'
          }, {
              country_name: "Colombia",
              country_sn: "CO",
              Phone: "+52 1 81 2722 6660",
              img: asset+'co.png'
          }, {
              country_name: "Switzerland",
              country_sn: "CH",
              Phone: "+44 330 808 4315",
              img: asset+'ch.png'
          },/* {
              country_name: "France",
              country_sn: "FR",
              Phone: "+1 646-568-9702",
              img: "/public_files/asset/images/common/country/france.png"
          }, {
              country_name: "Greece",
              country_sn: "GR",
              Phone: "+44 330 808 4315",
              img: "/public_files/asset/images/common/country/greece.png"
          }, {
              country_name: "Denmark",
              country_sn: "DK",
              Phone: "+1 646-568-9702",
              img: "/public_files/asset/images/common/country/denmark.png"
          }, {
              country_name: "Poland",
              country_sn: "PL",
              Phone: "+48 800 088 020",
              img: "/public_files/asset/images/common/country/poland.png"
          }, {
              country_name: "Slovenia",
              country_sn: "SR",
              Phone: "+44 330 808 4315",
              img: "/public_files/asset/images/common/country/slovenia.png"
          }, {
              country_name: "Hungary",
              country_sn: "HU",
              Phone: "+36 80 088 388",
              img: "/public_files/asset/images/common/country/hungary.png"
          }, */{
              country_name: "Pakistan",
              country_sn: "PK",
              Phone: "+92 80090033079",
              img: asset+'pk.png'
          }, {
              country_name: "Philippines",
              country_sn: "PH",
              Phone: "+1 6465689702",
              img: asset+'ph.png'
          }, {
              country_name: "Vietnam",
              country_sn: "VN",
              Phone: "+842877776565",
              img: asset+'vn.png'
          }, /*{
              country_name: "Spain",
              country_sn: "ES",
              Phone: "+34 900 861 368",
              img: "/public_files/asset/images/common/country/spain.png"
          }, */{
              country_name: "Kazakhstan",
              country_sn: "KAZ",
              Phone: "+7 800 080-50-67",
              img: asset+'kz.png'
          }, /*{
              country_name: "Lithuania",
              country_sn: "LT",
              Phone: "+370 800 00 488",
              img: "/public_files/asset/images/common/country/lithuania.png"
          }, {
              country_name: "Estonia",
              country_sn: "EE",
              Phone: "+372 8002 015",
              img: "/public_files/asset/images/common/country/estonia.png"
          }, {
              country_name: "Latvia",
              country_sn: "LV",
              Phone: "+371 80 205 191",
              img: "/public_files/asset/images/common/country/latvia.png"
          }, {
              country_name: "Czech Republic",
              country_sn: "CZ",
              Phone: "+420 800 012 031",
              img: "/public_files/asset/images/common/country/czech-republic.png"
          }, {
              country_name: "Slovakia",
              country_sn: "CZ",
              Phone: "+421 800 601 526",
              img: "/public_files/asset/images/common/country/slovakia.png"
          }, {
              country_name: "Croatia",
              country_sn: "HR",
              Phone: "+385 800 200 373",
              img: "/public_files/asset/images/common/country/croatia.png"
          },*/ {
              country_name: "India",
              country_sn: "IN",
              Phone: "+1 833-291-1788",
              img: asset+'in.png'
          }, {
              country_name: "Russia",
              country_sn: "RU",
              Phone: "+7 800 301-20-53",
              img: asset+'ru.png'
          }, {
              country_name: "Peru",
              country_sn: "PE",
              Phone: "+51 800 78106",
              img: asset+'pe.png'
          }, {
              country_name: "Ecuador",
              country_sn: "EC",
              Phone: "+593 1800 001 354",
              img: asset+'ec.png'
          }, {
              country_name: "Ukraine",
              country_sn: "UA",
              Phone: "+380 800 800 163",
              img: asset+'ua.png'
          }, /*{
              country_name: "Belgium",
              country_sn: "BE",
              Phone: "+32 800 54 871",
              img: "/public_files/asset/images/common/country/flag-belgium.png"
          },*/ {
              country_name: "Afghanistan",
              country_sn: "AF",
              Phone: "+1 833-291-1788",
              img: asset+'af.png'
          }, {
              country_name: "Bangladesh",
              country_sn: "BD",
              Phone: "+1 833-291-1788",
              img: asset+'bd.png'
          }, {
              country_name: "Egypt",
              country_sn: "EG",
              Phone: "+1 833-291-1788",
              img: asset+'eg.png'
          }, {
              country_name: "Iran",
              country_sn: "IR",
              Phone: "+1 833-291-1788",
              img: asset+'ir.png'
          }, {
              country_name: "Kuwait",
              country_sn: "KW",
              Phone: "+1 833-291-1788",
              img: asset+'kw.png'
          }, {
              country_name: "Oman",
              country_sn: "OM",
              Phone: "+1 833-291-1788",
              img: asset+'om.png'
          }, {
              country_name: "Qatar",
              country_sn: "QA",
              Phone: "+1 833-291-1788",
              img: asset+'qa.png'
          }, {
              country_name: "Saudi Arabia",
              country_sn: "SA",
              Phone: "+1 833-291-1788",
              img: asset+'sa.png'
          }, {
              country_name: "Sri Lanka",
              country_sn: "LK",
              Phone: "+1 833-291-1788",
              img: asset+'lk.png'
          },{
              country_name: "Nigeria",
              country_sn: "NG",
              Phone: "+2349095001480",
              img: asset+'ng.png'
          }];

          let countCode = $('meta[name="c_code"]').attr("content");
          let currCountry = list.filter(country=>country.country_sn.toLowerCase() == countCode.toLowerCase())[0];
          if(currCountry && Object.keys(currCountry).length > 0){
              $("#header-pn").html(currCountry['country_sn']+': '+currCountry['Phone']);
              $("#header-pn").attr('href', 'tel:'+currCountry['Phone']);
              $('#country-name').html(currCountry['country_sn']+': '+currCountry['Phone']);
              $('#country-name').attr('href', 'tel:'+currCountry['Phone']);
              $('#country-data a img').attr('src', currCountry['img']);
              $("phone-list").val(currCountry['country_sn']);
              $(".get-a-all-btn.call-btn").attr('href', 'tel:'+currCountry['Phone']);
          }
          else{
              $("#header-pn").html('USA:  +1 646 568 9702');
              $("#header-pn").attr('href','tel: +1 646 568 9702');
              $(".get-a-all-btn.call-btn").attr('href','tel: +1 646 568 9702');
          }
          // Contact us contact list filter
          $('#phone-list').change(function() {
              const selectedCountry = $(this).val().toLowerCase();
              const filteredCountry = list.filter(country => country.country_name.toLowerCase() === selectedCountry)[0];
              $('#country-data a').attr('href', 'tel:' + filteredCountry['Phone']);
              $('#country-data a img').attr('src', filteredCountry['img']);
              $('#country-data a img').attr('slt', filteredCountry['country_name']);
              $('#country-name').html(filteredCountry['country_name'] + ': ');
              $('#country-phone').html(filteredCountry['Phone']);
          })
          // Contact us contact list filter



          $('.contact-submit, .mb-form-btn-submit').wrap('<div class="mex-form-item col-12 d-flex justify-content-md-end justify-content-center"></div>');


          // email modal js
          $('.email-us-tg').click(function(e) {
              e.preventDefault();
              $('.modal-box__email-us').addClass('show');
          });
          $('.modal-box__email-us .btn-modal-close').click(function(e) {
              e.preventDefault();
              $('.modal-box__email-us').removeClass('show');
          });

          $('.slide-bar-toggle').on('click', function() {
              $('.slidebar-parent').slideToggle("fast");
              $('.slidebar-m').slideToggle("slow");
          });

         let menu = document.querySelector('.menu');
        if(menu !== null){
          const btn = menu.querySelector('.nav-tgl');
          const listMob = document.getElementById('mob-ul');
          btn.addEventListener('click', evt => {
              menu.classList.toggle('active');
              $('.nav-tgl').css('background', '#efefef');
              if ($('.menu').hasClass('active')) {
                  $('.nav-tgl').addClass('nav-tgl-grey');
                  $('.nav-tgl').css('height', '45px');
                  $('.nav-tgl > span').addClass('bgCol');
                  $('body').css('overflow-y', 'hidden');
                  setTimeout(function() {
                      $('#mob-ul').css("display", "block");
                  }, 300);
              } else {
                  $('.nav-tgl').removeClass('nav-tgl-grey');
                  $('.nav-tgl ').css('background', 'transparent');
                  $('.nav-tgl > span').removeClass('bgCol');
                  $('body').css('overflow-y', 'auto');
                  $('#mob-ul').css("display", "none");

              }
          });
  }
          $(".nav-menu-hamburger").click(function() {
              $(".nav-menu-mobile").animate({ width: '100vw', opacity: '1', height: '100vh' }, 1500);
          })

          $('.home-banner-title1').show(100);
          $('.home-banner-title2').show(100);
          $('.lang-menu').click(() => {
              $('.lang-menu-dropdown').toggle();
              $('.nav-menu').hide();
          });

      }),
      $(function() {
          if (document.getElementById("leaderboard")) {
              let e = new Date("2020-01-05T22:00:00Z").getTime();
              new Date().getTime() >= e ? $("#leaderboard").show() : $("#leaderboard").hide();
          }
      });
  $(window).scroll(function() {
      var scrollY = $(document).scrollTop();
      if (scrollY > 450) {
          $('.top-btn-1').removeClass('d-none');
          $('.top-btn-1').addClass('d-flex');
          $('.top-btn-1').css('transition', 'all ease-in-out 0.5s');
          $('.top-btn-2').removeClass('d-none');
          $('.top-btn-2').addClass('d-flex');
          $('.top-btn-3').removeClass('d-none');
          $('.top-btn-3').addClass('d-flex');
      } else {
          $('.top-btn-1').addClass('d-none');
          $('.top-btn-1').removeClass('d-flex');
          $('.top-btn-2').addClass('d-none');
          $('.top-btn-2').removeClass('d-flex');
           $('.top-btn-3').addClass('d-none');
          $('.top-btn-3').removeClass('d-flex');
      }
  })


  //ES redirection popup

  $(function(){
      if($('meta[name="c_code"]').attr("content") == 'ES'){
          $(".modal-box-direction").show();
          let url = window.location.href;
          let urlParams = url.split("https://multibankfx.com/");
           var str = urlParams[1];
            var newUrl = "";
           if(str.includes('es')){
          newUrl = str.replace(/es\//g, "");
           }
           else if(str.includes('fr')){
               newUrl = str.replace(/fr\//g, "");
           }
           else if(str.includes('ru')){
               newUrl = str.replace(/ru\//g, "");
           }
           else if(str.includes('id')){
               newUrl = str.replace(/id\//g, "");
           }
           else if(str.includes('vi')){
               newUrl = str.replace(/vi\//g, "");
           }
           else if(str.includes('en')){
               newUrl = str.replace(/en\//g, "");
           }
           else if(str.includes('th')){
               newUrl = str.replace(/th\//g, "");
           }
           else if(str.includes('ar')){
               newUrl = str.replace(/ar\//g, "");
           }
           else {
               newUrl = str.replace(/ms\//g, "");
           }
           let finalUrl="https://mexgroup.com/es/"+newUrl;

          $(".test-2").attr("href",finalUrl);
          $(".es-option").click(function(){
              $(".eng-content").hide();
              $(".es-content").show();
              $(".es-option").addClass("active");
              $(".en-option").removeClass("active");

          });
          $(".en-option").click(function(){
              $(".eng-content").show();
              $(".es-content").hide();
              $(".en-option").addClass("active");
              $(".es-option").removeClass("active");

          });

      } });

      $('.form-live .claim-bonus-cs-form .multibank-form .next-btn').html('CREATE ACCOUNT');
      $('.account-live .claim-bonus-la-form .multibank-form .next-btn').html('START TRADING');

          $('.form-live .claim-bonus-cs-form .multibank-form .next-btn').click(function() {
              $('.location-text').text($("input[placeholder='Full Name']").val()); // i am putting value from input to the paragraph
              $('.email-user').text($("input[placeholder='Email']").val());
              $('.phone-user').text($("input[type='phone']").val());
          });

          $(document).ready(function() {
              let btnGreen = $('.form-live .claim-bonus-cs-form .multibank-form button');
              if ((btnGreen).hasClass('btn-gold')) {
                  btnGreen.addClass('next-btn').removeClass('btn-gold');
              }
              let btnGreen2 = $('.account-live .claim-bonus-la-form .multibank-form button');
              if ((btnGreen2).hasClass('btn-gold')) {
                  btnGreen2.addClass('next-btn').removeClass('btn-gold');
              }
          });
