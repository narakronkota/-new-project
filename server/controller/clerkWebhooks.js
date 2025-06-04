import user from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req,res)=>{
    try{
        const whook = new Webhook(process.env.ClERK.WEBHOOK_SECRERT)
        const headers = {
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers ["svix-timestamp"],
            "svix-signature" :req.headers ["svix-signature"],
        };
         //verfying hrader
        await whook.verify(JSON.stringify(req.body), headers)

        //getting data 
        const {data, type} = req.body

        const userData = {
            _id: data.id,
            email :data.email.addressses[0].email.address,
            username:data.first_name + " " + data.last_name,
            image: data.image_url,
        }
        //switch case for differnt events
        switch (type) {
            case "user.created" :{
                await user.create(userData);
                break;
            }
             case "user.updated" :{
                await user.findByIdAndUpdate(Date.id, userData);
                break;
            }
             case "user.deleted" :{
                await user.findByIdAndDelete(Date.id, );
                break;
             }
             
             default:
                break;


        }
        res.json({success: true,message: "webhook Recieved"})
        
    } catch  (error) {
       console.log(error.message);
       res.json({success: false,message:error.message});
    } 
}

export default clerkWebhooks;
