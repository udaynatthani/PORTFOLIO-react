import { Outlet, NavLink } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-Layout">  <header>
      <nav>
        <h1>
          Uday's Portfolio
        </h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/Education">Education</NavLink>
        {/* <NavLink to="Help">Help</NavLink> */}
      </nav>
    </header>
      <main>
        <Outlet />

      </main>
    </div>
  )
}