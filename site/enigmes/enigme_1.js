

function checkTemp(thresh) {
    if(test_getTemperature() >= thresh + 1){
        window.location.replace('./enigme_2.html');
    }
}

var initial_temperature = 11; // get_Temperature();

//setInterval(function(){ checkTemp(initial_temperature) }, 500);
//setInterval(function(){ alert("Hello"); }, 3000);