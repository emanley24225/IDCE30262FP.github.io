var houseicon = L.icon({
       iconUrl: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-house-icon-png-image_4013710.jpg',
       iconSize: [20,20]
     });
    var house1 = L.marker([42.271270, -71.795860], {icon: houseicon}).addTo(map);{}
     house1.bindPopup("<b> Worcester Housing Authority </b> <br> <p> The mission of the Worcester Housing Authority is to enhance the Worcester community by creating and sustaining decent, safe, and affordable housing that champions stability and self-sufficiency for our residents.</p> <br> <p> 40 Belmont Street, Worcester, MA 01605 </p> <br> <a href= https://www.worcesterha.org /> Here is the website </a>").openPopup();
     house1.on("click", function(e) {
     map.setView(e.latlng, 14);
     house1.bounce({duration: 500, height: 100}, function(){console.log("done")});
   });
   var house2 = L.marker([42.260262, -71.833939], {icon: houseicon}).addTo(map);{}
    house2.bindPopup("<b> RCAP Solutions </b> <br> <p> RCAP offers many diverse and supportive programs and services, which are divided into four key areas:<ul><li>Affordable Housing/Homelessness Prevention</li><li>Consulting/Operation Support for Community Development</li><li>Rental Properties</li><li>Alternative Lending</li> </ul> </p> <br> <p> 191 May Street, Worcester, MA 01602 </p> <br> <a href= https://www.rcapsolutions.org/> Here is the website </a>").openPopup();
    house2.on("click", function(e) {
    map.setView(e.latlng, 14);
    house2.bounce({duration: 500, height: 100}, function(){console.log("done")});
   });
   var house3 = L.marker([42.263750, -71.803060], {icon: houseicon}).addTo(map);{}
    house3.bindPopup("<b> Worcester Community Housing Resources </b> <br> <p> The WCHR runs the Community Loan Fund which is a pool of over $4 million in contributions and capital investments that provides low-interest financing to homeowners who need assistance with significant home repairs and to individuals and organizations who develop affordable housing.</p> <br> <p> 11 Pleasant Street, Worcester, MA 01608 </p> <br> <a href= https://www.wchr.org/ /> Here is the website </a>").openPopup();
    house3.on("click", function(e) {
    map.setView(e.latlng, 14);
    house3.bounce({duration: 500, height: 100}, function(){console.log("done")});
  });
  var house4 = L.marker([42.272540, -71.800770], {icon: houseicon}).addTo(map);{}
   house4.bindPopup("<b> Central Massachusetts Housing Alliance </b> <br> <p> CMHA leads a collaborative response to homelessness that fosters long-term housing stability through prevention, shelter & safety net, moving beyond homelessness, and public ed & advocacy.</p> <br> <p> 6 Institute Rd, Worcester, MA 01609 </p><br> <a href= https://www.cmhaonline.org/ /> Here is the website </a>").openPopup();
   house4.on("click", function(e) {
   map.setView(e.latlng, 14);
   house4.bounce({duration: 500, height: 100}, function(){console.log("done")});
 });
 var house5 = L.marker([42.2626, -71.800770], {icon: houseicon}).addTo(map);{}
  house5.bindPopup("<b> Friendly House Inc. </b> <br> <p>  Friendly House provides a variety of assistance including shelter, emergency help, food, medical care, after school and summer programs, day care, senior programs and counseling. </p> <br> <p> 36 Wall St, Worcester, MA 01604 </p> <br> <a href= https://www.friendlyhousema.org/ /> Here is the website </a>").openPopup();
  house5.on("click", function(e) {
  map.setView(e.latlng, 14);
  house5.bounce({duration: 500, height: 100}, function(){console.log("done")});
 });
