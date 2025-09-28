import React from "react";

interface ColorSwatchProps {
  name: string;
  color: string;
  className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, color, className = "" }) => (
  <div className={`flex flex-col items-center space-y-2 ${className}`}>
    <div className="w-16 h-16 rounded-lg shadow-lg border-2 border-white/20" style={{ backgroundColor: color }} />
    <div className="text-center">
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">{color}</div>
    </div>
  </div>
);

interface GradientSwatchProps {
  name: string;
  gradient: string;
  className?: string;
}

const GradientSwatch: React.FC<GradientSwatchProps> = ({ name, gradient, className = "" }) => (
  <div className={`flex flex-col items-center space-y-2 ${className}`}>
    <div className="w-16 h-16 rounded-lg shadow-lg border-2 border-white/20" style={{ background: gradient }} />
    <div className="text-center">
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</div>
    </div>
  </div>
);

export default function ColorShowcase(): JSX.Element {
  const brandColors = [
    { name: "Angular Red", color: "#dd0531" },
    { name: "Azure Blue", color: "#007fff" },
    { name: "JavaScript Yellow", color: "#f9e64f" },
    { name: "Mandalorian Blue", color: "#1857a4" },
    { name: "Node Green", color: "#215732" },
    { name: "React Blue", color: "#61dafb" },
    { name: "Something Different", color: "#832561" },
    { name: "Svelte Orange", color: "#ff3d00" },
    { name: "Vue Green", color: "#42b883" },
  ];

  const extendedColors = [
    { name: "Emerald", color: "#10b981" },
    { name: "Purple", color: "#8b5cf6" },
    { name: "Pink", color: "#ec4899" },
    { name: "Indigo", color: "#6366f1" },
    { name: "Teal", color: "#14b8a6" },
    { name: "Amber", color: "#f59e0b" },
    { name: "Rose", color: "#f43f5e" },
    { name: "Cyan", color: "#06b6d4" },
    { name: "Lime", color: "#84cc16" },
    { name: "Violet", color: "#7c3aed" },
  ];

  const gradients = [
    { name: "Primary", gradient: "linear-gradient(135deg, #61dafb, #007fff)" },
    { name: "Secondary", gradient: "linear-gradient(135deg, #42b883, #10b981)" },
    { name: "Accent", gradient: "linear-gradient(135deg, #ff3d00, #f59e0b)" },
    { name: "Purple", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
    { name: "Warm", gradient: "linear-gradient(135deg, #dd0531, #f43f5e)" },
    { name: "Cool", gradient: "linear-gradient(135deg, #1857a4, #6366f1)" },
    { name: "Sunset", gradient: "linear-gradient(135deg, #f9e64f, #ff3d00)" },
    { name: "Nature", gradient: "linear-gradient(135deg, #215732, #84cc16)" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Color Showcase</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A beautiful collection of colors inspired by modern web technologies
        </p>
      </div>

      {/* Brand Colors Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <span className="w-3 h-3 bg-react-blue rounded-full mr-3"></span>
          Brand Colors
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brandColors.map((color) => (
            <ColorSwatch key={color.name} name={color.name} color={color.color} />
          ))}
        </div>
      </section>

      {/* Extended Colors Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <span className="w-3 h-3 bg-emerald rounded-full mr-3"></span>
          Extended Palette
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {extendedColors.map((color) => (
            <ColorSwatch key={color.name} name={color.name} color={color.color} />
          ))}
        </div>
      </section>

      {/* Gradients Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <span className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></span>
          Beautiful Gradients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {gradients.map((gradient) => (
            <GradientSwatch key={gradient.name} name={gradient.name} gradient={gradient.gradient} />
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <span className="w-3 h-3 bg-purple rounded-full mr-3"></span>
          Usage Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Button Examples */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Buttons</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-react-blue text-white rounded-lg hover:bg-opacity-90 transition-all">
                React Blue Button
              </button>
              <button className="w-full px-4 py-2 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-all">
                Gradient Button
              </button>
              <button className="w-full px-4 py-2 bg-vue-green text-white rounded-lg hover:bg-opacity-90 transition-all">
                Vue Green Button
              </button>
            </div>
          </div>

          {/* Card Examples */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Cards</h3>
            <div className="space-y-2">
              <div className="p-4 bg-gradient-accent text-white rounded-lg">
                <h4 className="font-semibold">Accent Card</h4>
                <p className="text-sm opacity-90">Beautiful gradient background</p>
              </div>
              <div className="p-4 bg-gradient-cool text-white rounded-lg">
                <h4 className="font-semibold">Cool Card</h4>
                <p className="text-sm opacity-90">Cool blue gradient</p>
              </div>
            </div>
          </div>

          {/* Badge Examples */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-angular-red text-white text-sm rounded-full">Angular</span>
              <span className="px-3 py-1 bg-react-blue text-white text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-vue-green text-white text-sm rounded-full">Vue</span>
              <span className="px-3 py-1 bg-svelte-orange text-white text-sm rounded-full">Svelte</span>
              <span className="px-3 py-1 bg-javascript-yellow text-gray-800 text-sm rounded-full">JavaScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Variables Reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <span className="w-3 h-3 bg-indigo rounded-full mr-3"></span>
          CSS Variables Reference
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
            {`/* Brand Colors */
--color-angular-red: #dd0531;
--color-azure-blue: #007fff;
--color-javascript-yellow: #f9e64f;
--color-react-blue: #61dafb;
--color-vue-green: #42b883;
--color-svelte-orange: #ff3d00;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #61dafb, #007fff);
--gradient-secondary: linear-gradient(135deg, #42b883, #10b981);
--gradient-accent: linear-gradient(135deg, #ff3d00, #f59e0b);

/* Usage */
.my-element {
  background: var(--gradient-primary);
  color: var(--color-react-blue);
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}

