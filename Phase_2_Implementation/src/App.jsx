import Hero from './components/Hero/Hero';
import './index.css';

function App() {
  return (
    <>
      {/* 
        We render the Hero section here. 
        In a full site integration, the Header from Phase 1 would go right above this.
      */}
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
