"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.NotificationModel = exports.VideoModel = exports.CreatorModel = exports.ConsumerModel = exports.UserModel = exports.Model = exports.DatabaseModel = void 0;
var DatabaseModel;
(function (DatabaseModel) {
    DatabaseModel["users"] = "users";
    DatabaseModel["videos"] = "videos";
    DatabaseModel["notifications"] = "notifications";
})(DatabaseModel || (exports.DatabaseModel = DatabaseModel = {}));
class Model {
    constructor(model) {
        this.id = Math.random();
        this.model = model;
    }
}
exports.Model = Model;
class UserModel extends Model {
    constructor(name, email, type) {
        super(DatabaseModel.users);
        this.name = name;
        this.email = email;
        this.type = type;
    }
}
exports.UserModel = UserModel;
class ConsumerModel extends UserModel {
    constructor(name, email) {
        var _a;
        super(name, email, "Consumer"); //>constructor of the parent  
        this.isPremium = false;
        this.subscribedChannels = [];
        (_a = Database.Instance) === null || _a === void 0 ? void 0 : _a.create({
            model: DatabaseModel.users,
            data: {
                id: this.id,
                model: this.model,
                email: this.email,
                type: this.type,
                name: this.name
            },
        });
    }
}
exports.ConsumerModel = ConsumerModel;
class CreatorModel extends UserModel {
    constructor(name, email) {
        super(name, email, "Creator");
        this.noOfSubscribers = 0;
    }
}
exports.CreatorModel = CreatorModel;
class VideoModel extends Model {
    constructor(link, title, categories, userID) {
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
exports.VideoModel = VideoModel;
class NotificationModel extends Model {
    constructor(title, description, userID, hasRead) {
        super(DatabaseModel.notifications);
        this.title = title;
        this.description = description;
        this.userID = userID;
        this.hasRead = hasRead;
    }
}
exports.NotificationModel = NotificationModel;
class Database {
    constructor(url) {
        this.users = [];
        this.videos = [];
        this.notifications = [];
    } //singleton model 
    //getter wla part 
    get Users() {
        return this.users;
    }
    get Videos() {
        return this.videos;
    }
    get Notifications() {
        return this.notifications;
    }
    //crud  wala part
    // Create -Upsert -Delete
    create({ model, data }) {
        if (model === DatabaseModel.users) {
            this.users.push(data);
        }
        else if (model === DatabaseModel.videos) {
            this.videos.push(data);
        }
        else if (model === DatabaseModel.notifications) {
            this.notifications.push(data);
        }
    }
    static connect(url) {
        if (Database.Instance == null) {
            return Database.Instance = new Database(url);
        }
        return Database.Instance;
    }
}
exports.Database = Database;
Database.Instance = null;
