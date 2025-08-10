import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

// This file is used for Vite dev server routing
const App = () => {
  const path = window.location.pathname;

  // Dynamic imports for code splitting
  const [Component, setComponent] = React.useState<React.ComponentType | null>(
    null,
  );

  React.useEffect(() => {
    const loadComponent = async () => {
      let module;
      if (path === "/projects") {
        module = await import("./pages/Projects");
      } else if (path === "/resume") {
        module = await import("./pages/Resume");
      } else {
        module = await import("./pages/Home");
      }
      setComponent(() => module.default);
    };

    loadComponent();
  }, [path]);

  if (!Component) return <div>Loading...</div>;

  return <Component />;
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
