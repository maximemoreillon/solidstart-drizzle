import { action } from "@solidjs/router"
import { createMovie } from "./movies"

export const createMovieAction = action((formData: FormData) => {
  const title = String(formData.get("title"))
  return createMovie({ title })
}, "createMovie")
