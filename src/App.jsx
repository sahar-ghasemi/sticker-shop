import { Helmet } from "react-helmet"
import MainLayout from "./components/layouts/MainLayout"
import Header from "./components/Header"
import { useSelector } from "react-redux"
import PaginateItems from "./components/common/PaginateItems"



const App=()=> {
  const { items: products, status} = useSelector((state) => state.products);
 
  return (
    <MainLayout>
      <Helmet>
        <title>sticker shop</title>        
      </Helmet>
      <div className="mx-auto max-w-6xl">
        <Header/>
        <PaginateItems productPerPage={8} products={products} status={status}/>
      </div>
    </MainLayout>

  )
}

export default App
