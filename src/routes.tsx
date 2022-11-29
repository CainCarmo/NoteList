import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home/Home"
import { Configuration } from "./pages/Configuration/Configuration"
import { Status } from "./pages/Status/Status"

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/status" element={<Status />} />
      <Route path="/configuration" element={<Configuration />} />
    </Routes>
  )
}