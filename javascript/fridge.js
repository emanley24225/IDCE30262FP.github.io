var fridge_icon1 = L.icon({
        iconUrl: 'https://img.icons8.com/ios-glyphs/30/000000/fridge.png',
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
