// import { client } from "@/sanity/lib/client"
// import { Product } from "@/types/products"
// import { groq } from "next-sanity"


// interface productPageProp {
//     params: Promise<{slug : string}>
// }

// async function getProduct(slug:string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//     _id,
//      product,
//      _type,
//     image,
//   ] price,
//     }`,{slug}
//   ) 
// }

// export default async function ProductPage({params}:productPageProp){
// const {slug} = await params;
// const product = await getProduct{slug};

// return(
//     <div className="max-w-7xl mx-auto px-4">
// <div className="grid grid-cols-1 md:gaid-cols-2 gap-12">
// <div className="aspect-square">










// </div>
// </div>


//     </div>
// )

// }




import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
interface productPageProp {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      slug,
      product,
      _type,
      image,
      price,
    
    }`,
     { slug }
  );
}

export default async function ProductPage({ params }: productPageProp) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          )}
        </div>
        <div>
            <div className="flex flex-col gap-8"></div>
          <h1 className="text-4xl font-bold ">{product.productName}</h1>
          <p className="text-2xl font-sans">{product.price}</p>
         
        </div>
      </div>
    </div>
  );
}





