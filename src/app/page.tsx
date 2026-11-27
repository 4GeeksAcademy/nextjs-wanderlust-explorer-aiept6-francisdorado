import Link from "next/link";

const Home = () => (
  <section className="rounded-3xl bg-gradient-to-br from-teal-600 to-sky-700 px-6 py-20 text-center text-white">
    <h1 className="text-3xl font-bold sm:text-5xl">Vive experiencias únicas</h1>
    <p className="mx-auto mt-4 max-w-xl text-teal-50">
      Desde tours gastronómicos en Bangkok hasta rutas de vela por el Adriático.
    </p>
    <Link
      href="/experiences"
      className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-teal-700"
    >
      Explorar experiencias
    </Link>
  </section>
);

export default Home;
