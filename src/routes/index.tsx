import { Navigate } from "@solidjs/router"

export default function NotFound() {
  return (
    <main>
      <h1>SolidStart + Drizzle CRUD</h1>
      <Navigate href="/movies" />
    </main>
  )
}
