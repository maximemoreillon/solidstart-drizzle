import { createAsync } from "@solidjs/router"
import { For } from "solid-js"
import { readMovies } from "~/api/movies"

export default function Movies() {
  const movies = createAsync<any[]>(readMovies)

  return (
    <main>
      <h2>Movies</h2>
      <p>
        <a href="/movies/new">Create a new movie</a>
      </p>
      <ul>
        <For each={movies()}>
          {(movie, i) => (
            <li>
              <a href={`/movies/${movie.id}`}>
                [{movie.id}] {movie.title}
              </a>
            </li>
          )}
        </For>
      </ul>
    </main>
  )
}
