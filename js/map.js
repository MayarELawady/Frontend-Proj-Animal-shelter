  function initMap() {
        var uluru = { lat:29.863225, lng:31.313143};
        var map = new google.maps.Map(document.getElementById('map'),{
            zoom:16,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
  }