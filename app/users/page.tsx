type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Ne mogu dohvatiti korisnike.");
  }

  return response.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen px-6 py-16 bg-slate-50 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Korisnici</h1>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-10">
          Ova stranica prikazuje podatke dohvaćene sa javnog API-ja.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-md border border-slate-200 p-6"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                {user.name}
              </h2>
              <p className="text-slate-600 mb-1">{user.email}</p>
              <p className="text-slate-500">{user.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
