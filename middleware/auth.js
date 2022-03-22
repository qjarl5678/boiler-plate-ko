const User = require("../models/User");


let auth = (req, res, next) => {

    //인증처리를 받는 곳

    //클라이언트 쿠키에서 토크을 가져온다.
    let token = req.cookies.x_auth;


    //토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: true})
        

        //여기서 request 에 토큰과 유저 정보를 저장하는것은 
        // index.js에서 /api/users/auth 를 호출했을때 req.token 이런식으로
        // 사용할 수 있게 하려고 하기 때문
        
        req.token = token;
        req.user = user;
        next(); 
    
    })
    //유저가 있으면 인증 Okay

    //유저가 없으면 인증 No!
}

module.exports = auth;