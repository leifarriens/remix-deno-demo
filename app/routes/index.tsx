import { json, LoaderFunction } from '@remix-run/deno';
import { useLoaderData } from '@remix-run/react';
import * as React from 'react';

export const loader: LoaderFunction = async () => {
  const now = new Date().toISOString();
  return json({
    now,
  });
};

export default function Index() {
  const { now } = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-b from-slate-600 to-slate-800">
      <section className="text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to Remix 🎸 running on Deno 🦕
        </h1>
        <p className="text-xl">
          Visit <a href="https://remix.run/docs/">remix.run/</a> to read the
          documentation
        </p>
        <p>{now}</p>
      </section>
    </main>
  );
}
