import {
  createAsync,
  useAction,
  useParams,
  action,
  redirect,
} from "@solidjs/router"
import { Show } from "solid-js"
import { readMovie, deleteMovie } from "~/api/movies"
import Button from "~/components/Button"

const deleteMovieAction = action(async (id: number) => {
  if (!confirm("Delete movie?")) return
  ;("user server")

  await deleteMovie(id)
  return redirect("/movies")
})

export default function Movies() {
  const params = useParams()
  const movie = createAsync<any>(() => readMovie(params.id))
  const deleteMovie = useAction(deleteMovieAction)

  return (
    <>
      <h2 class="text-3xl my-4">Movie details</h2>
      <Show when={movie()}>
        <div class="my-4">Title: {movie()?.title}</div>
        <div class="my-4">
          <Button onClick={() => deleteMovie(Number(params.id))}>Delete</Button>
        </div>
      </Show>
    </>
  )
}
