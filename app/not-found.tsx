import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background:
          "radial-gradient(circle at top, #15304d 0%, #09111d 45%, #050b14 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px" }}>
        <p
          style={{
            color: "#7dd3fc",
            fontSize: "14px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "14px",
          }}
        >
          Projekat
        </p>

        <h1
          style={{
            fontSize: "44px",
            lineHeight: 1.05,
            marginBottom: "16px",
            fontWeight: 700,
          }}
        >
          Stranica je u izradi
        </h1>

        <p
          style={{
            color: "#b6c2d1",
            fontSize: "16px",
            lineHeight: 1.7,
            marginBottom: "28px",
          }}
        >
          Ovaj detaljni prikaz projekta još nije dostupan. Uskoro će biti objavljen.
        </p>

        <Link
          href="/projects"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            borderRadius: "14px",
            background: "#6ee7f9",
            color: "#07111c",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset",
          }}
        >
          Nazad na projekte
        </Link>
      </div>
    </main>
  );
}
