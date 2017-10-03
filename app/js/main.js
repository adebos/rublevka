window.onload = function(){

    var likesButtons = document.getElementsByClassName('like');
    for (var i = likesButtons.length - 1; i >= 0; i--) {
        likesButtons[i].addEventListener('click', function(e){
            e.preventDefault();
            this.querySelector('i').classList.toggle('fa-heart');
            this.querySelector('i').classList.toggle('fa-heart-o');
        });
    }

}