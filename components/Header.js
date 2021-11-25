import Link from "next/link";

export default function Header({ siteName }) {
  return (
    <>
      <header className="header max-w-2xl mx-auto w-full mb-8">
        <nav className="nav text-2xl font-bold font-title">
          <Link href="/">
            <a>{siteName}</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
