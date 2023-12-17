import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { GridLoader } from "react-spinners";
import "./App.css";
import { routes } from "./routes/Routes";

function App() {
  // const authChecked = useAuthCheck();
  const [authChecked] = useState(true);

  return !authChecked ? (
    <div className="w-screen h-screen grid place-items-center">
      <GridLoader color="#7E7FFF" size={20} />
    </div>
  ) : (
    <>
      <RouterProvider router={routes}></RouterProvider>

      <Toaster position="top-center" />
    </>
  );
}

export default App;
