function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;
  
  var button2 = document.querySelector(".button2");
  button2.addEventListener('click',function(e){
  
  });
  
  