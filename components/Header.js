import Link from "next/link";

export default function Header({ siteName }) {
  return (
    <>
      <header className="header">
        <nav className="nav text-xl font-bold font-title">
          <Link href="/">
            <a>{siteName}</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
