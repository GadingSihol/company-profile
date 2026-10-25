import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 0", borderBottom: "1px solid #e2e8f0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", color: "#0f172a", marginBottom: "16px" }}>
            Membangun Website Modern untuk Bisnis Anda
          </h1>
          <p style={{ color: "#64748b", fontSize: "1.1rem", maxWidth: "650px", margin: "0 auto 24px auto" }}>
            Gading Tech Labs adalah agensi teknologi yang fokus menghadirkan platform web cepat, rapi, dan mudah digunakan.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link href="/services" className="btn btn-primary">Lihat Layanan</Link>
            <Link href="/contact" className="btn btn-secondary">Hubungi Kami</Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "8px" }}>Layanan Unggulan</h2>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "30px" }}>
            Pilihan solusi digital terbaik untuk membantu kebutuhan Anda
          </p>
          
          <div className="grid">
            {services.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}