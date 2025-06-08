export enum DatabaseModel {
    users = "users",
    videos = "videos",
    notifications = "notifications",
}


//for furtherusecase
type DatabaseMapping= {
    model :DatabaseModel.users; 
    data: IUser ; 

} | {
    model:DatabaseModel.videos; 
    data:IVideo; 

}|{
    model:DatabaseModel.notifications;
    data:INotification; 
}





interface IModel {
    id: number;
    model: DatabaseModel;
}



export abstract class Model implements IModel {
    id: number;
    model: DatabaseModel;

    constructor(model: DatabaseModel) {
        this.id = Math.random();
        this.model = this.model;
    }

}


interface IUser extends IModel {
    name: string;
    email: string;
    type: "Consumer" | "Creator";

}


export abstract class UserModel extends Model implements IUser {
    name: string;
    email: string;
    type: "Consumer" | "Creator";

    constructor(name: string, email: string, type: "Consumer" | "Creator") {
        super(DatabaseModel.users);
        this.name = name;
        this.email = email;
        this.type = type;
    }

}


interface IConsumer extends IUser {
    isPremium: boolean;
    subscribedChannels: number[];

}


export class ConsumerModel extends UserModel implements IConsumer {

    isPremium: boolean;
    subscribedChannels: number[];

    constructor(name: string, email: string) {
        super(name, email, "Consumer");//>constructor of the parent  
        this.isPremium = false;
        this.subscribedChannels = [];
      
        Database.Instance?.create({
          model: DatabaseModel.users,
          data: {
            id:this.id,
            model :this.model,
            email:this.email,
          type :this.type,
          name:this.name
        
          } ,
        });
    }

}


interface Icreator extends IUser {
    noOfSubscribers: number;
}

export class CreatorModel extends UserModel implements Icreator {
    noOfSubscribers: number;
    constructor(name: string,
        email: string
    ) {
        super(name, email, "Creator");
        this.noOfSubscribers = 0;
    }

}



interface IVideo extends IModel {
    link: string;
    title: string;
    categories: string;
    views: number;
    likes: number;
    dislikes: number;
    userID: number; //? The Creator's id 
}


export class VideoModel extends Model implements IVideo {
    link: string;
    title: string;
    categories: string;
    views: number;
    likes: number;
    dislikes: number;
    userID: number;

    constructor(link: string,
        title: string,
        categories: string,
        userID: number) {
        super(DatabaseModel.videos);

        this.link = link;
        this.title = title;
        this.categories = categories;
        this.userID = userID;
        this.views = 0;
        this.likes = 0;
        this.dislikes = 0;
    }

}


interface INotification extends IModel {
    title: string;
    description: string;
    userID: number;
    hasRead: boolean;

}

export class NotificationModel extends Model implements INotification {

    title: string;
    description: string;
    userID: number;
    hasRead: boolean;

    constructor(title: string,
        description: string,
        userID: number,
        hasRead: boolean) {
        super(DatabaseModel.notifications);

        this.title = title;
        this.description = description;
        this.userID = userID;
        this.hasRead = hasRead;
    }


}









export class Database {
 private   users: IUser[]; //User Interface  
  private  videos: IVideo[] ;
   private  notifications:INotification[];

    static Instance: Database | null = null;

    private constructor(url: string) {
        this.users = [];
        this.videos = [];
        this.notifications = [];

    }  //singleton model 



//getter wla part 

get Users(){
    return this.users; 
}

get Videos(){
    return this.videos; 
}

get Notifications(){
    return this.notifications; 
}

//crud  wala part
// Create -Upsert -Delete


create({model,data}:DatabaseMapping){
    if(model ===DatabaseModel.users){
       this.users.push(data);        
    }else if(model ===DatabaseModel.videos){
      this.videos.push(data);
    }else if(model === DatabaseModel.notifications){
      this.notifications.push(data);
    }

}



    static connect(url: string) {
        if (Database.Instance == null) {
            return Database.Instance = new Database(url);
        }
        return Database.Instance;
    }

}








