var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    img: {
        type:Array
    },
    brand: {
        type: Number
    },
    time_creat: {
        type: Date
    },
    categories: {
        type: Number
    },
    imgavata:{
        type:String
    },
    described: {
        type: String
    },
    id_owner: {
        type: String
    },
    shop_name:{
        type:String
    },
    numberproduct:{
        type:Number
    },
    state: {
        type: String
    },
    like: {
        type: Array
    },
    dislike:{
        type:Array
    },
    comment:{
        type:Array
    },
    rate:{
        type:Array
    },
    id:{
        type:Number
    },
    report:{
        type:Array
    }


});
module.exports = mongoose.model('products', productSchema);