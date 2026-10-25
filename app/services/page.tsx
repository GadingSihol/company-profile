import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div>
      <PageHeader 
        title="Katalog Layanan" 
        subtitle="Solusi pengembangan web yang dapat disesuaikan dengan kebutuhan Anda." 
      />
      <div className="container">
        <div className="grid">
          {services.map((item) => (
            <ServiceCard key={item.id} service={item} />
          ))}
        </div>
      </div>
    </div>
  );
}