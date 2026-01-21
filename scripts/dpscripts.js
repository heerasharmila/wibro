 $(document).ready(function () {
	 console.log('test');
	      $('.dropdown').hover(
      function () {
        $(this).find('.custom-arrow').html('&#9650;'); 
      },
      function () {
        $(this).find('.custom-arrow').html('&#9660;');
      }
    );
	 $('.dropdown1').hover(
      function () {
        $(this).find('.custom-arrow').html('&#9650;'); 
      },
      function () {
        $(this).find('.custom-arrow').html('&#9660;');
      }
    );
      // Toggle submenu visibility on hover
	  $('#endropdownMenuButton').hover(
        function () {
          $('#langdp').addClass('show');
          $(this).addClass('open');
        },
        function () {
          // Keep submenu shown if hovered
          setTimeout(() => {
            if (!$('#langdp').is(':hover')) {
              $('#langdp').removeClass('show');
              $(this).removeClass('open');
            }
          }, 0);
        }
      );
	   $('#hoverItem1').hover(
        function () {
          $('#hoverSubmenu1').addClass('show');
          $(this).addClass('open');
        },
        function () {
          // Keep submenu shown if hovered
          setTimeout(() => {
            if (!$('#hoverSubmenu1').is(':hover')) {
              $('#hoverSubmenu1').removeClass('show');
              $(this).removeClass('open');
            }
          }, 0);
        }
      );
	   $('#hoverItem2').hover(
        function () {
          $('#hoverSubmenu2').addClass('show');
          $(this).addClass('open');
        },
        function () {
          // Keep submenu shown if hovered
          setTimeout(() => {
            if (!$('#hoverSubmenu2').is(':hover')) {
              $('#hoverSubmenu2').removeClass('show');
              $(this).removeClass('open');
            }
          }, 0);
        }
      );

      $('#hoverItem3').hover(
        function () {
          $('#hoverSubmenu3').addClass('show');
          $(this).addClass('open');
        },
        function () {
          // Keep submenu shown if hovered
          setTimeout(() => {
            if (!$('#hoverSubmenu3').is(':hover')) {
              $('#hoverSubmenu3').removeClass('show');
              $(this).removeClass('open');
            }
          }, 0);
        }
      );
	   $('#hoverItem4').hover(
        function () {
          $('#hoverSubmenu4').addClass('show');
          $(this).addClass('open');
        },
        function () {
          // Keep submenu shown if hovered
          setTimeout(() => {
            if (!$('#hoverSubmenu4').is(':hover')) {
              $('#hoverSubmenu4').removeClass('show');
              $(this).removeClass('open');
            }
          }, 0);
        }
      );
	  $('#hoverItem5').hover(
        function () {
          $('#hoverSubmenu5').addClass('show');
          $(this).addClass('open');
        },
        function () {
          // Keep submenu shown if hovered
          setTimeout(() => {
            if (!$('#hoverSubmenu5').is(':hover')) {
              $('#hoverSubmenu5').removeClass('show');
              $(this).removeClass('open');
            }
          }, 0);
        }
      );
	  $('#hoverItem6').hover(
        function () {
          $('#hoverSubmenu6').addClass('show');
          $(this).addClass('open');
        },
        function () {
          // Keep submenu shown if hovered
          setTimeout(() => {
            if (!$('#hoverSubmenu6').is(':hover')) {
              $('#hoverSubmenu6').removeClass('show');
              $(this).removeClass('open');
            }
          }, 0);
        }
      );

      // Keep submenu visible when hovered
      $('#hoverSubmenu3').hover(
        function () {
          $(this).addClass('show');
          $('#hoverItem3').addClass('open');
        },
        function () {
          $(this).removeClass('show');
          $('#hoverItem3').removeClass('open');
        }
      );
	   $('#hoverSubmenu1').hover(
        function () {
          $(this).addClass('show');
          $('#hoverItem1').addClass('open');
        },
        function () {
          $(this).removeClass('show');
          $('#hoverItem1').removeClass('open');
        }
      );
	    $('#hoverSubmenu2').hover(
        function () {
          $(this).addClass('show');
          $('#hoverItem2').addClass('open');
        },
        function () {
          $(this).removeClass('show');
          $('#hoverItem2').removeClass('open');
        }
      );
	   $('#hoverSubmenu4').hover(
        function () {
          $(this).addClass('show');
          $('#hoverItem4').addClass('open');
        },
        function () {
          $(this).removeClass('show');
          $('#hoverItem4').removeClass('open');
        }
      );
	  $('#hoverSubmenu5').hover(
        function () {
          $(this).addClass('show');
          $('#hoverItem5').addClass('open');
        },
        function () {
          $(this).removeClass('show');
          $('#hoverItem5').removeClass('open');
        }
      );
	  $('#hoverSubmenu6').hover(
        function () {
          $(this).addClass('show');
          $('#hoverItem6').addClass('open');
        },
        function () {
          $(this).removeClass('show');
          $('#hoverItem6').removeClass('open');
        }
      );
	  //secrity section hover
	  $(".heading").hover(function () {
    $(this).addClass("hovered");
    $(this).next(".reveal-text").stop().fadeIn();
  }, function () {
    $(this).removeClass("hovered");
    $(this).next(".reveal-text").stop().fadeOut();
  });
    });