import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

const Home = lazy(() => import("./pages/Home.tsx"));
const Projects = lazy(() => import("./pages/Projects.tsx"));
const Resume = lazy(() => import("./pages/Resume.tsx"));

const routes = {
  "/": Home,
  "/projects": Projects,
  "/resume": Resume,
} as const;

const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
      fontSize: "1.1rem",
    }}
  >
    Loading...
  </div>
);

export const App = () => {
  const path = window.location.pathname as keyof typeof routes;
  const Component = routes[path] || Home; // Default to Home for unknown routes

  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

// Only render if running in browser (not during testing)
if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  }
}
