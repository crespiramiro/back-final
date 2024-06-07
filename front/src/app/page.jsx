import AddProduct from "@/components/AddProduct";
import ProductList from "./products/page";


export default function Home() {
  return (
  <main className="ml-16" >
    <h1 className="mb-12 mt-12" >Bienvenido a gestor de stock</h1>
    <ProductList/>
    <AddProduct />
  </main>
  )
}
