import Link from "next/link";
import { services } from "@/data/services";
import PageHeader from "@/components/PageHeader";

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="container" style={{ padding: "60px 0", textAlign: "center" }}>
        <h2>Layanan Tidak Ditemukan</h2>
        <p style={{ color: "#64748b", margin: "16px 0 24px 0" }}>
          Maaf, layanan dengan ID <strong>"{id}"</strong> tidak terdaftar pada website kami.
        </p>
        <Link href="/services" className="btn btn-primary">
          Kembali ke Layanan
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={service.title} subtitle="Detail Informasi Layanan" />
      <div className="container">
        <div className="detail-box">
          <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "#334155" }}>
            {service.fullDesc}
          </p>

          <h3 style={{ marginBottom: "10px" }}>Apa Saja yang Didapatkan?</h3>
          <ul>
            {service.features.map((fitur, index) => (
              <li key={index}>{fitur}</li>
            ))}
          </ul>

          <p style={{ fontWeight: "bold", color: "#2563eb", fontSize: "1.1rem", marginBottom: "24px" }}>
            Biaya: {service.price}
          </p>

          <div style={{ display: "flex", gap: "12px" }}>
            <Link href="/contact" className="btn btn-primary">
              Pesan Layanan Ini
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}