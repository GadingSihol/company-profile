import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader 
        title="Tentang Kami" 
        subtitle="Mengenal lebih dekat visi dan misi tim Gading Tech Labs." 
      />
      <div className="container">
        <div className="detail-box">
          <h2 style={{ marginBottom: "16px" }}>Profil Perusahaan</h2>
          <p style={{ color: "#475569", marginBottom: "20px" }}>
            Gading Tech Labs berdiri dengan tujuan membantu pelaku usaha dan organisasi memiliki identitas online yang solid. Kami percaya setiap sistem web harus dibangun dengan kode yang rapi, ringan, dan mudah dikembangkan di masa mendatang.
          </p>

          <h3 style={{ marginBottom: "12px" }}>Nilai Utama Kami</h3>
          <ul>
            <li><strong>Kualitas Kode:</strong> Terstruktur rapi, hemat sumber daya, dan minim bug.</li>
            <li><strong>Fokus Pengguna:</strong> Tampilan visual intuitif yang nyaman dilihat dan diakses.</li>
            <li><strong>Komunikasi Terbuka:</strong> Proses diskusi pengerjaan proyek transparan dari awal hingga akhir.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}