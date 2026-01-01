export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-extrabold text-zinc-900 dark:text-white sm:text-6xl">
          Chatbox.ts
        </h1>
        <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300 sm:text-xl">
          an open source peer to peer chat application built with Next.js,
          TypeScript, Tailwind CSS, and Supabase.
        </p>
      </main>
    </div>
  );
}
