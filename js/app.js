function hireButton(){
    window.location.href = "contact.html";
}
var images = ["images/bg-one.jpg", "images/bg-two.jpg", "images/bg-three.jpg"];

$(function(){
    let i = 0;
    // $("#homeImage").css("background-image", "url(images/" + images[i] + ")");
    //     setInterval(function () {
    //         i++;
    //         if (i == images.length) {
    //             i = 0;
    //         }
    //         $("#homeImage").fadeOut("slow", function () {
    //             $(this).css("background-image", "url(images/" + images[i] + ")");
    //             $(this).fadeIn("slow");
    //         });
    //     }, 5000);

    for(i=0; i< images.length; i++){
        var currentImg = images[i];
    }

    $("#homepage").animate({opacity: 0}, slow, function(){
        $(this).attr(src, currentImg).animate({opacity:1});
    });

    $("#homepage").change(function(){
        var selected = $(this).val();
        var image = $("#homepage");
        image.fadeOut('fast', function () {
            image.attr('src', '/images/'+selected+'.jpg');
            image.fadeIn('fast');
        });
    });


    // $("#vehicle").change(function(){
    //     var selected = $(this).val();
    //     var image = $("#selectedVehicle");
    //     image.fadeOut('fast', function () {
    //         image.attr('src', '/assets/images/mini/'+selected+'.png');
    //         image.fadeIn('fast');
    //     });
    // });

});