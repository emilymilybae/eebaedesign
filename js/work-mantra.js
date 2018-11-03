window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("uparrow").style.display = "block";
    } else {
        document.getElementById("uparrow").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function test(element) {
    var newTab = window.open();
    setTimeout(function() {
        newTab.document.body.innerHTML = element.innerHTML;
    }, 500);
    return false;
}
