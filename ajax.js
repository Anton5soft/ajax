
$(document).ready(function(){
$('.inputs').keypress(function(e) {
    if (!(e.which==8 || e.which==44 ||e.which==45 ||e.which==46 ||(e.which>47 && e.which<58))) return false;
});

});
function send()
{

    var data = [];


console.log(data);
    $(".inputs").each(function(element) {

        var valueNew = this.value;

        data.push(valueNew);
    });


    var filter = {data_array:data};
console.log(filter);
       $.ajax({

                type: "POST",
                url: "SendData.php",
                data: filter,

                success: function(html) {

                        $("#result").empty();

                        $("#result").append(html);
                }
        });

}

