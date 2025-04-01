import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center mt-8 mb-8">
      <img className="object-contain mb-8 w-44 h-44" src={logo} alt="A canvas" />
      <h1 className="text-2xl font-semibold text-center uppercase tracking-wider m-0 text-amber-800 font-title">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
