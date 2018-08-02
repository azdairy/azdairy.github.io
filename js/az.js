var isMobile = /Mobile/.test(navigator.userAgent);

var servicesTopOffset = $("#services .image").offset().top;
var aboutTopOffset = $("#about .image").offset().top;
var contactTopOffset = $("#contact .image").offset().top;

$("#menutoggle").click(function(){
  $("#sidemenu").toggleClass("visible");
});

$(window).on("scroll", function(e){
  if (!isMobile) {
    $("#landing .video").css("top", ($(window).scrollTop() / 1.5) + "px");
    $("#services .image").css("top", (($(window).scrollTop() - servicesTopOffset) / 1.5) + "px");
    $("#about .image").css("top", (($(window).scrollTop() - aboutTopOffset) / 1.5) + "px");
    $("#contact .image").css("top", (($(window).scrollTop() - contactTopOffset) / 1.5) + "px");
  }
});


$(".wd50, .wd25").mousemove(function(e){
  var ax = -($(this).innerWidth() / 2 - (e.pageX - $(this).offset().left)) / 200;
  var ay = ($(this).innerHeight() / 2 - (e.pageY - $(this).offset().top)) / 100;
  $(this).find('img').css({
    "transition": "all 0s",
    "transform": "scale(1.3) translateX(" + ax + "px) translateY(" + (-ay) + "px)"
  });
});

$(".wd50, .wd25").mouseleave(function () {
  $('img').css({
    "transform": "scale(1.3) translateX(0px) translateY(0px)",
    "transition": "all 0.4s",
  });
});

// $('.service-cn').mousemove(function (e) {
//   console.log(e)
//   var ax = -($('.service-cn').innerWidth() / 2 - (e.pageX - $(this).offset().left)) / 100;
//   var ay = ($('.service-cn').innerHeight() / 2 - (e.pageY - $(this).offset().top)) / 50;
//   $(this).find('.service').attr("style", "transition: none; transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg)");
// })
// 

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 18,

    mapTypeControl: false,
    disableDefaultUI: true,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(13.046056, 77.578403), // 13.026782,77.579749 (40.6700, -73.9400

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#bc3728"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#ff0000"
          },
          {
            "visibility": "on"
          },
          {
            "weight": "2.46"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "gamma": 0.01
          },
          {
            "lightness": 20
          },
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "saturation": -31
          },
          {
            "lightness": -33
          },
          {
            "weight": 2
          },
          {
            "gamma": 0.8
          },
          {
            "color": "#bc3728"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "color": "#ff0000"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 30
          },
          {
            "saturation": 30
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": 20
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 20
          },
          {
            "saturation": -20
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 10
          },
          {
            "saturation": -30
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "saturation": 25
          },
          {
            "lightness": 25
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "lightness": -20
          },
          {
            "color": "#1c2767"
          }
        ]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map-div');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(13.046056, 77.578403),
    map: map,
    title: 'A To Z Dairy Farming Solutions'
  }); 
}
