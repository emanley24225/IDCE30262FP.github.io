//Initialize Map
var housing = L.layerGroup();
var healthcare = L.layerGroup();
var youth = L.layerGroup();
var fridge = L.layerGroup();

var youthicon = L.icon({
       iconUrl: 'https://img.icons8.com/ios/50/000000/tire-swing--v1.png',
       iconSize: [20,20]
 });
    var youth1 = L.marker([42.249809, -71.814774], {icon: youthicon}).addTo(youth);{}
    youth1.bindPopup("<b> Boys & Girls Club Worcester </b> <br> <p> Our Mission is to help youth, especially those who need us most, develop the qualities needed to become responsible citizens and community leaders.</p> <br> <p> 65 Tainter Street Worcester, MA 01610 </p> <br> <a href= https://www.bgcworcester.org/ /> Here is the website </a>").openPopup();
     youth1.on("click", function(e) {
     map.setView(e.latlng, 14);
     youth1.bounce({duration: 500, height: 100}, function(){console.log("done")});
 });
   var youth2 = L.marker([42.271150, -71.844620], {icon: youthicon}).addTo(youth);{}
   youth2.bindPopup("<b>Latino Education Institute </b> <br> <p>The mission of the Latino Education Institute is to improve the academic achievement and well-being of Latino students (grades K-16) and their families from the City of Worcester.</p> <br> <p>486 Chandler St, Worcester, MA 01602</p> <br> <a href=https://www.worcester.edu/Latino-Education-Institute/ /> Here is the website </a>").openPopup();
    youth2.on("click", function(e) {
    map.setView(e.latlng, 14);
    youth2.bounce({duration: 500, height: 100}, function(){console.log("done")});
 });
  var youth3 = L.marker([42.262770, -71.802520], {icon: youthicon}).addTo(youth);{}
  youth3.bindPopup("<b></b>The Southeast Asian Coalition<br> <p> The Southeast Asian Coalition supports, promotes and advocates for the success of the Southeast Asian population of Central Massachusetts in their pursuit of naturalization while also maintaining their own unique cultural identity.</p> <br> <p>484 Main St STE 400, Worcester, MA 01608</p> <br> <a href=http://www.seacma.org/ /> Here is the website </a>").openPopup();
   youth3.on("click", function(e) {
   map.setView(e.latlng, 14);
   youth3.bounce({duration: 500, height: 100}, function(){console.log("done")});
 });
 var youth4 = L.marker([42.248160, -71.793020], {icon: youthicon}).addTo(youth);{}
 youth4.bindPopup("<b>Division of Youth Opportunities, City of Worcester</b> <br> <p> Our Mission is to provide leadership, support and advocacy for youth through the introduction of coordinated programs focused on positive youth development and youth employment.</p> <br> <p> 128 Providence St, Worcester, MA 01604 </p> <br> <a href= http://www.worcesterma.gov/youth-opportunities /> Here is the website </a>").openPopup();
  youth4.on("click", function(e) {
  map.setView(e.latlng, 14);
  youth4.bounce({duration: 500, height: 100}, function(){console.log("done")});
 });
var youth5 = L.marker([42.261900, -71.825750], {icon: youthicon}).addTo(youth);{}
youth5.bindPopup("<b> Worcester Youth Center</b> <br> <p> Our Mission is to to provide a safe haven where young people can make lasting, positive changes in their lives while sharpening skills, establishing relationships and realizing their full potential.</p> <br> <p>326 Chandler St, Worcester, MA 01602</p> <br> <a href= https://worcesteryouthcenter.org/ /> Here is the website </a>").openPopup();
 youth5.on("click", function(e) {
 map.setView(e.latlng, 14);
 youth5.bounce({duration: 500, height: 100}, function(){console.log("done")});
 });

