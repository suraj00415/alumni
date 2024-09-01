import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import InstitutionPage from "./pages/InstitutionPage"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/institute" element={<InstitutionPage />} />
      </Routes>
    </ThemeProvider>
  )
}
