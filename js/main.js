//menu
function toggleMenu() {
    if (document.querySelector('nav ul').classList.contains("showMenu")) {
        document.querySelector('nav ul').classList.remove("showMenu");
        document.querySelector('nav .hambarger').classList.remove('active')
    } else {
        document.querySelector('nav ul').classList.add("showMenu");
        document.querySelector('nav .hambarger').classList.add('active')

    }
  }
  
  
  document.querySelector('nav .hambarger').addEventListener("click", toggleMenu);
  
//slider
var slider = Array.from(document.querySelectorAll('.landing img')),
currentSlide = 1 , 
sliderLength = slider.length;
checker(); 
function checker(){
    slider.forEach(function(img){
        img.classList.remove("active")
    }); 
    slider[currentSlide - 1].classList.add('active');
};
setInterval(function(){
    if(currentSlide == sliderLength){
        currentSlide = 1;
        checker();
    }else{
        currentSlide++;
        checker();
    }
},2500);
//portfolio
var switcher = Array.from(document.querySelectorAll('.portfolio ul li')),
portfolioImg = Array.from(document.querySelectorAll('.portfolio .box')),
portfoliophotos = Array.from(document.querySelectorAll('.portfolio .box .photos')),
portImg = document.querySelectorAll('.portfolio  .photos img'),
portfoliosec = document.querySelectorAll('.portfolio .box');
console.log(portfolioImg)
    switcher.forEach((li)=>{
        li.addEventListener('click',   function removeAct(){
            switcher.forEach((li) => {
                li.classList.remove('active');
                this.classList.add('active');
            });
        });
        li.addEventListener('click', hideImages)
    })
    function hideImages(){
        portfolioImg.forEach((img)=>{
            img.style.display = "none";
        });
        document.querySelectorAll(this.dataset.cat).forEach((el)=>{
            el.style.display = "block";
        })
    }
    //
    let mod = document.querySelector('.portfolio .modal');
    let modH3 = document.querySelector('.portfolio .modal h3');
    let modIMG = document.querySelector('.portfolio .modal img');
    let h3 = document.querySelector('.portfolio .box h3');

        document.querySelector('.modal span:first-child').onclick = function(){
            mod.style.display = "none"
        }
        portfolioImg.forEach((a)=>{
            a.addEventListener('click', function(){
                modIMG.src = a.querySelector('img').src
            })
            a.addEventListener('click', function(){
                mod.style.display = "block";
            });
        });
/*about*/
var userss = document.querySelectorAll('.about .user'),
story = document.getElementById('story');
userss.forEach((img)=>{
    img.addEventListener('click', function(){
        this.appendChild(story);
     
    })
})
//skills
const skillSection = document.getElementById('progress-section'),
skillBar = document.querySelectorAll('#progress-section .bar');
function showProgress(){
    skillBar.forEach((bar)=>{
        const values = bar.dataset.bar;
        bar.style.opacity = "1";
        bar.style.width = `${values}%`;
    })
}
function hideProgress(){
    skillBar.forEach((bar)=>{
        bar.style.opacity = "0";
        bar.style.width = "0";
    })
}
window.addEventListener('scroll', function(){
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
})
//counter
var activity = document.querySelector('.skills .activity'),
 customer = document.querySelector('.skills .activity .customer'),
 awards = document.querySelector('.skills .activity .awards'),
 projects = document.querySelector('.skills .activity .projects'),
 followers = document.querySelector('.skills .activity .followers'),
 count1 = 0,
 count2 = 0,
 count3 = 0,
 count4 = 0,
 state = false;
let cust = setInterval(function(){
    if(state == true){ 
        count1++;
        customer.innerHTML = count1;
    }else{
        state = false;
    }
     if(count1 === 230){
            clearInterval(cust)
        }
 },30);
 let awrd = setInterval(function(){
    if(state == true){ 
        count2++;
        awards.innerHTML = count2;
    }else{
        state = false;
    }
     if(count2 === 50){
            clearInterval(awrd)
        }
 },30);
 let proj = setInterval(function(){
    if(state == true){ 
        count3++;
        projects.innerHTML = count3;
    }else{
        state = false;
    }
     if(count3 === 940){
            clearInterval(proj)
        }
 },30);
 let fllwrs = setInterval(function(){
    if(state == true){ 
        count4++;
        followers.innerHTML = count4;
    }else{
        state = false;
    }
     if(count4 === 1200){
            clearInterval(fllwrs)
        }
 },30);
window.addEventListener('scroll',function(){
    const activityPos = activity.getBoundingClientRect().top;
    if(activityPos < window.innerHeight){
        state = true;
    }
})
//BLOG
let filter = ["all", "newest", "oldest", "most popular"]
let ul = document.createElement('ul');
for(let i = 0; i < filter.length; i++){
    let li = document.createElement('li');
    li.textContent = filter[i];
    ul.appendChild(li);
}
ul.children[0].classList = "active"
ul.children[0].setAttribute('data-cat', '.all')
ul.children[1].setAttribute('data-cat', '.newest')
ul.children[2].setAttribute('data-cat', '.oldest')
ul.children[3].setAttribute('data-cat', '.popular')
document.querySelector('.blog .container').prepend(ul);
let gridContent = document.querySelectorAll('.blog .content');
let ulLi = document.querySelectorAll('.blog ul li')
ulLi.forEach((li)=>{
li.addEventListener('click',function(){
ulLi.forEach((li)=>{
li.classList.remove('active');
this.classList.add('active');
        })
    })
li.addEventListener('click',removeContent);
})
function removeContent(){
gridContent.forEach((img)=>{
img.style.display = "none"
    })
document.querySelectorAll(this.dataset.cat).forEach((img)=>{
img.style.display = "flex"
    })
    
}
//BLOG GRO
window.addEventListener('scroll', function(){
    const gridBoxTop = document.querySelector('.blog .container .box').getBoundingClientRect().top;
    const gridBox = document.querySelector('.blog .container .box');
    if(gridBoxTop < window.innerHeight){
        gridBox.classList.add('active');
    }else{
        gridBox.classList.remove('active');
    }
    const aboutTop = document.querySelector('.about .container .team').getBoundingClientRect().top;
    const aboutSection = document.querySelector('.about .container .team');
    if(aboutTop < window.innerHeight){
        aboutSection.classList.add('animation');
    }else{
        aboutSection.classList.remove('animation');
    }
})
//form
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='email']");

document.forms[1].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;
  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }
  if (ageInput.value !== "") {
    ageValid = true;
  }
  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
document.links[1].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};