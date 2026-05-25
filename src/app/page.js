import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to My Portfolio
      </h1>

      <p className="text-xl mb-6">
        Hi! My name is Nigel and I am a Web Development student learning
        React, Next.js, Angular, SwiftUI, and full-stack development.
      </p>

      <div className="space-x-4">
        <Link
          href="/about"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          About
        </Link>

        <Link
          href="/projects"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Projects
        </Link>

        <Link
          href="/contact"
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}