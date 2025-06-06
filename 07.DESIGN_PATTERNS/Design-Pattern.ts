/*
Design Patterns :- 
        SOLVING COMMON SOFTWARE ENGINEERING... PROBLEMS  ....


//WHAT HAPPENS IS ... WHENVER PEOPOPLE ARE BUILDING SOME COMPLEX SOFTWARE RELATED PROBLEM THE PROBLEM ITSELF NOT BE THE SAME ...
//LETS TAKE AN EG.. LOKENDRA IS BUILDING A MOBLIE APPLICATION ...AND UPENDRA IS BUILDING A DESKTOP APPLICATION ...
//YOU GET SOME PROBLEMS YOU BREAK IT DOWN INTO SMALLER PROBLEMS AND TRY TO SOLVE IT IN SMALLER CHNCKS 
//ENGINEERS FACED THAT ...THEY ARE FACING SOME COMMON CHALLANGE WHILE BUILDING APPS FOR DIFF PLATEFORMS ...
//TO TACKEL THIS COMMON PROBLEM THEY ARE FACING THEY BUILD SOMETHING KNOWN AS DESIGN PATTERNS ... 


//USING THIS DESIGN PATTERNS I CAN SOLVE SOME COMMON SOFTWARE ENGINEERING PROBLEMS 
    
there are lot of design patterns... 
                                            ___________________________
                                                 DESIGN PATTERNS
                                            _____________________________
                                        /        /          \              \
   
                                    /          /               \              \
                                  
                       Creational          structural        Behavioral      Architectural 
                     design pattern       design pattern   design pattern   design pattern           
                         \                        |                |              |
                         \                       |                 |              |
                     singleton pattern            |                |               |
                        \                        |               Observer          | 
                        \                         |                Pattern          |
                        \                        |                                 |
                     Factory Pattern        FacadePattern                      MVC pattern
                        \
                        \
                     Builder Pattern

                   
          

4.Architectural design : - pattern your whole structure(application) depends on   (type-mvc)        


*/




// 1.Creational design patterns are about how to create objects .

/*

   
i> singleton creational design pattern  -> One Instance OUT of A class. 
                        eg. express instance 
                            const app = express(); 
                        eg. const sequelize = new Sequelize();  
                        eg. const connection = mongoose.connect("urlhere"); 
                             
*/


//we want only one instance ... 
class Database {
    url: string;
    //we make the constructor itself private ...
    static Instance: Database | null = null;    //one is type and other is value . 

    private constructor(url: string) {
        this.url = url;
    }
    create() {
        console.log("ok")
    }

    //we created this static property... 
    static connect(url: string) {

        if (Database.Instance !== null) {  //for tracking purpose
            return Database.Instance;
        }

        const db = new Database(url);  //privet keyword allows to use property within the class only . 
        Database.Instance = db; //upgrading flag

        return Database.Instance;
    }

}


// const db = new Database("urldfaf343ff");
//if constructor of superclass is privet we cannot create any instance now ... 
// we create static connect fun there which is returning instance for us

// how can we connect the static property 

const db = Database.connect("urlxdsfsadf/dbname");  //have you ever saw the same code somewhere... haaha ... 
//   Database.connect(" ")
//again it will create another instance dont you think
//so whats the solution => keep counter track ... 

//after some modification line 62/73/78 

const db2 = Database.connect("dfsaf");
console.log(db, db2); //both will have same instance ...ie we got our goal ..


//SINGLE TON PATTERN IS VERY MUCH USED IN INDUSTRY STANDARD... 











/*


II>. FACTORY CONSTRUCTIVE DESIGN PATTERN .... 
                a way to create objects without knowing exactly which type of object will be created



you remember pagination...

let skipCount = (page * number_of_documents_per_page) - number_of_documents_per_page;
// or simply
let skipCount = (page - 1) * number_of_documents_per_page;


    userModel.find().skip(x).limit(page);  //mongoose 
    or 
    collectionname.find().skip.limit  //cli 

can we use limit() without skip()  => yes ofc ..
      
     userModel.find().limit(page);



*/




