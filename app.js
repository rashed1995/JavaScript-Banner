
bannerloop();
    var start=setInterval(() => {    
      bannerloop();
    }, 5000);


function bannerloop(){
   
  setTimeout(function(){
    setTimeout(function(){
      document.getElementById("container").style.filter="brightness(50%)";
    },0);
   
    setTimeout(function(){
      document.getElementById("container").style.filter="brightness(60%)";
    },100);
    setTimeout(function(){
      document.getElementById("container").style.filter="brightness(80%)";
    },200);
    setTimeout(function(){
      document.getElementById("container").style.filter="brightness(90%)";
    },300);
    setTimeout(function(){
      document.getElementById("container").style.filter="brightness(100%)";
    },400);
    document.getElementById("container").style.filter="brightness(100%)";
    document.getElementById("container").style.opacity="1";
    gsap.from('.image2',{duration :1,scale:5 });
    gsap.to('.image2',{duration :1,delay:2, y:'10%'});
  },500);
  setTimeout(function(){
    // setTimeout(function(){
    //   document.getElementById("container").style.filter="brightness(50%)";
    // },3600);
    // setTimeout(function(){
    //   document.getElementById("container").style.filter="brightness(40%)";
    // },3700);
    // setTimeout(function(){
    //   document.getElementById("container").style.filter="brightness(30%)";
    // },3800);
    // // setTimeout(function(){
    // //   document.getElementById("container").style.filter="brightness(20%)";
    // // },30);
    document.getElementById("container").style.filter="brightness(5%)";
    gsap.to('.image2',{duration :0, y:'-2%'}); 
  },5000);
}


