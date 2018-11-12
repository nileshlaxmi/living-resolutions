function hireButton(){
    window.location.href = "contact.html";
}
var images = ["bg-one.jpg", "bg-two.jpg", "bg-three.jpg"];

$(function(){
    let i = 0;
    $("#homeImage").css("background-image", "url(\"../../images/" + images[i] + "\"");
        console.log("images", images);
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#homeImage").fadeOut("slow", function () {
                console.log("background-image", "url(\"../../images/" + images[i] + "\")");
                $(this).css("background-image", "url(\"../../images/" + images[i] + "\")");
                $(this).fadeIn("slow");
            });
        }, 5000);
});