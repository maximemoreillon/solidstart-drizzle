import { Navigate } from "@solidjs/router"

export default function NotFound() {
  return (
    <>
      <h1>SolidStart + Drizzle CRUD</h1>
      <Navigate href="/movies" />
    </>
  )
}
