// Datos estructurados (schema.org) para que Google entienda el negocio

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // El contenido es JSON generado por nosotros, no entrada de usuarios
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
