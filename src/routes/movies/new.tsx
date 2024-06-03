import { useSubmission } from "@solidjs/router"
import { Show } from "solid-js"
import { createMovieAction } from "~/api"
import { Navigate } from "@solidjs/router"

export default function Home() {
  const registering = useSubmission(createMovieAction)

  return (
    <>
      <h2 class="text-3xl my-4">New movie</h2>
      <form action={createMovieAction} method="post" class="flex gap-4">
        <div class="flex gap-2 items-center">
          <label for="title-input">Title</label>
          <input
            name="title"
            placeholder="Harry Potter"
            class="border-solid border-black border-2 p-2 text-sm"
          />
        </div>
        <button type="submit">Register</button>
        <Show when={registering.result?.id}>
          <Navigate href={`/movies/${registering.result?.id}`} />
        </Show>
        {/* TODO: error handling */}
      </form>
    </>
  )
}
