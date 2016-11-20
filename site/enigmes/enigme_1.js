var old = 0;
var initial;
getTemperature("","", (val) => {initial = val[0].value});


function checkTemp(val) {
    if(initial){
    var temp = val[0].value;
    console.log(temp)
    if(temp >= initial + 1){
        window.location.replace('./enigme_2.html');
    }
    }
}

setInterval(function(){ getTemperature("","", checkTemp) }, 500);
//setInterval(function(){ alert("Hello"); }, 3000);