var fridge_icon1 = L.icon({
        iconUrl: 'https://img.icons8.com/ios-glyphs/30/000000/fridge.png',
        iconSize: [20,20]
      });
    var fridge_marker1 = L.marker([42.251710, -71.820060], {icon: fridge_icon1}).addTo(map);{}
          fridge_marker1.bindPopup("<b>Fantastic Pizza</b><br> <p>Location:910 Main St Worcester, MA The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are four fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Main Street near Clark University.").openPopup();
          fridge_marker1.on("click", function(e) {
          map.setView(e.latlng, 14);
          fridge_marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
          });

    var fridge_marker2 = L.marker([42.259710, -71.801950], {icon: fridge_icon1}).addTo(map);{}
        fridge_marker2.bindPopup("<b>The Printer Building</b><br> <p>Location:44 Portland St Worcester, MA The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are four fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Southbridge Street near Miss Worcester Diner.").openPopup();
        fridge_marker2.on("click", function(e) {
        map.setView(e.latlng, 14);
        fridge_marker2.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

    var fridge_marker3 = L.marker([42.309970, -71.799830], {icon: fridge_icon1}).addTo(map);{}
        fridge_marker3.bindPopup("<b>Massachusetts League of Community Health Centers</b><br> <p>Location: 16 Brooks St Worcester, MA The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are four fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Portland Street near City Hall.").openPopup();
        fridge_marker3.on("click", function(e) {
        map.setView(e.latlng, 14);
        fridge_marker3.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });
   var fridge_marker4 = L.marker([42.250940, -71.790360], {icon: fridge_icon1}).addTo(map);{}
        fridge_marker4.bindPopup("<b>Union Hill School</b><br> <p>Location: 42 South St Worcester, MA The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are four fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Portland Street near City Hall.").openPopup();
        fridge_marker4.on("click", function(e) {
        map.setView(e.latlng, 14);
        fridge_marker4.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });
