import mongoose from 'mongoose';


const dataSchema=mongoose.Schema({
    name:String,
    description:String,
    image_url: String,
    brand: String,
});


export default mongoose.model('Product',dataSchema);