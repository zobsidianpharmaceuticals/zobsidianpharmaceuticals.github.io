$(document).ready(function(){
	$(".main-container").click(function(){
    $('#myNavbar').collapse('hide');
	});
});



$(document).ready(function() {
  $('body').scrollspy({
    target: ".navbar",
    offset: 100
  });

  //For Desktop Nav bar
  $("#myNavbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 800);

      $('#myNavbar').collapse('hide');

      // $(this).parent().parent().find(".active").removeClass("active");
      //
      // $(this).parent().addClass("active");
    }
  });
});

/*=====================================================================
                       SKILLS Progress Bar
=====================================================================*/
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

function plotBar(id,percentage) {
	var bar = new ProgressBar.Line(id, {
	  easing: 'easeOut',
	  duration: 1400,
	  color: '#fff',
	  trailColor: '#fff',
	  trailWidth: 1,
	  svgStyle: {width: '100%', height: '100%'},
	  from: {color: '#c06014'},
	  to: {color: '#c06014'},
	  // text: { value: 'Text', style: {position: 'absolute',left: '90%',top: '0%'}},
	  step: function(state, bar)  {
	    bar.path.setAttribute('stroke', state.color);

		// var value = Math.round(bar.value() * 100);
	  //   if (value === 0) {
	  //     bar.setText('');
	  //   } else {
	  //     bar.setText(value + '%');
	  //   }
	  }
	});
	bar.animate(percentage);  // Number from 0.0 to 1.0
}

// function plotCircle(id, percentage) {
// 	var bar = new ProgressBar.Circle(id, {
// 		easing: 'easeOut',
// 	  duration: 1400,
// 	  color: '#000',
// 		trailColor: '#333',
// 		strokeWidth: 8,
// 	  trailWidth: 7,
// 	  from: {color: '#0487cc', width: 8 },
// 	  to: {color: '#0487cc', width: 8 },
// 	  text: {
// 	    autoStyleContainer: false
// 	  },
// 	  step: function(state, circle) {
// 	    circle.path.setAttribute('stroke', state.color);
// 	    circle.path.setAttribute('stroke-width', state.width);
//
// 	    var value = Math.round(circle.value() * 100);
// 	    if (value === 0) {
// 	      circle.setText('');
// 	    } else {
// 	      circle.setText(value + '%');
// 	    }
// 	  }
// 	});
// 	bar.animate(percentage);
// }

$(document).ready(function(){
  plotBar(Creativity,0.92);
  plotBar(Leadership,0.95);
  plotBar(Organization,0.95);
  plotBar(Puntuality,0.98);
  plotBar(Communication,0.90);

    // $(window).scroll(function () {
    // 	// if (!$(".progressbar-text")[0]){
	  //   // 	var skills = $("#skills").offset().top - 300;
		// 	// if($(window).scrollTop() >= skills){
		// 		plotBar(Creativity,0.8);
		// 		plotBar(Leadership,0.8);
		// 		plotBar(Organization,0.5);
		// 		plotBar(Puntuality,0.8);
		// 		plotBar(Communication,0.7);
		// 		// plotBar(csharp,0.6);
		// 		// plotCircle(teamwork,0.7);
		// 		// plotCircle(creativity,0.6);
		// 		// plotCircle(english,0.8);
		// 		// plotCircle(hindi,0.8);
		// 	// }
		// }
	});

$(document).ready(function(){
	$('.scrollup').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;
			$("html, body").animate({
					scrollTop: 0
			}, 900);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 480) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
});
