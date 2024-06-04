import { readMovies } from "~/api/movies"

export async function GET() {
  return await readMovies()
}

export function POST() {
  return "POST /movies"
}
