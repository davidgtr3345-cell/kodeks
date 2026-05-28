import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = await request.json();

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const message = String(body.message || "").trim();
  const company = String(body.company || "").trim();
  const formStartedAt = Number(body.formStartedAt || 0);

  if (company) {
    return NextResponse.json(
      { error: "Spam detektovan." },
      { status: 400 }
    );
  }

  const secondsSpent = (Date.now() - formStartedAt) / 1000;

  if (!formStartedAt || secondsSpent < 3) {
    return NextResponse.json(
      { error: "Forma je poslana prebrzo." },
      { status: 400 }
    );
  }

  if (name.length < 2) {
    return NextResponse.json(
      { error: "Unesite ispravno ime." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Unesite ispravan email." },
      { status: 400 }
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      { error: "Poruka je prekratka." },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}