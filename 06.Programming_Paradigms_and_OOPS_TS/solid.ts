/*
 PROGRAMMING PARADIGMS (SILENT G)...

 in oop there are some famus scientist who have defined some rules ... based on that we should be defining our classes. 

we call it solid rule "SOLID"...
SOLID 
-SINGLE RESPONSIBLITY PRINCIPLE 
-OPEN CLOSE PRINCIPLE
-LISKOV SUBSTITUTION PRINCIPLE
-INTERFACE SEGREGATION PRINCIPLE
-DEPENDENCY INVERSION PRINCIPLE 

THE SOLID PRINCIPLES ARE WRITTEN SPECIFICALLY FOR OBJECT ORIENTED PROGRAMMING...

the eg that we'll going to take should be from oop
but we'll going with normal functional programming ...
*/

// 1.S-> SINGLE RESPONSIBLITY PRINCIPLE 
// ONE CLASS HAVE should have ONE RESPONSIBLITY... thats it ! 
class student {
    constructor() {
        //define the keys here 
    }
    register() { }
    sendEmail() { }
    give_sssignments() { }
}
//this class has a lot of responsiblity ...
//what will be the problem ...
//the class will become itself verymuch complex if every
//and only students will send email or other class can send 
//this is not only specific to student it is required for everyOne.
//so dont you think we should declare the sendEmail wla function in global class or it should be a global function  ... 




// 2.O -> Open Close Principle
//code should be open for extension but closed for modification .
class player {
    constructor() {
        //Define the key here
    }

    //swords man 
    slash() { }

    //Archer
    snipe() { }

    //Assasin 
    poison() { }

}

//if we have to add another method inside the class  we  have to further modify the class 

// think like that if there is 100billions lines of code and you have to update the lines ..it will take the years of time
//so for that reason ...How should we structure this class 

class player_ {
    constructor() { }
}

class swordmen extends player {
    constructor() {
        super();
    }
    slash() { };  //this is how we update the class 100%
}




//3.L ->liscov Substitution Principle   
//if you can't replace the child class with the parent class you shouldnot make that inheritance  

class Rectacngle {
    width: number;
    height: number;

    constructor(width: number,
        height: number) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

}


// can we say that a cube is a rectangle where the height and width are same  heihgt===width rectangle ===square 

class Square extends Rectacngle {
    constructor(width: number) {
        super(width, width);
    }

    setWidth(width: number) {
        this.width = width;
        this.height = width;
    }

    setHeight(height: number) {
        this.height = height;
        this.width = height;
    }

}



const sq = new Square(5);
console.log(sq.area()) //25 
sq.setHeight(6);
console.log(sq.area()); //36 should be the ans



//lets do the same thing with the rectangle...

const rec = new Rectacngle(5, 5); //should line 126 and 136 are same things .....Y
rec.setWidth(6);               //after this the rectangle !=squire  
console.log(rec.area());  // 30  



// liskov principle  -can i replace square class by rectangle class just by passing the parameters ... noo paractically line 129 -so here inheritance should be the wrong thing...







//I -> Interface Segrigation Principe   

//a interface is a structur for class...
//a class is structure for object ...
//INTERFACE ->>CLASS => OBJECT ... 
//the only benifit of a interface is that while creating an class we dont missout any properties that is defined inside interface ...  


/*

//this I keyword indicated interface 
interface IEntity {
    //all classes have these  fields 
    level: number;
    attack: number;
    //only player has only this field
    levelup?: Function;               //optional 
    //only enemy can have followme field 
    followPlayer?: Function;          //optional 


}


class Player implements IEntity {
    level: number;
    attack: number;


    constructor(level: number, attack: number) {
        this.level = 1;
        this.attack = 10;
    }

    levelup() {

    }

}

class Enemies implements IEntity {

    level: number;
    attack: number;


    constructor(level: number, attack: number) {
        this.level = 1;
        this.attack = 10;
    }

    followPlayer() {

    }
}



*/


//ISSUE 1:  without making a field optional in interface if we want only  to implemented on some or specific class not all ...it will give err ..(interface wala problem) ...

//ISSUE2: one more thing is there if there two common properties which is common for all class --> we will have to create a parent class for that dont you think ... like for level and attack wla properties.. but dont mind about that cause we are disscussing here about interface wla part ....  not super class 



//this I keyword indicated interface 
interface IEntity {
    //all classes have these  fields 
    level: number;
    attack: number;
    //removed optional types from here 

}


//built new interface for class player that used  inheritance 
//we can also extends interfaces ... this is a very big advantage 
interface Iplayer extends IEntity {
    levelup(): void;
}

///simlarly 
interface IEnemy extends IEntity {
    followPlayer(): void;
}




class Player implements Iplayer {   //rather that implementing IEntity   implementing Iplayer
    level: number;
    attack: number;


    constructor(level: number, attack: number) {
        this.level = 1;
        this.attack = 10;
    }

    levelup() {

    }

}

class Enemies implements IEnemy {   //rather that implementing IEntity   implementing Iplayer

    level: number;
    attack: number;


    constructor(level: number, attack: number) {
        this.level = 1;
        this.attack = 10;
    }

    followPlayer() {

    }
}


// previously there was one single interface which were used for all the classes but due to it was nto dynamic ... we'll   used inheritance on interfaces and used diff  sub_interfaces accordingly    ...



























