import { createAsync } from "@solidjs/router";
import { For } from "solid-js";
import { readMovies } from "~/lib/movies";
import Button from "~/components/Button";

export default function Movies() {
  const movies = createAsync<any[]>(readMovies);

  return (
    <>
      <h2 class="text-3xl my-4">Movies</h2>
      <div class="my-4">
        <Button href="/movies/new">Create a new movie</Button>
      </div>
      <table>
        <thead>
          <tr class="my-2">
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <For each={movies()}>
            {(movie, i) => (
              <tr class="my-2">
                <td>{movie.id}</td>
                <td>
                  <a href={`/movies/${movie.id}`}>{movie.title}</a>
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </>
  );
}
