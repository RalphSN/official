import "./App.css";
import Header from "./components/Header/Header";
import Cover from "./pages/Cover/Cover";
import Service from "./pages/Service/Service";
import "./styles/reset.css";

function App() {
  const title = "遊戲夢想實踐者";
  const description = "將創意化為現實，為您創造無與倫比的價值！";
  return (
    <>
      <Header />
      <main className="main">
        <Cover title={title} description={description} />
        <Service />
      </main>
    </>
  );
}

export default App;
