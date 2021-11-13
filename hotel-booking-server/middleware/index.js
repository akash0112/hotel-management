import expressJwt from 'express-jwt'
export const requiresignin=expressJwt({
    secret:process.env.JWT_SECRET,
     algorithms:["HS256"]
})