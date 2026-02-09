import MainHeader from "./components/layout/MainHeader"
import MainFooter from "./components/layout/MainFooter"
import Home from "./pages/Home";


const App = ()=> {
  return (
    <div className="layout flex flex-col min-h-screen bg-primary/50">
      <MainHeader/>
      <main className="flex-1">
     <Home/>

      </main>
      <MainFooter/>
    </div>

  )
}

export default App;