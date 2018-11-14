var tobi = new Tobi({
    close: true,
    keyboard: true
});

function hireButton(){
    window.location.href = "contact.html";
}
var images = ["images/bg-two.jpg", "images/bg-three.jpg", "images/bg-one.jpg"];

$(function(){
    let i = 0;
    var currentImg;
    setInterval(function(){
        // document.getElementById("homepage").src = images[1];
        currentImg = images[i];

        $("#homepage").animate({opacity: 0}, "slow", function(){
            $(this).attr("src", currentImg).animate({opacity:0.6});
        });

        if(i>=2){
            i=0;
        }
        else{
            i++;
        }

        console.log("i", i , " currentImg", currentImg);
    }, 3500);

    
});