import {getAuth} from 'firebase-admin/auth'
export const firebaseVerifyIdToken = async (req,res,next) =>{
    const tokenHeaders = req.headers['authorization'] ? req.headers['authorization'].split(" ") : null
    
    if(!tokenHeaders){
        return res.status(401).json({
            message : 'Không có headers'
        })
    }
    else{
       try {
        const decodedToken = await getAuth().verifyIdToken(tokenHeaders[0])
        const uid = decodedToken.uid;
        req.user = decodedToken;
        next()
       } catch (error) {
            return res.status(400).json({
                message :error.message
            })
       }
    }
}