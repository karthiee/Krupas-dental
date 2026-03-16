import Header from './components/Header/Header';
import './index.css';

function App() {
  return (
    <>
      <Header />
      
      {/* Placeholder Hero Section to test the transparent/glassmorphism header effect */}
      <main style={{ minHeight: '200vh', background: '#e0e5ec' }}>
        <section 
          id="home"
          style={{ 
            height: '100vh', 
            paddingTop: '120px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #EBF3FF 0%, #FFFFFF 100%)'
          }}
        >
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              color: 'var(--color-primary-dark)',
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Beautiful Smiles Begin Here
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
              Scroll down to test the Header's glassmorphism effect.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
