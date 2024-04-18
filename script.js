//ask for size
const sizeButton= document.querySelector('.number-size');
let size=0;
let resetFlag=1;
let clickFlag=1;
let colorFlag="black";
//populating square divs
const dContainer = document.querySelector('.draw-container');
//check for click on draw area listener
dContainer.addEventListener('click',()=>
{
  if(clickFlag>0)
  {
    clickFlag=0;
    console.log("draw area clicked");
  }
  else
  {
    clickFlag=1;
  }
})
dContainer.addEventListener('mouseover',()=>
{
  dContainer.setAttribute('style','cursor:cell');
})


sizeButton.addEventListener('click',()=>
  {  
    if(resetFlag>0)
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
        // console.log(size);
        let  sContainer = document.createElement('div');
        sContainer.classList.add('small-container');
        sContainer.style.cssText=`width:${calcSize}%;height:${calcSize}%;
        background-color: white; opacity:0.0;`
        dContainer.appendChild(sContainer);
      }
      //setting flag
      resetFlag=0;
      
      //drawing mechanism
      //add onmousedown listener

      let pixels = document.querySelectorAll('.small-container');
      pixels.forEach((pixel)=>
      {
        let opacity= parseFloat('0.0');
          pixel.addEventListener('mouseover',()=>
        {
          if(clickFlag<1)
          {
            if(opacity < 1.0)
            {
              opacity += 0.1;
              opacity = Math.round(opacity * 100)/100;
            }
            
            console.log(opacity);
            pixel.style.cssText=`width:${calcSize}%;height:${calcSize}%;
            background-color: ${colorFlag}; opacity:${opacity};`
            console.log("mousedown");
          }
          
          
        })
      })
    }
    else
    {
      
      // remove squares
      while(dContainer.firstChild)
      {
        dContainer.removeChild(dContainer.lastChild);
      }
      //populating new
      do
      {
        size=prompt("Type a number in range of  1 to 100");
      }
      while(size <1  || size > 100 || isNaN(size) );
      let calcSize = 100/size;

      //populate
      for(let i=0; i < size*size; i++)
      {
        // console.log(size);
        let  sContainer = document.createElement('div');
        sContainer.classList.add('small-container');
        sContainer.style.cssText=`width:${calcSize}%;height:${calcSize}%;
        background-color: ${colorFlag};opacity:0.0;`
        dContainer.appendChild(sContainer);
      }
      //setting flag back
      resetFlag=0;
      //drawing mechanism
      //add onmousedown listener

      let pixels = document.querySelectorAll('.small-container');
      pixels.forEach((pixel)=>
      {   
        let opacity= 0.0;
          pixel.addEventListener('mouseover',()=>
        { 
          if(clickFlag>0)
          {
            if(opacity < 1.0)
            {
              opacity += 0.1;
              opacity = Math.round(opacity * 100)/100;
            }
            
            console.log(opacity);
            pixel.style.cssText=`width:${calcSize}%;height:${calcSize}%;
            background-color: ${colorFlag}; opacity: ${opacity};`
            console.log("mousedown");
          }
          
          
        })

      })

      
      
    }
  })

console.log(resetFlag)
//drawing mechanism
//add onmousedown listener
if(resetFlag<1)
{
  let pixels = document.querySelectorAll('.small-container');
    pixels.forEach((pixel)=>
  {
      pixel.addEventListener('click',()=>
    {
      pixel.setAttribute("style", "background-color: black;" );
      console.log("mousedown");
      
    })

  })
}
//palette listener
const colors=document.querySelectorAll('.color');
colors.forEach((color)=>
{
  color.addEventListener('click', ()=>
{ console.log(color.id);
  switch(color.id)
  {
    case 'white':
      colorFlag="white";
      console.log("colordupy");
      break;
    case 'red':
      colorFlag="red";
      break;
    case 'green':
      colorFlag="green";
      break;
    case 'blue':
      colorFlag="blue";
     break;
    case 'yellow':
      colorFlag="yellow";
     break;
    case 'orange':
      colorFlag="orange";
       break;
    case 'pink':
      alert("Pedał!");
      break;
    default:
      colorFlag="black";
  }
})
})
//change coursor
  
   






