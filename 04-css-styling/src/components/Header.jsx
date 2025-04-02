import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center mt-8 mb-16 md:mb-8">
      <img className="object-contain mb-8 w-44 h-44" src={logo} alt="A canvas" />
      <h1 className="text-2xl md:text-4xl font-semibold text-center uppercase tracking-[0.4em] m-0 text-amber-800 font-title">ReactArt</h1>
      <p className="text-stone-400 m-0 text-center">A community of artists and art-lovers.</p>
    </header>
  );
}
