$(function () {
  $('[data-toggle="popover"]').popover()
})

function getTemperature(uuid, minor)
{
    var url = "http://lauzhack.ael.li/events/uuid/" + uuid + "/type/temperature/minor/" + minor + "/date/1000000000/2479563000";
    var url2 = "http://lauzhack.ael.li/events/uuid/EMSENSORDEVICEFORMAT00000001/type/temperature/minor/15/date/1000000000/2479563000";
    var cliclou = $.ajax({
        type: 'GET',
        crossDomain: true,
        url: url2,
        headers: {
        'token': 'saEbYNtHbxZ6ThHE'
        }
    });
    //console.log(cliclou.value);
    return cliclou.value;
}

