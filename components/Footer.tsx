export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="content-wrap flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} 你的名字. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="mailto:you@example.com" className="hover:text-primary">
            Email
          </a>
          <a href="#" className="hover:text-primary">
            小红书
          </a>
          <a href="#" className="hover:text-primary">
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
