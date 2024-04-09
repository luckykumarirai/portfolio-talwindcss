import Nav from "./Components/Nav";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <main className="relative dark:bg-stone-95">
      <section>
        <Nav />
      </section>
      <section className="xl:padding-l  wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">About me</section>
      <section className="padding">Education</section>
      <section className="padding">Experience</section>
      <section className="padding">Open source</section>
      <section className="padding">Projects</section>
      <section className="padding">Contact Me</section>
      <section>Footer</section>
    </main>
  );
}
