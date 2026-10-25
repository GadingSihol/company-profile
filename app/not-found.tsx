import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "100px 0" }}>
      <h1 style={{ fontSize: "4rem", color: "#2563eb", marginBottom: "10px" }}>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p style={{ color: "#64748b", margin: "14px 0 24px 0" }}>
        Halaman yang Anda tuju tidak tersedia atau URL salah.
      </p>
      <Link href="/" className="btn btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  );
}