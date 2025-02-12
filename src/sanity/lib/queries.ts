
import { defineQuery } from "next-sanity";
  

export const allproducts= defineQuery (`
   *[_type == "product"]{
    _id,
     name,
     tittle,
     description,
     price,
     discountPercentage,
     pricewithoutDiscount,
     rating,
     ratingcount,
     tags,
     sizes,
     "imageurl" : image.asset->url
   }
`)
    
export const fourProducts = defineQuery (`
    *[_type == "product"][0..3]{
     _id,
      name,
    description,
      price,
      discountPercentage,
      pricewithoutDiscount,
      rating,
      ratingcount,
      tags,
      sizes,
      "imageurl" : image.asset->url
    }
 `)







