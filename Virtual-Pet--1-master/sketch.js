var dog , happyDog,dogImg1,dogImg2;
var database;
var foodS, foodStock;
var stock,food;
var petNameForm;
var feed,addFood;

function preload(){
  dogImg1=loadImage("images/dogImg.png");
  dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000,500);
  dog=createSprite(800,250);
  dog.addImage(dogImg1);
  dog.scale=0.3;
  database=firebase.database();
  foodStock=database.ref('foodStock');
  foodStock.on("value",readStock);
  //petNameForm =new Form();
  food=new Food();
  
  addFood=createButton("Add Food");
  addFood.position(800,100);
  addFood.mousePressed(addFood)
  feed=createButton("Feed Dog");
  feed.position(1000,100);
  feed.mousePressed(feedDog)
  
}

function draw() {
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    foodS=stock-1;
    writeStock(foodS);
    dog.addImage(dogImg2);   
  }
  food.display();

  drawSprites();
  textSize(15);
  fill("black");
  text("Note:Press 'Feed Dog' button to feed the dog",70,50);
  //petNameForm.display();
  if(stock!==undefined){
    console.log(stock);
    textSize(20);
    fill("black");
    stroke("black");
    text("Food Remaining:"+stock,150,100); 
   }
}

function readStock(data){
   stock=data.val();
}

function writeStock(x){
  database.ref('/').update({
    foodStock:x
   })
  }

  function addFood(){
    stock++;
    database.ref('/').update({
      foodStock:stock
    })
  }

  function feedDog(){
    dog.addImage(dogImg2);

    food.updateFoodStock(food.getFoodStock()-1);
    database.ref('/').update({
      foodStock:food.getFoodStock()
    })



  }


