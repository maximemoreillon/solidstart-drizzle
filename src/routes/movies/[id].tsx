import { createAsync, useParams } from "@solidjs/router"
import { Show } from "solid-js"
import { readMovie, deleteMovie } from "~/api/movies"

export default function Movies() {
  const params = useParams()

  const movie = createAsync<any>(() => readMovie(params.id))

  return (
    <main>
      <h2>Movie</h2>
      <p>{movie()?.title}</p>
      <p>
        <button onclick={() => deleteMovie(params.id)}>Delete</button>
      </p>
    </main>
  )
}
