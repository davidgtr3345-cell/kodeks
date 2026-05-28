export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-panel-strong rounded-4xl px-8 py-10 text-center">
        <div className="mx-auto mb-5 h-12 w-12 rounded-full border-4 border-cyan-300/20 border-t-cyan-300 animate-spin" />
        <h2 className="text-2xl font-bold text-white mb-2">Učitavanje stranice</h2>
        <p className="text-slate-400">
          Sadržaj se priprema i bit će prikazan za trenutak.
        </p>
      </div>
    </main>
  );
}