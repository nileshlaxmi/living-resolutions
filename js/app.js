function hireButton(){
    window.location.href = "contact.html";
}
var images = ["images/bg-one.jpg", "images/bg-two.jpg", "images/bg-three.jpg"];

$(function(){
    let i = 0;
    var currentImg;
    setInterval(function(){
        // document.getElementById("homepage").src = images[1];
        currentImg = images[i];

        $("#homepage").animate({opacity: 0}, "slow", function(){
            $(this).attr("src", currentImg).animate({opacity:0.7});
        });

        if(i>=2){
            i=0;
        }
        else{
            i++;
        }

        console.log("i", i , " currentImg", currentImg);
    }, 3500);

    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true,
            navigateByImgClick: true,
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });
});