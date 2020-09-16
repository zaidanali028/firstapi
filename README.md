#A Simple Node Express API With Postgres As Its Database USing The Sequelize ORM
#Anyone Can Clone This API Tweak It ANd Use It For His Personal Or Commercial Needs

### Prerequisites
* Node src link ==> https://nodejs.org/en/download/
* Express src link==> https://www.postgresql.org/download/
* PgAdminv4 src link==>https://www.pgadmin.org/download/ (This Is Just A GUI Of Postgres)
* Postman src link ==>https://www.postman.com (For Testing Our API)
### How To Get Things Running
```
> $ npm i (Run This Command TO Install The Packages In The package.json )

```

> Create A File In Your Currernt Working Directory With The Name`.sequelizerc` And Paste These Lines Of Codes.
```
const path = require('path');

module.exports = {
  "config": path.resolve('./server/config', 'config.json'),
  "models-path": path.resolve('./server/models'),
  "seeders-path": path.resolve('./server/seeders'),
  "migrations-path": path.resolve('./server/migrations')
};
```
> Press Ctrl+ S To Save Your File
> Start Your PgAdminV4 Server.Type A Master PAssword To Secure Your Database.
> Create A New Database Called `testdb`,Press Save TO Save Your Database.
> Open The config.json file in first api working master /server/config/config.json ,Now Change The Password There To The Password You Are Using In The PgAdmin database server.Dont Forget TO Save The File.
>You Can Also Create A Database With The Psql Command Line Which Comes Together With The Postgres You Dowloaded
>Just Press The StartButton(On Windows)  And Type PSql and Create Your Database.

```
> After Creating Your Database,It Is NowTime For Migration,run
$ node_modules/.bin/sequelize db:migrate 

```

#### Testing Our Database
> Run $node index  Or $node index.js To Start Your Express Server,If You 
> Launch Postman,This Can Take Some Time Based On The Laptop In Use.
> Create A new Request In Postman.

#### The GET REQUEST
> Run A Get Request With localhost:5050/api/users/,To Get All Users In The Database,Will Return An Empty List When There Is No User.
> Run Another Get Request With localhost:5050/api/{userId}/posts'  ,To Get All The Post Titles Of A Certain User.

#### The POST REQUEST
> Run  localhost:5050/api/user/create,To Create A New User,To Do This IS Really Simple.Before Sending The Request,Under Body In POSTMAN,Select x-www-form-urlencode,This Is Mandatory So That body-parser can Parse The data In Postman After You Send The POST request.
```
  A Simple Example To Get You Up And Running..........
  In The Form Fields In POSTMAN,DO This:
    KEY                VALUE
    email: devcareerio@gmail.com
  Now Send The Request And If Everything Works Well,You Should See A New User Being Added To The Database In Postman
``` 
>>Run localhost:5050/api/post/create ,To Create A New Post.Remember To Use x-www-form-urlencode as The Body. 
```
    In The Form Fields In POSTMAN,DO This:
    KEY                VALUE
    title : A New Post Title
    userId : 1
  Now Send The Request And If Everything Works Well,You Should See A New Post Title Being Added To The Database In Postman
  ```

#### The PUT REQUEST
> A Put Request Is Used To Update An Existing USer's PostTitle,Lets Get A Quickstart Template To Start Us Up.
> Remember To Use x-www-form-urlencode as The Body.Send A PUT Request With localhost:5050/api/{postId} 
```
    In The Form Fields In POSTMAN,DO This:
    KEY                VALUE
    title : An Updated Post Title
    
  Now Send The Request And If Everything Works Well,You Should See A New Whole Title When Your Send a GET request to localhost:5050/api/{userId}/posts

```
</Thank You Very Much For Taking Time To Read My Documentation,MUCH LOVE>
</DEVELOPER==ALI USMAN ZAIDAN(Node->Backend Developer At Devcareer)>