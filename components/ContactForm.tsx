"use client";

import { useState } from "react";

const blockedEmails = ["test@test.com", "test@gmail.com", "admin@gmail.com"];

export default function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const message = String(form.get("message") || "").trim();
    const email = String(form.get("email") || "").trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !company || !message || !email) {
      setStatus("Popunite sva polja.");
      return;
    }

    if (!emailRegex.test(email) || blockedEmails.includes(email)) {
      setStatus("Unesite ispravan poslovni email.");
      return;
    }

    setStatus("Upit je spreman za slanje.");
    e.currentTarget.reset();
  }

  return (
    <section id="kontakt" className="section-padding">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Kontakt</span>
            <h2 className="section-title is-wide mt-5">
              Recite nam šta vam treba
            </h2>
            <p className="section-text mt-4">
              Kratko opišite projekat i javit ćemo vam se sa prijedlogom.
            </p>

            <div className="mt-8 space-y-4">
              <div className="glass-panel rounded-3xl p-5">
                <p className="text-[13px] text-[#8ea0b8]">Email</p>
                <p className="mt-2 text-[20px] font-semibold text-white">
                  kontakt@kodeksstudio.ba
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-5">
                <p className="text-[13px] text-[#8ea0b8]">Usluge</p>
                <p className="mt-2 text-[18px] font-semibold leading-8 text-white">
                  Web stranice, landing page i UI sistemi
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel-strong rounded-[30px] p-6 md:p-8">
            <div className="mb-6">
              <span className="eyebrow">Upit</span>
              <h3 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
                Pošaljite osnovne informacije
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#aebacc]">
                Dovoljno je nekoliko rečenica o firmi, usluzi ili projektu.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="label" htmlFor="name">
                  Ime i prezime
                </label>
                <input
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Vaše ime"
                />
              </div>

              <div>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="ime@firma.ba"
                />
              </div>

              <div>
                <label className="label" htmlFor="company">
                  Firma ili brend
                </label>
                <input
                  id="company"
                  name="company"
                  className="input"
                  placeholder="Naziv firme"
                />
              </div>

              <div>
                <label className="label" htmlFor="message">
                  Opis projekta
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  placeholder="Ukratko napišite šta vam treba"
                />
              </div>

              <button type="submit" className="brand-button">
                Pošalji upit
              </button>

              {status && <p className="text-[14px] text-[#b9c7d8]">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}