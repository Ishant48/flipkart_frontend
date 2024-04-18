const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
	id:{
        type:String,
        required:true,
        unique:true},
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantiy:String,
    description:String,
    discount:String,
    tagline:String
});


const products = mongoose.model("products", productsSchema);

module.exports = products