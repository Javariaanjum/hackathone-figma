
import Header from "./components/Header";
 import Hero from "./components/Hero";
 import Hero1 from "./components/Hero1";
import Product from "./components/Product";
import Peace from "./components/Peace";
// import Shop from "./components/Shop";
export default function Home(){
  return(
    <div>
      <Header/>
      <Hero/> 
      <Hero1/>
      <Product/>
      <Peace/>
      {/* <Shop/> */}
    </div>
  )
}
