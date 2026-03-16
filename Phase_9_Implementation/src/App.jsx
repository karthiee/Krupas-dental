import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <main style={{ minHeight: '60vh', background: 'var(--color-background)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           {/* Space above footer to demonstrate the wave transition */}
           <h1 style={{ color: 'var(--color-text-muted)' }}>Scroll down for Footer</h1>
      </main>

      {/* Render Phase 9 Footer/Contact Component here */}
      <Footer />
    </>
  );
}

export default App;
