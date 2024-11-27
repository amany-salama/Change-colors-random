window.onload=function()
{
    let arrcolors=['red', 'green', 'blue', 'yellow', 'cyan', 'orange', 'pink'];
    function getcolor()
    {
        let bgcolorindex=Math.trunc(Math.random(arrcolors)*arrcolors.length);
        return arrcolors[bgcolorindex];}
     
    let bgcolorindex = Math.trunc(Math.random() * arrcolors.length);
    let butt=document.getElementsByClassName('btn')[0];
    console.log(butt)
    console.log(bgcolorindex)
    butt.addEventListener('click',changeBackgroundColor);

    function changeBackgroundColor() {
       let rancol= document.body.style.backgroundColor = getcolor();
       document.querySelector(".colortxt").textContent=`Background Color:${rancol}`;
       if (rancol=='red')
        {
            butt.removeEventListener('click',changeBackgroundColor)
            document.body.style.backgroundColor='pink'
            document.querySelector(".colortxt").textContent=`I Changed the Background Color from: ${rancol} to: pink`;
            butt.addEventListener('click',changeBackgroundColor);

        }

         }
    }
       

