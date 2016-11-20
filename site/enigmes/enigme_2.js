var initial;
getMotion("","", (val) => {initial = val[0].value});


function checkMotion(val) {
    if(initial){
    var temp = val[0].value;
    console.log(temp)
    if(temp >= initial+5){
        window.location.replace('./end.html');
    }
    }
}

setInterval(function(){ getMotion("","", checkMotion) }, 500);
//setInterval(function(){ alert("Hello"); }, 3000);