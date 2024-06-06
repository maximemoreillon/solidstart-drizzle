import { redirect, useSubmission } from "@solidjs/router"
import { Show } from "solid-js"
import { createMovie } from "~/api/movies"
import { Navigate, action } from "@solidjs/router"
import Button from "~/components/Button"

const createMovieAction = action(async (formData: FormData) => {
  "use server"
  const title = String(formData.get("title"))
  const newMovie = await createMovie({ title })
  return redirect(`/movies/${newMovie.id}`)
}, "createMovie")

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
        <Button type="submit">Register</Button>

        {/* TODO: error handling */}
      </form>
    </>
  )
}
