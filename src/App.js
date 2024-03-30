import "./App.css";
import Body from "./Components/Body";
import Browse from "./Components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
