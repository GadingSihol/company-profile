import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Gading Tech Labs</h4>
            <p>Solusi pembuatan website dan produk digital untuk pengembangan usaha Anda.</p>
          </div>
          <div className="footer-col">
            <h4>Menu Cepat</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontak</h4>
            <p>Email: halo@gadingtechlabs.id</p>
            <p>Lokasi: Jakarta, Indonesia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gading Tech Labs. Tugas 4 Praktikum Web Development.</p>
        </div>
      </div>
    </footer>
  );
}