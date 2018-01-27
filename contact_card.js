"use strict";
function createCard(){
    $("button").click(function(){
        var pStr = "<p>" + $("textarea").val() + "</p>"; 
        var h2Str = "<h2>" + $("input[name='first_name']").val() + " " + $("input[name='last_name']").val() + "</h2>";
        var divStr = "<div>" + h2Str + "<a href='#'>Click for description!</a>" + pStr + "</div>";
        $(".contact_card").append(divStr);
        // add the click handler for the newly appended link & paragraph
        showContact();
    });
}

function showContact(){
    $("a").click(function(){
        // when the link is clicked, toggle link and siblings (which will hide link and header, show paragraph)
        $(this).toggle();
        $(this).siblings().toggle();
    });
    // when the paragrahp is clicked, toggle paragraph and siblings (which will show link and header, hide paragraph)
    $("p").on("click", function(){
        $(this).toggle();
        $(this).siblings().toggle();
    })
}

$(document).ready(function(){
    $("input, textarea").focus(function(){
        $(this).select();
        $(this).css("color", "#002244");
    });

    // create the card when the button is clicked
    createCard();
    
});