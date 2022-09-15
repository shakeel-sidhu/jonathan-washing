//  Banner Slider
$('.owl-carousel.banner-slider').owlCarousel({
    items: 1,
    dots: false,
    nav:true,
    loop: true,
    center: true,
    animateOut: 'fadeOut',
    autoplay:true,
    margin: 0,
    URLhashListener: true,
    autoplayHoverPause: false,
    startPosition: 'URLHash'
  });
   
  // icon rotate
  
function myFunction() {

  document.getElementById('the-button').addEventListener('click', function() {
    var icon = this.querySelector('.right i.fa');
    icon.classList.toggle('rotate');
});

}

// counter sec
var counted = 0;
$(window).scroll(function() {
      
var oTop = $('#counter').offset().top - window.innerHeight;
if (counted == 0 && $(window).scrollTop() > oTop) {
$('.count').each(function() {
var $this = $(this),
countTo = $this.attr('data-count');
$({
countNum: $this.text()
}).animate({
  countNum: countTo
},
      
{
      
  duration: 2000,
  easing: 'swing',
  step: function() {
  $this.text(Math.floor(this.countNum));
},
  complete: function() {
  $this.text(this.countNum);
}
      
});
});
  counted = 1;
}
      
});

// testimonial
$('.owl-carousel.hatch-testimonial').owlCarousel({
loop:true,
margin:10,
nav:true,
autoplay:true,
dots:false,
responsive:{
0:{
  items:1
},
600:{
  items:1
},
1000:{
  items:1
}
} 
})

//team testimonial
$('.owl-carousel.team-testimonial').owlCarousel({
  loop:false,
  margin:20,
  nav:false,
  stagePadding: 70,
  dots:false,
  responsive:{
  0:{
    items:1,
    stagePadding: 30,
    loop:true
  },
  600:{
    items:2
  },
  1000:{
    items:2
  }
  } 
  })

  
         
// side nav
  function openNav() {
    document.getElementById("mySidenav").style.width = "313px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
  
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.body.style.backgroundColor = "white";
  }

// to top
  $(window).on( 'scroll.myTemplat', scrollWindow).trigger( 'scroll.myTemplat' );

	function scrollWindow() {
		if ($(window).scrollTop() > 500) {
			$('.to-top').addClass('active');
		} else {
			$('.to-top').removeClass('active');
		}
	}

	$( 'body' ).on( 'click', '.to-top',  function(event) {
		$('html, body').animate({
			scrollTop:0
		}, 400);
		return false;
	});

  // side menu drop down
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show-dropbtn");
  }
  function mFunction() {
    document.getElementById("scndDropdown").classList.toggle("show-dropbtn");
  }
  function thirdFunction() {
    document.getElementById("thirdDropdown").classList.toggle("show-dropbtn");
  }
  function fourthFunction() {
    document.getElementById("fourthDropdown").classList.toggle("show-dropbtn");
  }
  function fifthFunction() {
    document.getElementById("fifthDropdown").classList.toggle("show-dropbtn");
  }
  function sixthFunction() {
    document.getElementById("sixthDropdown").classList.toggle("show-dropbtn");
  }
  
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-dropbtn')) {
          openDropdown.classList.remove('show-dropbtn');
        }
      }
    }
  }

 
  $(function(){
    $("#meu_div").click(function(){
      $("#meu_div").toggleClass("spinEffect");
    });
  });
  $(function(){
    $("#me_div").click(function(){
      $("#me_div").toggleClass("spinEffect");
    });
  });
  $(function(){
    $("#third_div").click(function(){
      $("#third_div").toggleClass("spinEffect");
    });
  });
  $(function(){
    $("#fourth_div").click(function(){
      $("#fourth_div").toggleClass("spinEffect");
    });
  });
  $(function(){
    $("#fif_div").click(function(){
      $("#fif_div").toggleClass("spinEffect");
    });
  });
  $(function(){
    $("#six_div").click(function(){
      $("#six_div").toggleClass("spinEffect");
    });
  });

  // animations AOS
  AOS.init();

// on scroll bg color
  $(document).ready(function() {
    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }
});


$(window).on('scroll', function() {
    if ($('.stricked-menu').length) {
        var headerScrollPos = 100;
        var stricky = $('.stricked-menu');
        if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass('stricky-fixed');
        } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass('stricky-fixed');
        }
    }
});