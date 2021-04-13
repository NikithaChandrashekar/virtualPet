class Form{

    constructor(){

        this.dogNameInput=createInput("Name Your Dog");
       this.confirmPetName=createButton("Confirm Name ");
    }

    display(){

        this.dogNameInput.position(80,100);
        this.confirmPetName.position(120,430);
    }
}