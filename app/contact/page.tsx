import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div>
      <PageHeader 
        title="Hubungi Kami" 
        subtitle="Punya rencana proyek? Kirim pesan dan mari berdiskusi." 
      />
      <div className="container">
        <div className="detail-box">
          <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Masukkan nama Anda" 
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>Alamat Email</label>
              <input 
                type="email" 
                placeholder="nama@email.com" 
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>Pesan</label>
              <textarea 
                rows={4} 
                placeholder="Tuliskan pesan atau kebutuhan proyek..." 
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
              ></textarea>
            </div>
            <button type="button" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}