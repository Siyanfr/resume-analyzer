import type { Route } from "./+types/home";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Talentra" },
    { name: "description", content: "Smarter Resume Insights for Smarter Hiring" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-home.svg')] bg-cover">
    <NavBar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume</h1>
        <h2>Review your Submissions and check AI-powered Feedback.</h2>
      </div>
    </section>

    {}
  </main>
}
