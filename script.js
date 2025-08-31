const imageContainer = document.querySelector('.background_image_container');
const leftArrow = document.querySelector('.arrow1');
const rightArrow = document.querySelector('.arrow2');
const textsContainer = document.querySelector('.texts');
const images = ['background1.jpg','background2.jpg','background3.jpg','background4.jpg','background5.jpg','background6.jpg'];
let strForHeading = `SED UT PERSPICIATES UNDE OMNIS ISTE NATUS ERROR SIT!`;
let strForPara = `He or she can achieve success in life who does not disappoint in difficulties.`;

function showTexts(i){
    textsContainer.innerHTML = `
    <span class='slide_counter'>Slide 0${i}</span><br>
    <big class='heading'>${strForHeading}</big>
    <p class='gyan'>${strForPara}</p>
    <button class="learn_more">Learn More</button>`;
}
showTexts(1);


function writeHeading(){
    let heading = document.querySelector('.heading');
    temp = '';
    let i=0;
    heading.innerHTML = ``;
    setInterval(()=>{
        if(i<strForHeading.length){
            temp += strForHeading[i];
            heading.innerHTML = temp;
            i++;
        }
    },50)
}

function writePara(){
    let para = document.querySelector('.gyan');
    temp = '';
    let i=0;
    para.innerHTML = ``;
    setInterval(() => {
        if(i<strForPara.length){
            temp += strForPara[i];
            para.innerHTML = temp;
            i++;
        }
    },50);

}



let pre = -1;

function doForRightArrow(){

    imageContainer.classList.remove('js_Arise');
    imageContainer.classList.add('JS_invisible');

    pre++;

    if(pre === 0){
        leftArrow.classList.add('JS_Hidden');
    }
    else{
        leftArrow.classList.remove('JS_Hidden');
    }

    textsContainer.innerHTML = ``;
    imageContainer.style.backgroundImage = `url(${images[pre]})`;
    
    showTexts(pre+1);
    writeHeading();
    setTimeout(()=>{
        writePara();
    },(60 * strForHeading.length));

    imageContainer.classList.remove('JS_invisible');
    imageContainer.classList.add('js_Arise');
    
    if(pre === images.length-2){
        rightArrow.classList.add('JS_Hidden');
    }
}

doForRightArrow();


function doForLeftArrow() {

    imageContainer.classList.remove('js_Arise');
    imageContainer.classList.add('JS_invisible');

    pre--;

    if(pre < images.length-1){
        rightArrow.classList.remove('JS_Hidden');
    }
    else{
        rightArrow.classList.add('JS_Hidden');
    }

    textsContainer.innerHTML = ``;
    imageContainer.style.backgroundImage = `url(${images[pre]})`;
    
    showTexts(pre+1);
    writeHeading();
    setTimeout(()=>{
        writePara();
    },(60 * strForHeading.length));

    imageContainer.classList.remove('JS_invisible');
    imageContainer.classList.add('js_Arise');

    if(pre === 0){
        leftArrow.classList.add('JS_Hidden');        
    }
}


rightArrow.addEventListener('click',()=>{
    doForRightArrow();
});


leftArrow.addEventListener('click',()=>{
    doForLeftArrow();
});