import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nameproduct:{
        type: String,
        required:[true,"กรุณาใส่ชื่อสินค้า"]
    },
    desc:{
        type: String,
        required:[true,"กรุณาใส่รายละเอียดสินค้า"]
    },
    price:{
        type: Number,
        required:[true,"กรุณาใส่ราคาสินค้า"]
    },
    images:[
        {
            //Id Image in cloudinary
            public_id:{
                type:String,
            },
            // Thumnail Image
            url:{
                type:String,
            },
        }
    ],
    category:{
        type:String,
        required:[true,"กรุณาใส่หมวดหมู่สินค้า"],
        enum:{
            values:[
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Fashion",
            ],
            message:"กรุณาเลือกหมวดหมู่สินค้า"
        }
    } ,
    seller: {
      type: String,
      required: [true, "กรุณาใส่ชื่อผู้ขาย"],
    },
    stock: {
      type: Number,
      required: [true, "กรุณากรอกสต๊อกสินค้า"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
})

export default mongoose.models.Product || mongoose.model("Product",productSchema)