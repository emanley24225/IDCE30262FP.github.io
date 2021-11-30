//Initialize Map
var map = L.map('mapid').setView([42.2626, -71.8023], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//Add dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Marker Structure
var icon1 = L.icon({
       iconUrl: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-house-icon-png-image_4013710.jpg',
       iconSize: [20,20]
     });
    var marker1 = L.marker([42.249810, -71.814770], {icon: icon1}).addTo(map);{}
     marker1.bindPopup("<b>Boys and Girls Club</b><br> <p> The Boys and Girls Club is an organization that provides many beneficial resources to the youth of Worcester.</p> <img src='https://ryanconstruction.com/wp-content/uploads/2019/10/Clubs-Worcester-BoysGirls-5-1024x731-900x600.jpg'/>").openPopup();
     marker1.on("click", function(e) {
     map.setView(e.latlng, 14);
     marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
     });

var hc_icon1 = L.icon({
      iconUrl: 'images/hc.jpg',
      iconSize: [20,20]
    });
    var hc_marker1 = L.marker([42.273568, -71.748091], {icon: hc_icon1}).addTo(map);{}
      hc_marker1.bindPopup("<b>St. Annes Free Medical Program</b><br> <p> St. Anne's Free Medical Program is a free healthcare service that aims to help the underserved and the uninsured in the Worcester area. Located in Shrewsbury, they have been operational since 1996. They offer the following services: <ul><li>Work Physicals</li><li>School Physical Exams</li><li>Sick Visits</li><li>Prescription Refills</li><li>Immunizations</li><li>Tuberculosis Testing</li><li>Health Insurance Help and Assistance</li><li>Pediatric Services</li></ul> <br><a href=https://www.worcesterfreecare.org/stAnnes/>Here is their website</a></p>").openPopup();
      hc_marker1.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });


    var hc_marker2 = L.marker([42.318278, -71.775047], {icon: hc_icon1}).addTo(map);{}
      hc_marker2.bindPopup("Greenwood Street Free Medical Program").openPopup();
      hc_marker2.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker2.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });

    var hc_marker3 = L.marker([42.253673, -71.801801], {icon: hc_icon1}).addTo(map);{}
      hc_marker3.bindPopup("Central Massachusetts Regional Public Health Alliance").openPopup();
      hc_marker3.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker3.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });

    var hc_marker4 = L.marker([42.257428, -71.804695], {icon: hc_icon1}).addTo(map);{}
      hc_marker4.bindPopup("<b>AIDS Project Worcester Inc</b><br> <p> The AIDS Project Worcester is a non-profit that offers a variety of services for those affected by the AIDS virus as well at at-risk members of the LGBTQ community. Their services are too many to list, but here is a small sample:<ul><li></li></ul><p>").openPopup();
      hc_marker4.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker4.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });

    var hc_marker5 = L.marker([42.292422, -71.749205], {icon: hc_icon1}).addTo(map);{}
      hc_marker5.bindPopup("<b>India Society of Worcester Center’s Free Health Stop</b><br> <p> The Free Health Stop is a division of the India Society of Worcester Center as well as the Indian Medical Association of New England, and it is a free healthcare service that aims to help the underserved and the uninsured in the Worcester area. Located in Shrewsbury, they have been operational since 2005. They offer the following services:").openPopup();
      hc_marker5.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker5.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });

var fridge_icon1 = L.icon({
        iconUrl: 'images/fridge.jpg',
        iconSize: [20,20]
      });
    var fridge_marker1 = L.marker([42.251569, -71.819814], {icon: fridge_icon1}).addTo(map);{}
          fridge_marker1.bindPopup("<b>Main Street Fridge</b><br> <p> The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are three fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Main Street near Clark University.").openPopup();
          fridge_marker1.on("click", function(e) {
          map.setView(e.latlng, 14);
          fridge_marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
          });

    var fridge_marker2 = L.marker([42.253743, -71.806600], {icon: fridge_icon1}).addTo(map);{}
        fridge_marker2.bindPopup("<b>Southbridge Fridge</b><br> <p> The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are three fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Southbridge Street near Miss Worcester Diner.").openPopup();
        fridge_marker2.on("click", function(e) {
        map.setView(e.latlng, 14);
        fridge_marker2.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

    var fridge_marker3 = L.marker([42.259909, -71.802153], {icon: fridge_icon1}).addTo(map);{}
        fridge_marker3.bindPopup("<b>Portland Fridge</b><br> <p> The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are three fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Portland Street near City Hall.").openPopup();
        fridge_marker3.on("click", function(e) {
        map.setView(e.latlng, 14);
        fridge_marker3.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });
