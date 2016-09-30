$(function () {
    $(".addzip").click(function () {
        var zipcode = $(".zip").val();
        $(".zip") == $(".zip").val("");



        var location = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBR_rxAnCdGK8bRZlRhG69ZO1xb9omyflE";
        $.ajax(location, { dataType: "json" }).done(function (data) {
            console.log(data)
            var latitude = data.results[0].geometry.location.lat;
            var longitude = data.results[0].geometry.location.lng;
            var div = ("<div id = 'map'></div>");
            div.append(map)
            $(".row").append(div);



            var map;
            var mapLocation = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDx-Klsm0DJLWy3-kL-E94gnTekV_ffJUg";
            $.ajax(mapLocation, { dataType: "jsonp" }).done(function () {
                map =  new google.maps.Map(document.getElementById('map'), {
                    center: { lat: latitude, lng: longitude },
                    zoom: 8

                    
                    
                
                
      
            
            
               
                    
                            


                    });
               
            });
    
        });
    });

});





//  function iconCase(img) {
//             var weatherImage = data.currently.icon('clear-day');

//                 switch (img) {
//                     case "partly-cloudy-day":
//                         weatherImage("partly-cloudy-day.jpg");
//                         break;
//                     case "clear-night":
//                         weatherImage("clear-night.jpg");
//                         break;
//                     case "partly-cloudy-night":
//                         weatherImage("partly-cloudy-night.jpg");
//                         break;
//                     case "cloudy":
//                         weatherImage("cloudy.jpg");
//                         break;
//                     case "rain":
//                         weatherImage("rain.jpg");
//                         break;
//                     case "sleet":
//                         weatherImage("sleet.jpg");
//                         break;
//                     case "snow":
//                         weatherImage("snow.jpg");
//                         break;
//                     case "wind":
//                         weatherImage("wind.jpg");
//                         break;
//                     case "fog":
//                         weatherImage("fog.jpg");
//                         break;
//                     default:
//                         weatherImage("clear-day.jpg");
//                         break;
//                 }

// $(".removeCard").click(function () {
//     $(".card").remove();
// });



//  $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {
//        console.log(data);
//    });