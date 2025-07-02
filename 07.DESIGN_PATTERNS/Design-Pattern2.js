"use strict";
/*2.STRUCTURAL DESIGN PATTERN ...
 
 I>.FACADE PATTERN ...
         //   like parcel at house door
  basically whenever you have a lot of complex code and in many places we have to use the similar code what we'll do ... we'll create a function or a facade about it and without worring about what is is inside the function.

//this kind of things (FACEDE PATTERN ) we have doing it since a lot of time..
     //eg .displaying data on dom ...
     //middlewares are one of the examples...

*/
/*
  3. BEHAVIORAL DESIGN PATTERN

  I. Observer Behavioral Design Pattern

  // It is used when one object (called **Subject**) maintains a list of dependents (called **Observers**)
  // and notifies them automatically of any state changes, usually by calling one of their methods.

  // Real-life Example: YouTube Notifications

  // - Subscribers (Observers) are watching the channel (Subject).
  // - When the channel uploads a new video, all subscribers get notified.
  // - If you're not subscribed, you have to manually check for new videos.


  // In code terms, the **CodeWithHarry** channel is the Subject,
  // and YouTube subscribers are the Observers.
“CodeWithHarry channel is the Subject, and it maintains a list of dependents (Observers)”
doesn't mean that CodeWithHarry himself is managing a list of subscribers directly.
  CodeWithHarry (Subject) doesn’t maintain the list — YouTube does, as part of implementing the Observer pattern.
  */
// a little bit implementations with classes....
//PUB-SUB-MODEL(feature built in redis for  notifications 2 the users  ...can explore)
class channel {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
        this.videos = [];
    }
    subscribe(user) {
        this.subscribers.push(user);
    }
    upload(video) {
        this.videos.push(video);
        this.subscribers.forEach((user) => {
            user.notifications.push(video);
        });
    }
}
class Use_r {
    constructor(name, email) {
        this.email = email;
        this.name = name;
        this.notifications = [];
    }
}
// 4.mvc you already learnt it ...
