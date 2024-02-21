let calcScroll = () => {
    let scrollProgress = document.getElementById('progress');
    let progressValue = document.getElementById('progress-value');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.floor((pos + 100)/calcHeight);

    if(pos > 100 ){
        scrollProgress.style.display = "grid";
    }
    else
    {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () =>{
        document.documentElement.scrollTop = 0;
    });

    // scrollProgress.style.background = `conic-gradient
    // (#ffffff ${scrollValue}%, #ffffff ${scrollProgress}%)`;


}

window.onscroll = calcScroll;
window.onload = calcScroll;


let el = document.getElementById('scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    let scTop = document.documentElement.scrollTop;
    el.style.width = `${(scTop / height) * 100}%`;
})