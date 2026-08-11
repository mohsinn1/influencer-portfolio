import './LegalPage.css'

export default function LegalPage({ eyebrow, title, updated, children }) {
  return (
    <section className="legal-page">
      <div className="wrap legal-wrap">
        <div className="section-head">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="display legal-title">{title}</h1>
          {updated && <div className="legal-updated mono">Last updated: {updated}</div>}
        </div>
        <div className="legal-body">{children}</div>
      </div>
    </section>
  )
}
