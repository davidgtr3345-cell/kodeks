export default function LoadingProjectPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-slate-50 text-slate-800">
      <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-12 w-64 bg-slate-200 rounded-lg mb-6"></div>
        <div className="h-6 w-full bg-slate-200 rounded-lg mb-3"></div>
        <div className="h-6 w-5/6 bg-slate-200 rounded-lg mb-8"></div>

        <div className="p-6 bg-white rounded-2xl shadow-md border border-slate-200">
          <div className="h-8 w-40 bg-slate-200 rounded-lg mb-4"></div>
          <div className="h-6 w-32 bg-slate-200 rounded-lg"></div>
        </div>
      </div>
    </main>
  );
}