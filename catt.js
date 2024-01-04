const jym = document.querySelector(".jymImg");

const hanuman = document.querySelector(".hanumanImg");

const hanuman2 = document.querySelector(".hanuman2Img");

document.querySelector(".btn1").addEventListener("click", function () {
    jym.style.display = "block";
    hanuman.style.display = "none";
    hanuman2.style.display = "none";
});
document.querySelector(".btn2").addEventListener("click", function () {
    jym.style.display = "none";
    hanuman.style.display = "block";
    hanuman.style.height = "500px";
    hanuman2.style.display = "none";

});
document.querySelector(".btn3").addEventListener("click", function () {
    jym.style.display = "none";
    hanuman.style.display = "none";
    hanuman2.style.display = "block";
    hanuman2.style.width = "700px";
});

