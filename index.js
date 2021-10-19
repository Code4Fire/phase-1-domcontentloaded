// const button = document.getElementById("notify") button.addEventListener("DOMContentLoaded",functions(){
//     console.log("This is really cool!");
//   });

  document.addEventListener('DOMContentLoaded', function() {
      let p = document.querySelector('p')
      p.textContent = 'This is really cool!'
      console.log(p);
      document.querySelector('#text').appendchild(p);
  })
