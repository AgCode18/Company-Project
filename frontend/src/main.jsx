// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import "./index.css";

// import { createRouter } from "./routes/routes";

// const router = createRouter();

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );



import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";

import { createRouter } from "./routes/routes";
import SmoothScroll from "./utils/SmoothScroll";

const router = createRouter();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll>
  </StrictMode>
);