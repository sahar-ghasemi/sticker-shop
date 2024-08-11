import { Helmet } from "react-helmet"
import MainLayout from "./components/layouts/MainLayout"
import Header from "./components/Header"
import PaginateItems from "./components/common/PaginateItems"
import { useGetProductsQuery } from "./slices/productApi"



const App=()=> {
const{data:products, isLoading,isSuccess}=useGetProductsQuery();
  return (
    <MainLayout>
      <Helmet>
        <title>sticker shop</title>        
      </Helmet>
      <div className="mx-auto max-w-6xl">
        <Header/>
        <PaginateItems productPerPage={8} products={products} isLoading={isLoading} isSuccess={isSuccess}/>
      </div>
    </MainLayout>

  )
}

export default App
