(function () {
    var H = document.getElementById('High').innerHTML;
    var w = document.getElementById('wind').innerHTML;
    let windChill = 35.74 + (0.6215 * H) - 
    (35.75 * (w ** 0.16)) + (0.4275 * H * (w ** 0.16));
    
    if (H <= 50 && w > 3) {
       windChill = Math.round(windChill);
    } else {
       windChill = "N/A";
    }
    document.getElementById('windChill').innerHTML = windChill;
    }
  );