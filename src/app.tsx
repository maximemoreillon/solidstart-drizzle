// @refresh reload
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import "./index.css"

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <nav class="flex gap-4 p-4 bg-gray-800 text-white">
            <a href="/movies">Movies</a>
            <a href="/about">About</a>
          </nav>
          <main class="px-4">
            <Suspense>{props.children}</Suspense>
          </main>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
