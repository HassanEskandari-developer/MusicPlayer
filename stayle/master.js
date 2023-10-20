// const allData = [ 
//   { id: 1, name: "Javad", lname: "Ashtiani" }, 
//   { id: 2, name: "Hadi", lname: "Ahmadi" }, 
//   { id: 3, name: "Ahmad", lname: "Khalili" }, 
// ]; 

const allData =[
  {
    id:1 , src:'stayle/auido/Artoosh.mp3' , name:'Sange Ghabre Arzoo', artist:'Artoosh' , img:'stayle/img/1.jpg', bg: "stayle/img/1.jpg"
  }
  ,
  {
    id:2 , src:'stayle/auido/aerosmith.mp3' , name:'Dream On', artist:'Aerosmith' ,img:'stayle/img/2.jpg', bg: "stayle/img/2.jpg"
  }
  ,
  {
    id:3 , src:'stayle/auido/Ebi.m4a' , name:'Postshir', artist:'Ebi',
     img:'stayle/img/3.jpg', bg: "stayle/img/3.jpg"
  },
  {
    id:4 , src:'stayle/auido/Las Olas.mp3' , name:'Las Olas', artist:'Las Olas',
     img:'stayle/img/4.jpg', bg: "stayle/img/11-1.jpg"
  }
  ,
  {
    id:5 , src:'stayle/auido/Inta eyh.mp3' , name:'Inta eyh', artist:'Inta eyh',
     img:'stayle/img/5.jpg', bg: "stayle/img/5-1.jpg"
  }
  ,
  {
    id:6 , src:'stayle/auido/Amaarae - Sad Girlz Luv Money ( Remix ).mp3' , name:'Sad Girlz Luv Money', artist:'Amaarae - Sad Girlz Luv Money ',
     img:'stayle/img/6.jpg', bg: "stayle/img/6.jpg"
  }
  ,
  {
    id:7 , src:'stayle/auido/Ömer Bükülmezoğlu - Cry.mp3' , name:' Cry', artist:'Ömer Bükülmezoğlu',
     img:'stayle/img/7.jpg', bg: "stayle/img/7.jpg"
  }
  ,
  {
    id:8 , src:'stayle/auido/Xcho Ты и Я.mp3' , name:'Ты и Я', artist:'Xcho',
     img:'stayle/img/8.jpg', bg: "stayle/img/8.jpg"
  }
  ,
  {
    id:9 , src:'stayle/auido/Бездна.mp3' , name:'Бездна', artist:'Бездна',
     img:'stayle/img/9.jpg', bg: "stayle/img/9.jpg"
  }
  ,
  {
    id:10 , src:'stayle/auido/MArof.mp3' , name:'MArof', artist:'MArof',
     img:'stayle/img/10.jpg', bg: "stayle/img/10.jpg"
  }
  ,
  {
    id:11 , src:'stayle/auido/Them Thangs.mp3' , name:'Them Thangs', artist:'Thangs',
     img:'stayle/img/11.jpg', bg: "stayle/img/11-1.jpg"
  }
  ,
  {
    id:12 , src:'stayle/auido/Shadmehr Aghili.mp3' , name:'Bi Ehsas', artist:'Shadmehr Aghili',
     img:'stayle/img/12.jpg', bg: "stayle/img/12.jpg"
  }
  

]
 
const myMusic= [
  'stayle/auido/Shadmehr Aghili.mp3',
  'stayle/auido/Them Thangs.mp3'
]
let display = document.querySelector(".display"); 
let allBox = document.querySelectorAll(".boximg"); 
let audio = document.querySelector('.audio')
let main = document.querySelector('main')



allBox.forEach((box) => { 
  console.log(box);
  box.addEventListener("click", (event) => { 
    event.stopPropagation()
    console.log(event);
    let getDataTurn = event.target.dataset["turn"];  //Return 0 , 1 , 2 from data-turn 
    display.classList.add("show-display"); 
    allData.forEach((data , index) => { 
      console.log(index);
      if (getDataTurn == data.id ) { 
        display.style.background=`url(${data.bg})`
        display.style.backgroundSize='cover'
        display.style. backgroundRepeat='no-repeat'
        display.style.backgroundPosition='center'
        display.innerHTML = ` 
        <div class="return" ><i class="bi bi-box-arrow-left"></i></div>
          
            <div class="display-wrapper"> 
            <div> 
            <img src="${data.img}" class="img"/>
                <h2>${data.artist}</h2> 
                <p>${data.name}</p> 
                <span><i class="bi bi-play-fill playButton"></i></span>
                
                <audio src="${data.src}" controls class="audio " id="audio1" ></audio>
            </div> 
            <div class="svg" >
              <img src="stayle/svg/cd.png" alt="">
           </div>
        </di> 
        
            `; 
            let i = true

            let playButton= document.querySelector('.playButton')
            let next =  document.querySelector(".next")
            playButton.addEventListener('click', (e)=>{
              console.log();
              let audiosrc= e.target.parentElement.nextElementSibling
              let svg = document.querySelector('.svg')
             
  
  if (i){
    console.log('play');
    audiosrc.play()
    e.target.classList.remove('bi-play-fill')
    e.target.classList.add('bi-pause')
    svg.classList.add('animation')
    i=false
  }else{
    console.log('pause');
    audiosrc.pause()
    e.target.classList.remove('bi-pause')
    e.target.classList.add('bi-play-fill')
    svg.classList.remove('animation')
    i=true
    
  }
            })

            
              
            
              
            
            
            const myAudio=document.querySelector('#audio1')
            console.log(audio1);
            main.style.display='none'
            let returnBtn = document.querySelector('.return')
            console.log( returnBtn);
            returnBtn.addEventListener('click' , (e)=>{
              e.target.parentElement.parentElement.classList.remove('show-display')
            main.style.display='flex'
            myAudio.pause()
              
            })

      } 

      
    }); 
  }); 
});
 function returnclick(){
 display.style.display='none'
 
}
// function next (self, data, turn){
//   console.log(self, data, turn);
//    let audiosrc= self.parentElement.parentElement.nextElementSibling
//   //  console.log(audiosrc);
//   //  console.log(e , index+1);
//    turn++
//    audiosrc.setAttribute('src' , myMusic[turn])
//    console.log(audiosrc);
//    // if (index>12){
//    //   console.log('error');
    
//    // }
//  }






