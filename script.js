//ask for size
const sizeButton= document.querySelector('.number-size');
let size=0;
//populating square divs
const dContainer = document.querySelector('.draw-container');
sizeButton.addEventListener('click',()=>
  {   
    do
    {
      size=prompt("Type a number in range of  1 to 100");
    }
    while(size <1  || size > 100 || isNaN(size) );
    let calcSize = 100/size;

    //populate
    for(let i=0; i < size*size; i++)
    {
      console.log(size);
      let  sContainer = document.createElement('div');
      sContainer.classList.add('small-container');
      sContainer.style.cssText=`display:flex;width:${calcSize}%;height:${calcSize}%;
       background-color: orange;`
      dContainer.appendChild(sContainer);

    }

  })






