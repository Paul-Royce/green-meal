import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    element: <Hero />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ":id/details",
        element: <ProductDetails />
      }
    ]
  }
])

function App() {

  return (
    <div className=" h-full bg-[brown]">
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  )
}

export default App
