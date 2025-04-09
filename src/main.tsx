import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initApp } from "./lib";
import { config } from "./initConfig.ts";

initApp(config).then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
