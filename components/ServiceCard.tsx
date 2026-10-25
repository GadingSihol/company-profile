import Link from "next/link";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    shortDesc: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="card">
      <h3>{service.title}</h3>
      <p>{service.shortDesc}</p>
      <Link href={`/services/${service.id}`} className="btn btn-primary">
        Lihat Detail
      </Link>
    </div>
  );
}