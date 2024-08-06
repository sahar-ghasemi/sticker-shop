import { Helmet } from "react-helmet"
import MainLayout from "./components/layouts/MainLayout"
import Header from "./components/Header"
import Products from "./components/Products"

const App=()=> {

  return (
    <MainLayout>
      <Helmet>
        <title>sticker shop</title>        
      </Helmet>
      <div className="mx-auto max-w-6xl">
        <Header/>
        <Products/>
      </div>
    </MainLayout>

  )
}

export default App
