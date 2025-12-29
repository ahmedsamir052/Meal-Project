import Navbar from "./components/Navbar";
import AppRouter from "./router";
import backimg from "./assets/imgs/backimg2.avif";
function App() {
  return (
    <>
      <div className="app">
        <img src={backimg} alt="" className="w-screen fixed top-0 left-0 min-h-screen object-cover z-[-1]" />
        <Navbar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
