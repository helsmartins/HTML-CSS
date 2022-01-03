window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector("menu navul").style.display = 'none';
        }else{
            document.querySelector("menu nav ul").style.display ='flex';
        }
    });
};