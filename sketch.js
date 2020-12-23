//Create variables here
var database,dog,happyDog,foodS,foodStock
function preload()
{
  dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database()

  createCanvas(800, 700);
  dog = createSprite(600,300,150,150)
  dog.addImage(dog1)
  dog.scale = 0.50
  
  foodStock=database.ref('Food'); 
  foodStock.on("value",readStock);

}


function draw() {  
background("brown")
if(keyWentDown(UP_ARROW)){ writeStock(foodS);
   dog.addImage(happyDog); }
fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,200);
textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
drawSprites()
}

//Function to read values from DB.. 
function readStock(data){
foodS=data.val();
}

//Function to write values in DB.. 20 will decrease in x=x-1; ..first write condition then update...updatate food value to x
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
} 
database.ref('/').update({
  Food:x
})
}
  
  





