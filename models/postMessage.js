import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    name: String,
    creator:String,
    tags:[String],
    SelectedFile:String,
    likeCout:{
        type:[String],
        default:[]
    },
    createdAt:{
        type: Date,
        default:new Date()
    },
});
const postMessage = mongoose.model('postMessage',postSchema);
export default postMessage;