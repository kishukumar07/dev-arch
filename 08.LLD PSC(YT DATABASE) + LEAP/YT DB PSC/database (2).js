"use strict";
// database.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.NotificationModel = exports.VideoModel = exports.CreatorModel = exports.ConsumerModel = exports.UserModel = exports.Model = exports.DatabaseModel = void 0;
var DatabaseModel;
(function (DatabaseModel) {
    DatabaseModel["users"] = "users";
    DatabaseModel["videos"] = "videos";
    DatabaseModel["notifications"] = "notifications";
})(DatabaseModel || (exports.DatabaseModel = DatabaseModel = {}));
// Abstract base class
class Model {
    constructor(model) {
        this.id = Model.ID_COUNTER++;
        this.model = model;
    }
}
exports.Model = Model;
Model.ID_COUNTER = 1;
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
        super(name, email, "Consumer");
        this.isPremium = false;
        this.subscribedChannels = [];
        (_a = Database.Instance) === null || _a === void 0 ? void 0 : _a.create({
            model: DatabaseModel.users,
            data: this,
        });
    }
}
exports.ConsumerModel = ConsumerModel;
class CreatorModel extends UserModel {
    constructor(name, email) {
        var _a;
        super(name, email, "Creator");
        this.noOfSubscribers = 0;
        (_a = Database.Instance) === null || _a === void 0 ? void 0 : _a.create({
            model: DatabaseModel.users,
            data: this,
        });
    }
}
exports.CreatorModel = CreatorModel;
class VideoModel extends Model {
    constructor(link, title, categories, userID) {
        var _a;
        super(DatabaseModel.videos);
        this.link = link;
        this.title = title;
        this.categories = categories;
        this.userID = userID;
        this.views = 0;
        this.likes = 0;
        this.dislikes = 0;
        (_a = Database.Instance) === null || _a === void 0 ? void 0 : _a.create({
            model: DatabaseModel.videos,
            data: this,
        });
    }
}
exports.VideoModel = VideoModel;
class NotificationModel extends Model {
    constructor(title, description, userID, hasRead) {
        var _a;
        super(DatabaseModel.notifications);
        this.title = title;
        this.description = description;
        this.userID = userID;
        this.hasRead = hasRead;
        (_a = Database.Instance) === null || _a === void 0 ? void 0 : _a.create({
            model: DatabaseModel.notifications,
            data: this,
        });
    }
}
exports.NotificationModel = NotificationModel;
// Singleton Database
class Database {
    constructor() {
        this.users = [];
        this.videos = [];
        this.notifications = [];
    }
    static connect() {
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
    read(model) {
        if (model === DatabaseModel.users)
            return this.users;
        if (model === DatabaseModel.videos)
            return this.videos;
        return this.notifications;
    }
    update(model, id, updateData) {
        const list = this.getListByModel(model);
        const index = list.findIndex((item) => item.id === id);
        if (index !== -1) {
            list[index] = Object.assign(Object.assign({}, list[index]), updateData);
            return true;
        }
        return false;
    }
    delete(model, id) {
        const list = this.getListByModel(model);
        const index = list.findIndex((item) => item.id === id);
        if (index !== -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    }
    getListByModel(model) {
        if (model === DatabaseModel.users)
            return this.users;
        if (model === DatabaseModel.videos)
            return this.videos;
        return this.notifications;
    }
}
exports.Database = Database;
Database.Instance = null;
// ---------------------- TEST CASES ----------------------
const db = Database.connect();
const user1 = new ConsumerModel("Niket", "niket@example.com");
const user2 = new CreatorModel("John Creator", "john@example.com");
const video1 = new VideoModel("https://yt.com/vid1", "My First Video", "Gaming", user2.id);
const notif1 = new NotificationModel("Welcome!", "Thanks for joining.", user1.id, false);
console.log("All Users:", db.read(DatabaseModel.users));
db.update(DatabaseModel.users, user1.id, { isPremium: true });
console.log("Updated User:", db.read(DatabaseModel.users));
db.delete(DatabaseModel.videos, video1.id);
console.log("Videos after delete:", db.read(DatabaseModel.videos));
