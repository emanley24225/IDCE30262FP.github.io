var hc_icon1 = L.icon({
      iconUrl: 'https://emanley24225.github.io/IDCE30262FP/Images/hc.JPG',
      iconSize: [20,20]
    });
    var hc_marker1 = L.marker([42.273568, -71.748091], {icon: hc_icon1}).addTo(map);{}
      hc_marker1.bindPopup("<b>St. Annes Free Medical Program</b><br> <p> St. Anne's Free Medical Program is a free healthcare service that aims to help the underserved and the uninsured in the Worcester area. Located in Shrewsbury, they have been operational since 1996.").openPopup();
      hc_marker1.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });


    var hc_marker2 = L.marker([42.318278, -71.775047], {icon: hc_icon1}).addTo(map);{}
      hc_marker2.bindPopup("<b>Greenwood Street Free Medical Program</b><br> <p>The Greenwood Street Free Medical Program seeks to improve the health and well-being of people in need by providing free quality healthcare in an atmosphere of dignity and respect. They serve the uninsured and the underserved in the Worcester and Shrewsbury.").openPopup();
      hc_marker2.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker2.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });

    var hc_marker3 = L.marker([42.253673, -71.801801], {icon: hc_icon1}).addTo(map);{}
      hc_marker3.bindPopup("<b>Central Massachusetts Regional Public Health Alliance</b><br><p>The Central MA Regional Public Health Alliance (CMRPHA) is a coalition of five municipalities Towns of Grafton, Millbury, Shrewsbury, West Boylston and the City of Worcester working cooperatively to create and sustain a viable, cost-effective and labor-efficient regional public health district. The regional health district provides a comprehensive array of services to partner municipalities through a single organization managed by Worcester's Division of Public Health.</p>").openPopup();
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
      hc_marker5.bindPopup("<b>India Society of Worcester Center’s Free Health Stop</b><br> <p> The Free Health Stop is a division of the India Society of Worcester Center as well as the Indian Medical Association of New England, and it is a free healthcare service that aims to help the underserved and the uninsured in the Worcester area. Located in Shrewsbury, they have been operational since 2005.").openPopup();
      hc_marker5.on("click", function(e) {
      map.setView(e.latlng, 14);
      hc_marker5.bounce({duration: 500, height: 100}, function(){console.log("done")});
      });

var healthcare = L.layerGroup([hc_marker1, hc_marker2 , hc_marker3, hc_marker4, hc_marker5]);
var overlayMaps = {
    "healthcare": healthcare
};
L.control.layers(overlayMaps).addTo(map);
