function hireButton(){
    window.location.href = "contact.html";
}
var images = ["bg-one.jpg", "bg-two.jpg", "bg-three.jpg"];

$(function(){
    let i = 0;
    $("#homeImage").css("background-image", "url(images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#homeImage").fadeOut("slow", function () {
                $(this).css("background-image", "url(images/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
});