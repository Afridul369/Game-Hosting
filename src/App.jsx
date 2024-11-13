
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './components/Pagess/Home';
import Pages from './components/Pagess/Pages';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<Home/>}>     
      </Route>
    <Route
      path="/Pages"
      element={<Pages/>}>     
      </Route>
    </>
   
  )
);
function App() {


  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
