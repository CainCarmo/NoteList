import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter as Router } from "react-router-dom"

import { Sidebar } from "./containers/Sidebar/Sidebar"
import { Dashboard } from "./containers/Dashboard/Dashboard"

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Sidebar />
        <Dashboard />
      </Router>
    </HelmetProvider>
  )
}