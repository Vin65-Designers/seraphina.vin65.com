var v65 = {
	global : {
		init : function(){
			v65.global.addButtonListener();
			v65.global.addToCartListener();
			v65.global.continueShopping();
			v65.global.mainMenuHover();
			v65.global.mobileMenu();
		},
		addButtonListener : function(){
			if(document.addEventListener){
				document.addEventListener("touchstart", function(){}, true);
			}
		},
		addToCartListener : function(){
			$("[v65js=addToCart]").on("submit",function(){
				v65.cookies.createCookie("continueShoppingURL", window.location.href);
			});
		},
		continueShopping : function(){
			if(v65.cookies.readCookie("continueShoppingURL") !== null){
				$(".v65-cartCheckOutButtons a.linkAltBtn, #v65-checkCartSummaryMoreOptions a:contains('Continue shopping')").attr("href", v65.cookies.readCookie("continueShoppingURL"));
			}
		},
		mainMenuHover : function(){
			$(".mainMenu ul li ul li").hover(function(){
				$(this).parent().parent().children("a").toggleClass("hover");
			});

			if($('.mainMenu ul li ul').length > 0){
    			$('.mainMenu ul li ul').parent().addClass('hasDropdown');
			}

			if($(window).width() > 767){
				$( '.mainMenu ul li' ).hover(
				    function(){
				        $(this).children('ul').stop().slideDown(200);
				    },
				    function(){
				        $(this).children('ul').stop().slideUp(200);
				    }
				);
			}	
		},
		mobileMenu : function(){
			$(".mobileMenu").click(function(){
				$('body').toggleClass('mobileBody');
				$('.mainMenu').toggleClass('menuOpen');
				return false;	
			});

			// Close cart when opening menu
			$('.icon-mobile').click(function(){
			  if(!$('.mainMenu').hasClass('menuOpen') && $('#v65-modalCartDropdown:visible')){
			   	vin65.cart.hideCart();
				}
			});
			// Close menu when opening cart
			$('body').click(function(e){
				if($(e.target).attr('id') === "v65-toggleModalCart"){
			    if($('.mainMenu').hasClass('menuOpen')){
			   		$('body').toggleClass('mobileBody');
			      $('.mainMenu').removeClass('menuOpen');
					}
				}
			});
		}
	},
	cookies : {
		createCookie : function(name,value,days) {
			var expires = "";

			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}

			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		eraseCookie : function(name) {
			createCookie(name,"",-1);
		}
	},
	home : {
		initPhotoGallery : function(){
			if($("#slider").length){
				$("#slider").v65PhotoGallery({
					galleryId : "964891e4-a231-7b8c-5b46-2cc64a607476"
				});
			}
		}
	},
	page : {
		init : function(){
			v65.page.initPhotoGallery();
			v65.page.productGroupRowClear();
			v65.page.scrollToBottom();
			v65.page.scrollToTop();
		},
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					galleryHeight : null, // This value is translated to the set height of the gallery and will change the photogallery height
					galleryWidth : null, // This value is translated to the set width of the gallery and will change the photogallery width
					/*
						Uncomment the code below if you want to change how the photo gallery is displayed.
						arrows: true, //Show the arrow navigation
						autoplay: false, //Does the carousel autoplay or not
						autoplaySpeed: 3000,, // Adjust the transition speed between images. Value is in milliseconds
						centerMode: false, //Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
            centerPadding: '50px', //Side padding when in center mode (px or %)
						dots: true, //Show the dot navigation for each image
						fade: false, //Add a fade effect between image transitions
            slidesToShow: 1, //How may slides to show at once
						slidesToScroll: 1 //How many slides to scroll at once
					*/
				});
			}
		},
		productGroupRowClear : function(){
			if($(".v65-productGroup").length){
				for(var i = 1; i <= $(".v65-productGroup-product").length; i++){
					if(i % 2 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-2Up-rowClear"></div>');
					} else if (i % 3 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-3Up-rowClear"></div>');
					}
				}
			}
		},
		scrollToBottom : function(){
			$('.footerMenuLink').click(function() {
				$("html, body").animate({ scrollTop: ($("a[name='footerMenu']").offset().top - 20) }, 400);
				return false;
			});
		},
		scrollToTop : function(){
			$(window).scroll(function() {
				if($(document).scrollTop() > 150 && $(window).width() < 580){
					$(".backToTop").css("display", "block");
					$('.v65-productAddToCart-drilldown').addClass('v65-productAddToCart-drilldownActivate');
					$("footer").css("margin-bottom", $('.v65-productAddToCart-drilldownActivate').outerHeight())

				} else{
					$(".backToTop").css("display", "none");
					$('.v65-productAddToCart-drilldown').removeClass('v65-productAddToCart-drilldownActivate');
					$("footer").removeAttr('style');
				}
			});

			$('.backToTop').click(function() {
				$("html, body").animate({ scrollTop: 0 }, 400);
				return false;
			});
		}
	}
}

;(function($,undefined){
	$.fn.v65PhotoGallery = function(options){
		var defaults = {
			galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),
			galleryHeight : null,
			galleryWidth : null,
			timestamp : "&timestamp="+ new Date().getTime()
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("").css({
			"height":settings.galleryHeight,
			"width":settings.galleryWidth,
			"overflow":"hidden"
		});
		$.ajax({
	    		type: "GET",
			url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,
			dataType: "xml",
			success: function(xml) {
				var slides = "";
				$(xml).find('img').each(function() {
					var location = '/assets/images/photogallery/images/large/',
						photo = $(this).attr('src'),
						caption = $(this).attr('caption'),
						title = $(this).attr('title'),
						url = $(this).attr('link');
						if (url === undefined) {
						var	image = '<img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/>';
						} else{
						var	image = '<a href="'+url+'"><img alt="'+title+'" src="'+location+photo+'" title="'+caption+'"/></a>';
						}
						slides += image;
				});
				gallery.append(slides);
			},
			complete: function(){
	   			gallery.slick({
						arrows: settings.arrows, //Show the arrow navigation
						autoplay: settings.autoplay, //Does the carousel autoplay or not
						autoplaySpeed: settings.autoplaySpeed, // Adjust the transition speed between images. Value is in milliseconds
						centerMode: settings.centerMode, //Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
            centerPadding: settings.centerPadding, //Side padding when in center mode (px or %)
						dots: settings.dots, //Show the dot navigation for each image
						fade: settings.fade, //Add a fade effect between image transitions
            slidesToShow: settings.slidesToShow, //How may slides to show at once
						slidesToScroll: settings.slidesToScroll //How many slides to scroll at once
				});
				$('#pagePhotoGallery .slick-slide img').each(function(){ 
					if ($(this).attr('title')){
						var slideCaption = $(this).attr('title');
						$(this).parent('div').addClass('has-caption').append('<div class="slidecaption">' + slideCaption + '</div>');
					}
				});
	   		}
	   	});
	}
})(jQuery);

v65.global.init();
v65.home.initPhotoGallery();
v65.page.init();