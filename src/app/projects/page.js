export default function Projects() {
  const projects = [
    {
      title: "FreshCoco App",
      description:
        "A coconut delivery application with tracking and online payment.",
    },
    {
      title: "Book Management System",
      description:
        "A CRUD application using Angular, PHP, and MySQL.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow"
          >
            <h2 className="text-2xl font-bold mb-2">
              {project.title}
            </h2>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}