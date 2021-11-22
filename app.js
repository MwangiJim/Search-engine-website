let header = document.querySelector('#header');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
const searchWrapper = document.querySelector('.input-part');
let inputBox = document.querySelector('input');
let suggestionBox = document.querySelector('.autocom-box');
let BackgroundImg = new Array(
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
);
let i = 0;

next.onclick = ()=>{
    if(i<BackgroundImg.length-1){
        header.style.backgroundImage = `url("${BackgroundImg[i+1]}")`;
    i++;
    }
}
prev.onclick = ()=>{
    if(i>0){
        header.style.backgroundImage = `url("${BackgroundImg[i-1]}")`;
    i--;
    }
}

inputBox.onkeyup =(e)=>{
    let Userdata = e.target.value;
    let emptyArray = [];

    if(Userdata){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(Userdata.toLocaleLowerCase());
        });
        //console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            return `<li>${data}</li>`;
        })
      //  console.log(emptyArray);
      showList(emptyArray);
      searchWrapper.classList.add('active');

      let options = document.querySelectorAll('li');
      for(let i =0;i<options.length;i++){
          options[i].setAttribute("onclick","selectedOption(this)");
      }
    }
    else{
        searchWrapper.classList.remove('active');
    }
}

function selectedOption(element){
    let userChoice = element.textContent;

    //console.log(userChoice);
    inputBox.value = userChoice
}

function showList(list){
    let ListData;
    if(!list.length){
        userValue = inputBox.value;
        ListData = `<li>${userValue}</li>`;
    }
    else{
        ListData = list.join('');
    }
    suggestionBox.innerHTML = list;
}