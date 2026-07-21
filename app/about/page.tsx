import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="content-wrap py-24">
        <h1 className="text-3xl font-semibold">关于我</h1>
        <p className="mt-4 max-w-2xl text-muted">
          页面内容待补充 —— 下一步我们再完善简介、经历时间线和联系方式。
        </p>
      </main>
      <Footer />
    </>
  );
}
