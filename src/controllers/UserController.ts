
const bcrypt = require('bcryptjs');
// @ts-ignore
const {User} = require('../models/model')
// @ts-ignore
const jwt = require('jsonwebtoken')


const generateJwt = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{

    async registerUser(req,res){
        try {
            const {username,email, password}: any = req.body;
            const findUserEmail: object = await User.findOne({where: {email}});

            if (findUserEmail) res.json({error: 'Пользователь с таким email уже существует'});

            let hashPassword: boolean = bcrypt.hashSync(password);
            let user: any = await User.create({ username,email, password: hashPassword});
            res.json({
                info: {
                    username: user.username,
                    email: user.email,
                }
            });

        }catch (e) {
            res.json({error: e.message});
        }
    }



    async loginUser(req,res){
        try {
            const {email, password}: any = req.body;

            const findUser: any = await User.findOne({where:{email}});

            if (!findUser)  res.json({error: 'Пользователь не найден'});

            let comparePassword: boolean = bcrypt.compare(password, findUser.password);

            if (!comparePassword)  res.json({error: 'Указан неверный пароль'});

            let token: string = generateJwt(findUser.id, findUser.email);

            return res.json({
                token,
                info: {
                    id: findUser.id,
                    email: findUser.email,
                }
            });

        }catch (e) {
            res.json({error: e.message});
        }
    }


    async editUser(req,res){
        try{
            const {username,email,password}: any = req.body;
            const hashPassword: boolean = bcrypt.hashSync(password);

            await User.update(
                {
                    username: username,
                    email: email,
                    password: hashPassword
                },
                {
                    where: {
                        id: req.auth.id
                    }
                }
            ).then(()=>{
                res.json({
                    info: 'Success'
                })
            })

        } catch (e) {
            res.json({error: e.message});
        }
    }

    async getUsersList(req,res){
        try {
            await User.findAll().then((data:[])=>{
                res.json({data})
            })
        }catch (e) {
            res.json({error: e.message});
        }
    }
}

module.exports = new UserController();