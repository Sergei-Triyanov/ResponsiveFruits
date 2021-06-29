// константы
const navigation = document.querySelector(".navigation");
const navChildren  = navigation.children;
const thumb = document.querySelector(".thumb");
const thumbChildren  = thumb.children;
const toggle = document.querySelector(".toggle");

// добавляем активный стиль к элементу 
for(let i=0; i<navChildren.length; i++){
    navChildren[i].addEventListener("click", function(event){
        event.preventDefault();
        for(let j=0; j<navChildren.length; j++){
            navChildren[j].classList.remove("active");
        }
        navChildren[i].classList.add("active");
    });
};

// добавляем активный класс thumb элементам
for(let i=0; i<thumbChildren.length; i++){
    thumbChildren[i].addEventListener("click", function(event){
        event.preventDefault();
        for(let j=0; j<thumbChildren.length; j++){
            thumbChildren[j].classList.remove("active");
        }
        thumbChildren[i].classList.add("active");
    });
};

// функция смены изображения
function imgSlider(anything){
    document.querySelector('.fruits').src = anything;
}

// функция смены заднего фона
function changeBgColor(color){
    const bg = document.querySelector(".bg");
    bg.style.background = color;
}

// присвоение активного силектора бургеру и шапки
toggle.addEventListener("click", function(event){
    event.preventDefault();
    toggle.classList.toggle("active");
    navigation.classList.toggle("navActive")
})