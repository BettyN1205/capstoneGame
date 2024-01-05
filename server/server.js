const Koa=require('koa');
const {Sequelize,DataTypes}=require('sequelize');

const app=new Koa();

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite'
})

const User=sequelize.define('User',{
    username:DataTypes.STRING,
    password:DataTypes.STRING
})

User.sync()

app.use(async ctx=>{
    if(ctx.url==='/login' && ctx.method==='POST'){

    }
    else if(ctx.url==='/register' && ctx.method==='POST'){

    }
    else if(ctx.url==='/users' && ctx.method==='GET'){}
})

app.listen(3000,()=>{
    console.log("server run on PORT 3000");
})