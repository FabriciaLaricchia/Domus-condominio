import Header from "./components/Header";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import Recursos from "./components/Recursos";
import SplashScreen from "./components/SplashScreen";
import './App.css'; 

export function App() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main>
        
        <Hero />
        <Beneficios />
        <Recursos />

      </main>
    </>
  );
}

export default App;