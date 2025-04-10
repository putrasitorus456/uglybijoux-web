// app/error.tsx
"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-red-500">An error occurred</h1>
      <p className="mt-4 text-gray-700">{error.message}</p>
    </div>
  );
}