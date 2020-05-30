(function () {
    const High = document.getElementById('High').innerHTML;
    const wind = document.getElementById('wind').innerHTML;
    let windChill = 35.74 + (0.6215 * High) - (35.75 * (wind ** .16)) + (0.4275 * High * (wind ** .16));
    
     
    if (High <= 50 && wind > 3) {
       windChill = Math.round(windChill);
    } else {
       windChill = "NA";
    }
    document.getElementById('windChill').innerHTML = windChill;
  }());