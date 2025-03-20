import { readMovies } from "~/lib/movies";

export async function GET() {
  return await readMovies();
}

export function POST() {
  return "POST /movies";
}
