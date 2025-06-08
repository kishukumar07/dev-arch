
// database.ts

export enum DatabaseModel {
    users = "users",
    videos = "videos",
    notifications = "notifications",
}

// Interfaces and types
type DatabaseMapping =
    | { model: DatabaseModel.users; data: IUser }
    | { model: DatabaseModel.videos; data: IVideo }
    | { model: DatabaseModel.notifications; data: INotification };

interface IModel {
    id: number;
    model: DatabaseModel;
}

// Abstract base class
export abstract class Model implements IModel {
    static ID_COUNTER = 1;

    id: number;
    model: DatabaseModel;

    constructor(model: DatabaseModel) {
        this.id = Model.ID_COUNTER++;
        this.model = model;
    }
}

// User models
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
        super(name, email, "Consumer");
        this.isPremium = false;
        this.subscribedChannels = [];

        Database.Instance?.create({
            model: DatabaseModel.users,
            data: this,
        });
    }
}

interface ICreator extends IUser {
    noOfSubscribers: number;
}

export class CreatorModel extends UserModel implements ICreator {
    noOfSubscribers: number;

    constructor(name: string, email: string) {
        super(name, email, "Creator");
        this.noOfSubscribers = 0;

        Database.Instance?.create({
            model: DatabaseModel.users,
            data: this,
        });
    }
}

// Video model
interface IVideo extends IModel {
    link: string;
    title: string;
    categories: string;
    views: number;
    likes: number;
    dislikes: number;
    userID: number;
}

export class VideoModel extends Model implements IVideo {
    link: string;
    title: string;
    categories: string;
    views: number;
    likes: number;
    dislikes: number;
    userID: number;

    constructor(link: string, title: string, categories: string, userID: number) {
        super(DatabaseModel.videos);
        this.link = link;
        this.title = title;
        this.categories = categories;
        this.userID = userID;
        this.views = 0;
        this.likes = 0;
        this.dislikes = 0;

        Database.Instance?.create({
            model: DatabaseModel.videos,
            data: this,
        });
    }
}

// Notification model
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

    constructor(title: string, description: string, userID: number, hasRead: boolean) {
        super(DatabaseModel.notifications);
        this.title = title;
        this.description = description;
        this.userID = userID;
        this.hasRead = hasRead;

        Database.Instance?.create({
            model: DatabaseModel.notifications,
            data: this,
        });
    }
}

// Singleton Database
export class Database {
    private users: IUser[] = [];
    private videos: IVideo[] = [];
    private notifications: INotification[] = [];

    static Instance: Database | null = null;

    private constructor() {}

    static connect(): Database {
        if (Database.Instance == null) {
            Database.Instance = new Database();
        }
        return Database.Instance;
    }

    // Getters
    get Users() {
        return this.users;
    }

    get Videos() {
        return this.videos;
    }

    get Notifications() {
        return this.notifications;
    }

    // CRUD
    create({ model, data }: DatabaseMapping): void {
        if (model === DatabaseModel.users) {
            this.users.push(data as IUser);
        } else if (model === DatabaseModel.videos) {
            this.videos.push(data as IVideo);
        } else if (model === DatabaseModel.notifications) {
            this.notifications.push(data as INotification);
        }
    }

    read(model: DatabaseModel): IUser[] | IVideo[] | INotification[] {
        if (model === DatabaseModel.users) return this.users;
        if (model === DatabaseModel.videos) return this.videos;
        return this.notifications;
    }

    update(model: DatabaseModel, id: number, updateData: Partial<IUser | IVideo | INotification>): boolean {
        const list = this.getListByModel(model);
        const index = list.findIndex((item) => item.id === id);
        if (index !== -1) {
            list[index] = { ...list[index], ...updateData };
            return true;
        }
        return false;
    }

    delete(model: DatabaseModel, id: number): boolean {
        const list = this.getListByModel(model);
        const index = list.findIndex((item) => item.id === id);
        if (index !== -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    }

    private getListByModel(model: DatabaseModel): (IUser | IVideo | INotification)[] {
        if (model === DatabaseModel.users) return this.users;
        if (model === DatabaseModel.videos) return this.videos;
        return this.notifications;
    }
}

// ---------------------- TEST CASES ----------------------

const db = Database.connect();

const user1 = new ConsumerModel("Niket", "niket@example.com");
const user2 = new CreatorModel("John Creator", "john@example.com");

const video1 = new VideoModel("https://yt.com/vid1", "My First Video", "Gaming", user2.id);
const notif1 = new NotificationModel("Welcome!", "Thanks for joining.", user1.id, false);

console.log("All Users:", db.read(DatabaseModel.users));

db.update(DatabaseModel.users, user1.id, { isPremium: true } as Partial<IConsumer>);
console.log("Updated User:", db.read(DatabaseModel.users));

db.delete(DatabaseModel.videos, video1.id);
console.log("Videos after delete:", db.read(DatabaseModel.videos));
