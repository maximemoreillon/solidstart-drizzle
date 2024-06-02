import { createAsync, useAction, useParams } from "@solidjs/router"
import { Show } from "solid-js"
import { deleteMovieAction } from "~/api"
import { readMovie } from "~/api/movies"

export default function Movies() {
  const params = useParams()

  const movie = createAsync<any>(() => readMovie(params.id))
  const deleteMovie = useAction(deleteMovieAction)

  return (
    <main>
      <h2>Movie</h2>
      <p>{movie()?.title}</p>
      <p>
        <button onclick={() => deleteMovie(Number(params.id))}>Delete</button>
      </p>
    </main>
  )
}
