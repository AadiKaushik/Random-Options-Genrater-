
var gameState = 0
var optons =[];
var options =[];
var doo = true
var next;
var titleImage
var h,s,f = true
function preload()
{
titleImage =loadImage("t.png");
s = loadSound("0114. Emotions - AShamaluevMusic.mp3")
}

function setup()
{
  ff =createElement('h1')  
  ff.html("This is app will help you to make very important decision in");
  ff.position(20,100);
  
  fw =createElement('h1')
  fw.html(" life with absolutely randomness.");
  fw.position(20,125);

  c = createElement('h1')
  c.html("Or make use it as tie breaker  ");
  c.position(20,170);
   
  b =createElement('h1')
b.html("like:- that car or this car ,that thing or this thing")
b.position(20,200)

  
  
  inp = createInput("0");
    inp.position(10,330);

createCanvas(900,350);
     
h =createElement('h2');
h.html("How many possibiltes would you like ???");
 h.position(10,270) ;


}

function draw()
{
   
 if(f === true)
 {
  s.play();
f = false 
}
    image(titleImage,0,0,800,100);
    if(gameState===0){
      form1();
    }


    if(keyCode===13)
    {
     
      gameState=1
    }


if(gameState===1)
{
  inp.hide();
if(doo===true)
{

  form2();
doo=false
}
}
  

   
}


function form1(){
  inp.show();
h.show();

}

function form2 ()

{
  h.hide();
t =createElement('h2');
t.html("write the options and click on next")
t.position(10,280)
  makeButton(inp.value());
}

function makeButton(num)
{
   next= createButton("next");
   next.position(10,380)
    for(var i=0;i<num;i++){
        optons.push(createInput(""))
      }
  next.mousePressed(()=>{
    for (var i = 0 ; i < optons.length;i++)
    {
      options.push(optons[i].value())
    }
    makeRAndom();
    g1 =createElement('h3');
    g1.html("Press refresh to start all over again !!");
    g1.position(10,600);
      })
    

  }

 function makeRAndom()
{
  next.hide();
var pusher =  Math.round(random(0,options.length-1));

g =createElement('h2');
g.html("Random Answer Is : " + options[pusher]);
g.position(10,420);

i =createElement('h2');
i.html("Press On Retry To get a Answer Again ");
i.position(10,460);

j = createButton('Retry');
j.position(10,530);

j.mousePressed(()=>{
 var fdd = Math.round(random(0,options.length-1));
  g =createElement('h2');
  g.html("Random Answer Is : " + options[fdd]);
  g.position(10,540);
  j.hide();

   g1 =createElement('h2');
  g1.html("But you did cheat !!");
  g1.position(10,570);


})
}
