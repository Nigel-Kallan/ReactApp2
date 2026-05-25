export default function Contact() {
  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-4xl font-bold mb-6">
        Contact Me
      </h1>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded"
        ></textarea>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}