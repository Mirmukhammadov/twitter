import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PostContext from "./Context/postContext.jsx";

createRoot(document.getElementById("root")).render(
  <PostContext>
    <StrictMode>
      <App />
    </StrictMode>
  </PostContext>
);
