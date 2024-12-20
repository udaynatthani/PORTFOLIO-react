import {
  createBrowserRouter,
  //BrowserRouter,

  Route,
  // Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Help/ContactUs";
import FAQ from "./pages/Help/faq"
import NotFound from "./pages/NotFound";
import Skills from "./pages/skills"
import Education from "./pages/Education";



//layouts
import RootLayout from "./layouts/RootLayout";
import Help from "./layouts/Help";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<FAQ/>}/>
        <Route path="contact" element={<ContactUs/>} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)
function App() {
  return (
    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <h1>
    //         Uday's App
    //       </h1>
    //       <h1><Link to="/">Home</Link></h1>
    //       <NavLink to="/about">About</NavLink>
    //     </nav>
    //   </header>
    //   <main>
    //   </main>
    //   </BrowserRouter>
    <RouterProvider router={router} />

  );
}

export default App