var fridge_icon1 = L.icon({
        iconUrl: 'images/fridge.jpg',
        iconSize: [20,20]
      });
    var fridge_marker1 = L.marker([42.251569, -71.819814], {icon: fridge_icon1}).addTo(fridge);{}
          fridge_marker1.bindPopup("<b>Main Street Fridge</b><br> <p> The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are three fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Main Street near Clark University.").openPopup();
          fridge_marker1.on("click", function(e) {
          map.setView(e.latlng, 14);
          fridge_marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

    var fridge_marker2 = L.marker([42.253743, -71.806600], {icon: fridge_icon1}).addTo(fridge);{}
        fridge_marker2.bindPopup("<b>Southbridge Fridge</b><br> <p> The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are three fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Southbridge Street near Miss Worcester Diner.").openPopup();
        fridge_marker2.on("click", function(e) {
        map.setView(e.latlng, 14);
       fridge_marker2.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

    var fridge_marker3 = L.marker([42.259909, -71.802153], {icon: fridge_icon1}).addTo(fridge);{}
        fridge_marker3.bindPopup("<b>Portland Fridge</b><br> <p> The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are three fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Portland Street near City Hall.").openPopup();
        fridge_marker3.on("click", function(e) {
        map.setView(e.latlng, 14);
        fridge_marker3.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

    var fridge_marker4 = L.marker([42.250940, -71.790360], {icon: fridge_icon1}).addTo(fridge);{}
         fridge_marker4.bindPopup("<b>Union Hill School</b><br> <p>Location: 42 South St Worcester, MA The Woo Fridge Project aims to help people struggling with food insecurity in the Worcester area. There are four fridges which are continually stocked by members of the community located around Worcester. Those in need of food can travel to the fridge closest to them to find groceries they need. This fridge is located on Portland Street near City Hall.").openPopup();
         fridge_marker4.on("click", function(e) {
         map.setView(e.latlng, 14);
         fridge_marker4.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

var houseicon = L.icon({
       iconUrl: 'https://img.icons8.com/ios-glyphs/20/000000/prefab-house.png',
       iconSize: [20,20]
     });
  var house1 = L.marker([42.271270, -71.795860], {icon: houseicon}).addTo(housing);{}
     house1.bindPopup("<b> Worcester Housing Authority </b> <br> <p> The mission of the Worcester Housing Authority is to enhance the Worcester community by creating and sustaining decent, safe, and affordable housing that champions stability and self-sufficiency for our residents.</p> <br> <p> 40 Belmont Street, Worcester, MA 01605 </p> <br> <a href= https://www.worcesterha.org /> Here is the website </a>").openPopup();
     house1.on("click", function(e) {
     map.setView(e.latlng, 14);
     house1.bounce({duration: 500, height: 100}, function(){console.log("done")});
     });
  var house2 = L.marker([42.260262, -71.833939], {icon: houseicon}).addTo(housing);{}
    house2.bindPopup("<b> RCAP Solutions </b> <br> <p> RCAP offers many diverse and supportive programs and services, which are divided into four key areas:<ul><li>Affordable Housing/Homelessness Prevention</li><li>Consulting/Operation Support for Community Development</li><li>Rental Properties</li><li>Alternative Lending</li> </ul> </p> <br> <p> 191 May Street, Worcester, MA 01602 </p> <br> <a href= https://www.rcapsolutions.org/> Here is the website </a>").openPopup();
    house2.on("click", function(e) {
    map.setView(e.latlng, 14);
    house2.bounce({duration: 500, height: 100}, function(){console.log("done")});
    });
  var house3 = L.marker([42.263750, -71.803060], {icon: houseicon}).addTo(housing);{}
    house3.bindPopup("<b> Worcester Community Housing Resources </b> <br> <p> The WCHR runs the Community Loan Fund which is a pool of over $4 million in contributions and capital investments that provides low-interest financing to homeowners who need assistance with significant home repairs and to individuals and organizations who develop affordable housing.</p> <br> <p> 11 Pleasant Street, Worcester, MA 01608 </p> <br> <a href= https://www.wchr.org/ /> Here is the website </a>").openPopup();
    house3.on("click", function(e) {
    map.setView(e.latlng, 14);
    house3.bounce({duration: 500, height: 100}, function(){console.log("done")});
    });
  var house4 = L.marker([42.272540, -71.800770], {icon: houseicon}).addTo(housing);{}
   house4.bindPopup("<b> Central Massachusetts Housing Alliance </b> <br> <p> CMHA leads a collaborative response to homelessness that fosters long-term housing stability through prevention, shelter & safety net, moving beyond homelessness, and public ed & advocacy.</p> <br> <p> 6 Institute Rd, Worcester, MA 01609 </p><br> <a href= https://www.cmhaonline.org/ /> Here is the website </a>").openPopup();
   house4.on("click", function(e) {
   map.setView(e.latlng, 14);
   house4.bounce({duration: 500, height: 100}, function(){console.log("done")});
   });
  var house5 = L.marker([42.2626, -71.800770], {icon: houseicon}).addTo(housing);{}
  house5.bindPopup("<b> Friendly House Inc. </b> <br> <p>  Friendly House provides a variety of assistance including shelter, emergency help, food, medical care, after school and summer programs, day care, senior programs and counseling. </p> <br> <p> 36 Wall St, Worcester, MA 01604 </p> <br> <a href= https://www.friendlyhousema.org/ /> Here is the website </a>").openPopup();
  house5.on("click", function(e) {
  map.setView(e.latlng, 14);
  house5.bounce({duration: 500, height: 100}, function(){console.log("done")});
  });

var hc_icon1 = L.icon({
      iconUrl: 'https://emanley24225.github.io/IDCE30262FP/Images/hc.JPG',
      iconSize: [20,20]
    });
      var hc_marker1 = L.marker([42.273568, -71.748091], {icon: hc_icon1}).addTo(healthcare);{}
        hc_marker1.bindPopup("<b>St. Annes Free Medical Program</b><br> <p> St. Anne's Free Medical Program is a free healthcare service that aims to help the underserved and the uninsured in the Worcester area. Located in Shrewsbury, they have been operational since 1996.").openPopup();
        hc_marker1.on("click", function(e) {
        map.setView(e.latlng, 14);
        hc_marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

      var hc_marker2 = L.marker([42.318278, -71.775047], {icon: hc_icon1}).addTo(healthcare);{}
        hc_marker2.bindPopup("<b>Greenwood Street Free Medical Program</b><br> <p>The Greenwood Street Free Medical Program seeks to improve the health and well-being of people in need by providing free quality healthcare in an atmosphere of dignity and respect. They serve the uninsured and the underserved in the Worcester and Shrewsbury.").openPopup();
        hc_marker2.on("click", function(e) {
        map.setView(e.latlng, 14);
        hc_marker2.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

      var hc_marker3 = L.marker([42.253673, -71.801801], {icon: hc_icon1}).addTo(healthcare);{}
        hc_marker3.bindPopup("<b>Central Massachusetts Regional Public Health Alliance</b><br><p>The Central MA Regional Public Health Alliance (CMRPHA) is a coalition of five municipalities Towns of Grafton, Millbury, Shrewsbury, West Boylston and the City of Worcester working cooperatively to create and sustain a viable, cost-effective and labor-efficient regional public health district. The regional health district provides a comprehensive array of services to partner municipalities through a single organization managed by Worcester's Division of Public Health.</p>").openPopup();
        hc_marker3.on("click", function(e) {
        map.setView(e.latlng, 14);
        hc_marker3.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

      var hc_marker4 = L.marker([42.257428, -71.804695], {icon: hc_icon1}).addTo(healthcare);{}
        hc_marker4.bindPopup("<b>AIDS Project Worcester Inc</b><br> <p> The AIDS Project Worcester is a non-profit that offers a variety of services for those affected by the AIDS virus as well at at-risk members of the LGBTQ community. Their services are too many to list, but here is a small sample:<ul><li></li></ul><p>").openPopup();
        hc_marker4.on("click", function(e) {
        map.setView(e.latlng, 14);
        hc_marker4.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

      var hc_marker5 = L.marker([42.292422, -71.749205], {icon: hc_icon1}).addTo(healthcare);{}
        hc_marker5.bindPopup("<b>India Society of Worcester Center’s Free Health Stop</b><br> <p> The Free Health Stop is a division of the India Society of Worcester Center as well as the Indian Medical Association of New England, and it is a free healthcare service that aims to help the underserved and the uninsured in the Worcester area. Located in Shrewsbury, they have been operational since 2005.").openPopup();
        hc_marker5.on("click", function(e) {
        map.setView(e.latlng, 14);
        hc_marker5.bounce({duration: 500, height: 100}, function(){console.log("done")});
        });

      var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    	var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZW1hbmxleTI0MjI1IiwiYSI6ImNrdjJqMHd5dDB2ZDcyd21zZml5MXFjdXUifQ.0kbtBFlp3A-JjCWai7KhXQ';

    	var grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
    	var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

      var map = L.map('mapid', {
        center: [42.2626, -71.8023],
        zoom: 10,
        layers: [grayscale]
      });

      var baseMaps = {
          "Grayscale": grayscale,
          "Streets": streets
      };

      var overlayMaps = {
        "healthcare": healthcare,
        "housing": housing,
        "fridge": fridge,
        "youth": youth,
      };

L.control.layers(baseMaps, overlayMaps).addTo(map);
