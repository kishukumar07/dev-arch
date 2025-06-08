export class Model { }
export class UserModel { }
export class ConsumerModel { }



export class CreatorModel { }
export class VideoModel { }



export class NotificationModel { }



export class Database {
    

    static Instance: Database | null = null;

    private constructor(url:string) { 



    }  //singleton model 



    static connect(url:string) {   
        if(Database.Instance == null) {
            return Database.Instance = new Database(url); 
        }
        return Database.Instance ; 
    }

}








