import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="content-wrap flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          你的名字 / Studio
        </Link>
        <nav className="flex items-center gap-8 text-sm text-muted">
          <Link href="/" className="transition-colors hover:text-primary">
            作品
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            关于我
          </Link>
        </nav>
      </div>
    </header>
  );
}
