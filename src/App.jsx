

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import ProductDetails from "./pages/ProductDetails";
import {QueryClientProvider, QueryClient} from "react-query"
import { ApiContextProvider } from "./context/ApiContext";


const router = createBrowserRouter([
  {
    element: <Hero />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  },
  {
    path: ":id",
    element: <ProductDetails />
  }
])

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        cacheTime: 600000
      }
    }
  })

  return (
    <div className=" bg-[brown]">
      <ApiContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ApiContextProvider>
    </div>
  )
}

export default App
