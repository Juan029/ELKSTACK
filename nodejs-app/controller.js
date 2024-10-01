import logger from "./logger.js"

const homeController = (req,res) =>{
    try{
        logger.info("welcome home page")
        res.send("welcome Home Page")
    }catch(error){
        console.log(error)
    }
}

const postController = (req,res) => {
    try{
        logger.info("welcome Post page")
        res.send("Welcome Post page")
    }catch(error){
        console.log(error)
    }
}


const saveUser = (req,res) => {
    try{
        logger.info("welcome saveUser page")
        
        res.send("Welcome saveUser page")
    }catch(error){
        console.log(error)
    }
}

//info user and timestamp



const controllers = { homeController, postController, saveUser}

export default controllers