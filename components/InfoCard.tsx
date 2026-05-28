type InfoCardProps = {
  title: string;
  text: string;
};

export default function InfoCard({ title, text }: InfoCardProps) {
  return (
    <div className="glass-panel rounded-3xl p-7">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-8">{text}</p>
    </div>
  );
}