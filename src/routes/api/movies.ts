import { readMovies } from "~/api/movies"

async function GET() {
  return await readMovies()
}

export function POST() {
  return "POST /movies"
}
