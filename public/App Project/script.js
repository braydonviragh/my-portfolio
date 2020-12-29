//Google API Key AIzaSyAdNXfej7M_JRxKSy9su67z-xDC1wz7f8U

window.onload = initMap;
function initMap() {

 //Begin with Variables for buttons (to switch maps)
 var button1 = document.getElementById("button1");
 var button2 = document.getElementById("button2")
 var button3 = document.getElementById("button3")

 //Different desc/titles for walks
 var walk1 = document.getElementById("walk1");
 var walk2 = document.getElementById("walk2");
 var walk3 = document.getElementById("walk3");

 //to start-- all walks hidden
 walk1.classList.add("hidden");
 walk2.classList.add("hidden");
 walk3.classList.add("hidden");
    //Google map 1: Don Trail walk - this is the default map
function initMapOne() {
    // The location of the start
    const riverDaleFarm = {lat: 43.677244, lng:-79.363222};
    trailFinish = { lat: 43.6880254, lng: -79.3621621 };

    //citation https://developers.google.com/maps/documentation/javascript/overview
    // The map, centered at the start
    const map1 = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: riverDaleFarm,
    });

    //Credit to https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
    //For helping me create the travel route lines
    const walkPathOneCoordinates = [
        { lat: 43.6671, lng: -79.3610 },
        {lat: 43.666102, lng: -79.360858},
        {lat: 43.666073, lng: -79.359273},
        {lat: 43.667567, lng:-79.357994},
        {lat: 43.667667, lng: -79.357459},
        {lat: 43.668658, lng:-79.357573},
        {lat: 43.675107, lng: -79.362594},
        {lat: 43.680210, lng:-79.364273},
        {lat: 43.680989, lng:-79.365854},
        {lat: 43.683425, lng:-79.362378},
        {lat:43.685016, lng:-79.361412},
        {lat: 43.6880254, lng: -79.3621621}
    ]
    //Red lines
    const walkPathOne = new google.maps.Polyline({
        path: walkPathOneCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        travelMode: "walking",
    });
    walkPathOne.setMap(map1)
    //Marker on map
    const marker = new google.maps.Marker({
      position: { lat: 43.6671, lng: -79.3610 },
      map: map1,
    });
    const finish = new google.maps.Marker({
        position: trailFinish,
        map: map1,
      });


    //incase we add "hidden" twice, or anything is missed
    walk1.classList.remove("hidden");
    walk2.classList.remove("hidden");
    walk3.classList.remove("hidden");
    //display Walk 1
    walk2.classList.add("hidden");
    walk3.classList.add("hidden");
}
  //When site is idling...
  initMapOne();

  
  //Other Functons for other maps
  function initMapTwo () { 
        // The location of Waterfront walk
    const waterFront = { lat: 43.630972, lng:-79.418651};
    const finish = {lat: 43.6211745, lng: -79.4803682 };
    const walkPathTwoCoordinates = [
        {lat: 43.6410054, lng: -79.3768097},
        {lat:43.639039, lng:-79.384890},
        {lat: 43.636445, lng: -79.396972},
        {lat: 43.635678, lng:-79.396352},
        {lat:43.635026, lng:-79.397808 },
        {lat: 43.634950, lng: -79.399597},
        {lat: 43.634288, lng:-79.401778},
        {lat:43.633115, lng: -79.408698},
        {lat: 43.629910, lng:-79.425180},
        {lat: 43.636877, lng:-79.445845},
        {lat: 43.637930, lng:-79.455440},
        {lat:43.633946, lng:-79.468936 },
        {lat: 43.628170, lng:-79.475597},
        {lat: 43.6211746, lng: -79.4803682},
    ]
    // The map, centered at Waterfront
    const map2 = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: waterFront,
    });
    const marker = new google.maps.Marker({
      position:  { lat: 43.6410055, lng: -79.3768097},
      map: map2,
    });

    const finishLine = new google.maps.Marker({
        position: finish,
        map: map2,
    });

    const walkPath = new google.maps.Polyline({
        path: walkPathTwoCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map2,
    });
    walkPath.setMap(map2);
    
     //incase we add "hidden" twice  
     walk1.classList.remove("hidden");
     walk2.classList.remove("hidden");
     walk3.classList.remove("hidden");
     //display Walk 
     walk1.classList.add("hidden");
     walk3.classList.add("hidden");

     //Room for improvement: adding loop to filter out hidden classes
     //Tried a couple if statements but couldnt perfect it without bugs
};

function initMapThree() { 
    
        // The location of Nottawasauga Lookout
        const north = { lat:44.406117, lng: -80.263957};
        // The map, centered at Nottawasauga Lookout
        const map3 = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
          center: north,
        });
        const marker = new google.maps.Marker({
          position: north,
          map: map3,
        });
        const walkPathThreeCoordinates = [
            { lat:44.406117, lng: -80.263957},
            {lat: 44.408661, lng:-80.263472 },
            {lat: 44.411062, lng:-80.259049},
            {lat: 44.411315, lng:-80.253070},
            {lat: 44.408349, lng:-80.249680},
            {lat: 44.406456, lng:-80.253478 },
            {lat: 44.408219, lng:-80.254991},
            { lat:44.406117, lng: -80.263957},
        ]
        const walkPath = new google.maps.Polyline({
            path: walkPathThreeCoordinates,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
            map: map3,
        });
        
        walkPath.setMap(map3);
        
         //incase we add "hidden" twice
         walk1.classList.remove("hidden");
         walk2.classList.remove("hidden");
         walk3.classList.remove("hidden");
         //display Walk w
         walk1.classList.add("hidden");
         walk2.classList.add("hidden");
    
}

//Each button has a function - whenever a button is clicked - its corresponding map + info will show
button1.onclick = initMapOne;
button2.onclick = initMapTwo;
button3.onclick = initMapThree;



}




