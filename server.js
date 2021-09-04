const knex = require("knex");
const knexFile = require("./knexfile");
knex(knexFile);
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

app.post("/items", async (req, res) => {
    try {
        const data = await knex.select('*').from('closet')
        data.push(req.body)


        res.status(200);
        res.send(data);

    } catch (err) {
        console.log(err)
    }
});

app.delete('/items/:id', async (req, res) => {
    try {
        const data = await knex.select('*').from('closet')

        for (let obj of data) {

            if (obj.id === parseInt(req.params.id)) {
                let indexOfObj = data.indexOf(obj)
                data.splice(indexOfObj, 1)
            }
        }

        res.status(200);
        res.send(data);
    }
    catch (err) {
        console.log(err)
    }
});

app.patch("/items/:id", async (req, res) => {
    try {
        const data = await knex.select('*').from('closet')
        let resultObj;
        for (let obj of data) {

            if (obj.id === parseInt(req.params.id)) {
                resultObj = req.body
            }
        }

        res.status(200);
        res.send(resultObj);
    }
    catch (err) {
        console.log(err)
    }


});



const PORT = process.env.PORT || 3000;//means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
  //app.listenかapp.set('port', ...)で任意のサーバーが環境から特定のパラメーターを指定したPORTから受け取れるようにしてあげる。