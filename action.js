
let turn='X'
let turn_who=document.getElementById("tit")
let contamer=document.getElementById("contaner")
let leter_X_O=[];
let playAgen=document.getElementById('playAgen')
let scor=[]
let x;

contamer.addEventListener('click',e=>
{
    if(e.target.nodeName=="BUTTON")
    { 
       
        if(turn=="X"&&e.target.textContent=='')
        {
            e.target.textContent="X"
            e.target.style.color='red'

             nextTun(turn) 
            leter_X_O.push(e.target)
            
             nextDelet(leter_X_O.length)
             winner()
             
        }
        else if(turn=="O"&&e.target.textContent=="")
        {
            e.target.textContent="O"
            e.target.style.color='blue'
           nextTun(turn) 
             leter_X_O.push(e.target)  
             nextDelet(leter_X_O.length)
             winner()
        }
    playAgen.onclick=function()
{
    reSet(scor)
}
    }

    }

)
function nextTun(t)
{
    if(t=='X')
    {
        turn='O'
        turn_who.textContent="O"
    }
    else
    {
    turn="X"
    turn_who.textContent="X"
    }
    return t;
}
function nextDelet(len)
{
    if(len==7)
    {
     x=leter_X_O.shift()
      x.style.opacity=''
      x.textContent='';
      len--;
    }
   if(len==6)
   {
    leter_X_O[0].style.opacity='0.7'
   }
}
function winner()
{
   for(let i=1;i<10;i++)
   {
     scor[i]=document.getElementById('item' + i)

   }
  
    if(scor[1].textContent==scor[2].textContent&&scor[2].textContent==scor[3].textContent &&scor[1].textContent!='')
    {
       for(let i=1;i<4;i++)
       {
        scor[i].style.backgroundColor='greenyellow'
       }
      notefoction()
    }
    if(scor[4].textContent==scor[5].textContent&&scor[5].textContent==scor[6].textContent &&scor[4].textContent!='')
    {
        for(let i=4;i<7;i++)
        {
            scor[i].style.backgroundColor='greenyellow'
        }
        notefoction()
    }
    if(scor[7].textContent==scor[8].textContent&&scor[8].textContent==scor[9].textContent &&scor[7].textContent!='')
    {
        for(let i=7;i<10;i++)
        {
            scor[i].style.backgroundColor='greenyellow'
        }
        notefoction()
    }
    if(scor[1].textContent==scor[4].textContent&&scor[4].textContent==scor[7].textContent &&scor[1].textContent!='')
    {
        for(let i=1;i<8;i+=3)
        {
            scor[i].style.backgroundColor='greenyellow'
        }
        notefoction()
    }
    if(scor[2].textContent==scor[5].textContent&&scor[5].textContent==scor[8].textContent &&scor[2].textContent!='')
    {
        for(let i=2;i<9;i+=3)
        {
            scor[i].style.backgroundColor='greenyellow'
        }
        notefoction()
    }
    if(scor[3].textContent==scor[6].textContent&&scor[6].textContent==scor[9].textContent &&scor[3].textContent!='')
    {
        for(let i=3;i<10;i+=3)
        {
            scor[i].style.backgroundColor='greenyellow'
        }
        notefoction()
    }
    if(scor[1].textContent==scor[5].textContent&&scor[5].textContent==scor[9].textContent &&scor[1].textContent!='')
    {
        for(let i=1;i<10;i+=4)
        {
            scor[i].style.backgroundColor='greenyellow'
        }
        notefoction()
    }
    if(scor[3].textContent==scor[5].textContent&&scor[5].textContent==scor[7].textContent &&scor[3].textContent!='')
    {
        for(let i=3;i<8;i+=2)
        {
            scor[i].style.backgroundColor='greenyellow'
        }
        notefoction()
    }


}
function reSet(scorGame)
{
    scorGame.forEach(function(s)
{
    s.textContent='';
    s.style.backgroundColor='white'
    s.style.opacity=''
    s.style.color='black'
     leter_X_O.shift()
})
turn="X"
turn_who.textContent=turn
}
function notefoction()
{
 Swal.fire({
  title: "لعب مرة اخرا",
  text: "",
  icon: "info",
  showCancelButton: true, // يعرض زر الإلغاء
  confirmButtonText: "نعم", // نص زر التأكيد
  cancelButtonText: "إلغاء", // نص زر الإلغاء
  reverseButtons: true // (اختياري) يعكس ترتيب الأزرار
}).then((result) => {
  if (result.isConfirmed) {
    
    reSet(scor)

  }
});
}