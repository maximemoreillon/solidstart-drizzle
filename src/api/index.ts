import { action } from "@solidjs/router"
import { createMovie, deleteMovie } from "./movies"

export const createMovieAction = action(async (formData: FormData) => {
  const title = String(formData.get("title"))
  return await createMovie({ title })
}, "createMovie")

export const deleteMovieAction = action(async (id: number) => {
  return await deleteMovie(id)
}, "deleteMovie")
