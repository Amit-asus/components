import "./App.css";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ColorShowcase from "./components/ColorShowcase/ColorShowcase";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ColorShowcase />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Other Components</h2>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
