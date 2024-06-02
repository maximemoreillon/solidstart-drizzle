"use server"

import { eq } from "drizzle-orm"
import { db } from "./db"
import { Movies } from "~/../drizzle/schema"
import { redirect } from "@solidjs/router"

export type Movie = {
  title: string
}

export async function createMovie({ title }: Movie) {
  const [newMovie] = await db.insert(Movies).values({ title }).returning()
  return newMovie
}

export async function readMovies() {
  return await db.select().from(Movies)
}

export async function readMovie(id: number | string) {
  const [movie] = await db
    .select()
    .from(Movies)
    .where(eq(Movies.id, Number(id)))
  return movie
}

export async function deleteMovie(id: number | string) {
  await db
    .delete(Movies)
    .where(eq(Movies.id, Number(id)))
    .returning()
  return redirect("/movies")
}
