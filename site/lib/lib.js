$(function () {
  $('[data-toggle="popover"]').popover()
})

function getTemperature(uuid, minor, checkTemp)
{
    // launch browser with
    // google-chrome --disable-web-security --user-data-dir
    var url = "http://lauzhack.ael.li/events/uuid/" + uuid + "/type/temperature/minor/" + minor + "/date/1000000000/2479563000";
    var url2 = "http://lauzhack.ael.li/events/uuid/EMSENSORDEVICEFORMAT00000001/type/temperature/minor/15/date/1000000000/2479563000";
    var cliclou_json = $.ajax({
        type: 'GET',
        url: url2,
        headers: {
        'token': 'saEbYNtHbxZ6ThHE',

        },
        success : checkTemp
    } );
    
    //return cliclou.value;
}

function getMotion(uuid, minor, checkMotion)
{
    // launch browser with
    // google-chrome --disable-web-security --user-data-dir
    var url = "http://lauzhack.ael.li/events/uuid/" + uuid + "/type/temperature/minor/" + minor + "/date/1000000000/2479563000";
    var url2 = "http://lauzhack.ael.li/events/uuid/EMSENSORDEVICEFORMAT00000001/type/movement/minor/14/date/1000000000/2479563000";
    var cliclou_json = $.ajax({
        type: 'GET',
        url: url2,
        headers: {
        'token': 'saEbYNtHbxZ6ThHE',
        },
        success : checkMotion
    } );

    
    //return cliclou.value;
}
