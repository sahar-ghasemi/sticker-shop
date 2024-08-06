import { Helmet } from "react-helmet"
import MainLayout from "./components/layouts/MainLayout"
import Header from "./components/Header"

const App=()=> {

  return (
    <MainLayout>
      <Helmet>
        <title>sticker shop</title>        
      </Helmet>
      <div className="mx-auto max-w-6xl">
        <Header/>
      </div>
    </MainLayout>

  )
}

export default App
