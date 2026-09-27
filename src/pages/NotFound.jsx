import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
      <div className="text-gold text-[0.65rem] tracking-[0.3em] font-medium uppercase mb-6">
        404
      </div>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primaryDark mb-6">
        This page has slipped out<br className="hidden sm:block" /> of the collection.
      </h1>
      <Link 
        to="/"
        className="mt-8 bg-primaryDark text-white px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300"
      >
        Return Home
      </Link>
    </main>
  );
}
