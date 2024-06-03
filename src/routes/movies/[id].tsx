import { createAsync, useAction, useParams } from "@solidjs/router"
import { deleteMovieAction } from "~/api"
import { readMovie } from "~/api/movies"

export default function Movies() {
  const params = useParams()

  const movie = createAsync<any>(() => readMovie(params.id))

  // TODO: use submit instead?
  const deleteMovie = useAction(deleteMovieAction)

  return (
    <>
      <h2 class="text-3xl my-4">Movie details</h2>
      <div class="my-4">Title: {movie()?.title}</div>
      <div class="my-4">
        <button onclick={() => deleteMovie(Number(params.id))}>Delete</button>
      </div>
    </>
  )
}
