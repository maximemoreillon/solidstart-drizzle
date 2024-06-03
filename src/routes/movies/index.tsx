import { createAsync } from "@solidjs/router"
import { For } from "solid-js"
import { readMovies } from "~/api/movies"

export default function Movies() {
  const movies = createAsync<any[]>(readMovies)

  return (
    <>
      <h2 class="text-3xl my-4">Movies</h2>
      <div class="my-4">
        <a href="/movies/new">Create a new movie</a>
      </div>
      <ul>
        <For each={movies()}>
          {(movie, i) => (
            <li class="my-2">
              <a href={`/movies/${movie.id}`}>{movie.title}</a>
            </li>
          )}
        </For>
      </ul>
    </>
  )
}
