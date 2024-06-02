// @refresh reload
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import "./app.css"

export default function App() {
  return (
    <Router
      root={(props) => (
        <nav class="nav">
          <a href="/movies">Movies</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </nav>
      )}
    >
      <FileRoutes />
    </Router>
  )
}