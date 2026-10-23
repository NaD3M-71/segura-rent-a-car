// Credito del desarrollador en el pie de pagina
export default function DevCredit() {
  return (
    <p className="mt-2">
      <a
        href="https://gscode.com.ar"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center justify-center gap-2 transition-colors hover:text-fog"
      >
        <img src="/img/gscode.webp" width={96} height={111} alt="" className="h-5 w-auto" />
        <span>Sitio desarrollado por GS.Code</span>
      </a>
    </p>
  )
}
