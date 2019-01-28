window.onload = function() {
    window.addEventListener('keydown', function(e) {
        let aud = document.querySelector('audio[data-key="'+ e.keyCode+'"]');
        let key = document.querySelector('div[data-key="'+ e.keyCode+'"]');
        if(!aud) return;
        key.classList.add('playing');
        aud.currentTime = 0;
        aud.play();
    });

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}