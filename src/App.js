import "./App.css";
import Body from "./Components/Body";
import Browse from "./Components/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userStore from "../src/Store/store.js";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <Provider store={userStore}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
