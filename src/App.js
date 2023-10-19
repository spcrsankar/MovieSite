import AllRouters from "./Routers/AllRouters";
import { Footer, Header } from './components'

function App() {
  return (
    <>
      <Header/>
      <div className="dark:bg-slate-800">
        <main>
          <AllRouters/>
        </main>
      </div>
      <Footer/>
    </>
  );
}

export default App;
