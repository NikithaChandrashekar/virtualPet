class Food{

    constructor(){

        this.milk=loadImage("images/Milk.png");

        this.foodStock=10;
        this.lastFed=0;

    }

    display(){ 

        imageMode(CENTER);
        var x=100
        var y=200
        
        for(var i=0;i<this.foodStock;i++){

            image(this.milk,x,y,70,70);
            x+=40

        }

        
    }

    getFoodStock(){

        return this.foodStock;
    
    }

    updateFoodStock(foodStock){

    this.foodStock=foodStock;

    }

    deductFood(){

        if(foodStock>0){
            this.foodStock-=1;
        }

    }

}