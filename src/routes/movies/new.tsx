import { useSubmission } from "@solidjs/router"
import { Show } from "solid-js"
import { createMovieAction } from "~/api"
import { Navigate } from "@solidjs/router"

export default function Home() {
  const registering = useSubmission(createMovieAction)

  return (
    <main class="w-full p-4 space-y-2">
      <h2 class="font-bold text-3xl">New movie</h2>
      <form action={createMovieAction} method="post">
        <div>
          <label for="title-input">Title</label>
          <input name="title" placeholder="Harry Potter" />
        </div>
        <button type="submit">Register</button>
        <Show when={registering.result?.id}>
          <Navigate href={`/movies/${registering.result?.id}`} />
        </Show>
        {/* TODO: error handling */}
      </form>
    </main>
  )
}
