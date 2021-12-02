
var hc_icon1 = L.icon({
      iconUrl: 'https://emanley24225.github.io/IDCE30262FP/Images/hc.JPG',
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
