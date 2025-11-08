import NavbarBrand from './components/NavbarBrand';
import HeroShowcase from './components/HeroShowcase';
import FeatureGrid from './components/FeatureGrid';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <NavbarBrand />
      <main>
        <HeroShowcase />
        <FeatureGrid />
        <CTASection />
      </main>
      <footer className="border-t border-blue-100 py-10 bg-white" id="preview">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-900/70">© {new Date().getFullYear()} DSCE Alumni Connect. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="#features">Features</a>
            <a className="hover:underline" href="#get-app">Get App</a>
            <a className="hover:underline" href="#docs">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
