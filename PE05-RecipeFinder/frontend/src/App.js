import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
