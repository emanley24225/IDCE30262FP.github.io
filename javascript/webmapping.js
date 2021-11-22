var map = L.map('mapid').setView([42.2626, -71.8023], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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

var icon1 = L.icon({
       iconUrl: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-house-icon-png-image_4013710.jpg',
       iconSize: [10,10]
     });
    var marker1 = L.marker([42.249810, -71.814770], {icon: icon1}).addTo(map);{}
     marker1.bindPopup("<b>Boys and Girls Club</b><br> <p> The Boys and Girls Club is an organization that provides many beneficial resources to the youth of Worcester.</p> <img src='https://ryanconstruction.com/wp-content/uploads/2019/10/Clubs-Worcester-BoysGirls-5-1024x731-900x600.jpg'/>").openPopup();
     marker1.on("click", function(e) {
     map.setView(e.latlng, 14);
     marker1.bounce({duration: 500, height: 100}, function(){console.log("done")});
     });
