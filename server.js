/**
 * @instruction
 * 1. *このファイルにあらかじめ書かれている定義がそれぞれ何を意味しているのかコメントに説明を書く
 * 2. 全部のポケモンを返すエンドポイントを作成する
 * 3. ポケモンを追加するエンドポイントを作成する
 * 4. ポケモンを削除するエンドポイントを作成する
 * 5. ポケモンの名前を変更するエンドポイントを作成する
 * 6. query を使用して、指定した名前のポケモンのデータを返すエンドポイントを作成する
 * 7. parameter を使用して、指定した id のポケモンを返すエンドポイントを作成する
 * 8. 使用したそれぞれのメソッドのドキュメントをコメントに書く (line: 21-22)
 * GET: retrieve info, POST: create a resource, PUT: update a resource, DELETE: delete a resource
 * 9.  Week5 のアセスメントを見返して、Knex.js を使用してデータベースに接続する 
 * 10.???? req.body　, req.query ?KEY=VALUE, req.params /:VALUE
 */



const knex = require("./knex");
const express = require("express");
//importing express

// Importing JSON data
const port = 3000
//setting port number 3000

const app = express();
/* Calls the express function "express()" and puts new Express application 
inside the app variable (to start a new Express application). 
It's something like you are creating an object of a class. 
Where "express()" is just like class and app is it's newly created object.*/

app.use(express.json());//body にユーザーのリクエストが入ることがある、それをparse suruことでボディの情報を受け取ることができる
//middlewareを指定するもの middleware function (req,res,next)　expressがくれたミドルウエア

const logger = (req, res, next) => {
    console.log("hello!");
    next();//oteseinomonoha next()woyobu 自分で作ったミドルウェア
}

//init middleware
app.use(logger);

app.get("/", (req, res) => {
    // Get method get data
    // https://expressjs.com/ja/api.html#res.send
    res.json({ message: "Hello World!" });//

    //returning Json response
});

app.get("/items", async (req, res) => {
    try {

        const data = await knex.select('*').from('closet')

        res.status(200);
        res.send(data);

    } catch (err) {
        console.log(err)
    }
});

app.post("/item", async (req, res) => {
    try {
        console.log("req.body is ", req.body)
        const data = await knex.select('*').from('closet')
        data.push(req.body)


        res.status(200);
        res.send(data);

    } catch (err) {
        console.log(err)
    }
});



const PORT = process.env.PORT || 3000;//means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
  //app.listenかapp.set('port', ...)で任意のサーバーが環境から特定のパラメーターを指定したPORTから受け取れるようにしてあげる。