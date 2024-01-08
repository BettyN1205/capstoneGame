const Koa=require('koa');
const bodyParser = require('koa-bodyparser');
const {Sequelize,DataTypes}=require('sequelize');

const app=new Koa();
app.use(bodyParser());

app.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type')
    if(ctx.method==='OPTIONS'){
        ctx.body=200;
    }
    else{
        await next();
    }
})

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
        const {username,password}=ctx.request.body;
        const user=await User.findOne({where:{username,password}});
        if(user){
            ctx.body={username:user.username}
        }
        else{
            ctx.body={username:"user name not exist"}
        }

    }

    else if(ctx.url==='/register' && ctx.method==='POST'){
        const {username,password}=ctx.request.body;
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            ctx.body = { success: false, message: 'Username already exists' };
        } else {
            // If the username is unique, create a new user
            const user = await User.create({ username, password });
            ctx.body = { success: true, username: user.username };
        }

    }
    else if(ctx.url==='/users' && ctx.method==='GET'){}
})

app.listen(3001,()=>{
    console.log("server run on PORT 3000");
})