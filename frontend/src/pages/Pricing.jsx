import { Link } from 'react-router-dom'

const rows = [
  ['Email marketing', '$150', 'Per 1,000-recipient blast'],
  ['SEO & Google Ads', '$600', 'Setup and management — terms to be defined'],
  ['Social media marketing', '$300', 'Per week'],
  ['Press release', '$350', 'Per release'],
  ['Custom campaigns', 'Custom', 'Based on scope'],
]

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1>Clear prices. Clear terms.</h1>
          <p>Pick a single service or combine several into a custom growth campaign.</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="table-wrap">
            <table>
              <thead><tr><th>Service</th><th>Price</th><th>Billing</th></tr></thead>
              <tbody>
                {rows.map(([s, p, b]) => (
                  <tr key={s}><td>{s}</td><td className="p">{p}</td><td>{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note box">Advertising spend, third-party publication fees, taxes, and other external costs are excluded unless explicitly included in your proposal.</p>
          <p className="note">Email campaigns are sent only to appropriately sourced, permission-based audiences, and recipients can always unsubscribe.</p>
          <p style={{ marginTop: 32 }}><Link to="/#contact" className="btn btn-primary">Request a Consultation</Link></p>
        </div>
      </section>
    </>
  )
}