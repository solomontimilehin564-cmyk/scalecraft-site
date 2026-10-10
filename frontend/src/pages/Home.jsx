import { Link } from 'react-router-dom'
   import { services, why, steps, faqs, campaigns } from '../data'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Digital Marketing & Growth</span>
            <h1>Ready to Scale Your Brand?</h1>
            <p className="lead">We build strategic marketing campaigns that help businesses grow their audience, reach the right people, and unlock new opportunities.</p>
            <div className="hero-actions">
              <Link to="/#services" className="btn btn-primary">Explore Our Services →</Link>
              <Link to="/pricing" className="btn btn-outline">View Pricing</Link>
            </div>
            <p className="tagline">Crafting Strategies. Scaling Growth.</p>
          </div>
          <div className="hero-card">
            <h3>Marketing Built for Growth</h3>
            <div className="bar-row">
              {[30, 45, 40, 62, 78, 100].map((h, i) => <span key={i} style={{ height: h + '%' }} />)}
            </div>
            <div className="chips">
              {['Email campaigns', 'SEO', 'Google Ads', 'Social media', 'Press releases'].map(c => <span className="chip" key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Services built around your goals</h2>
            <p>Choose one service or combine several. Clear prices, defined deliverables.</p>
          </div>
          <div className="cards">
            {services.map(s => (
              <article key={s.name} className={'card' + (s.featured ? ' featured' : '')}>
                <h3>{s.name}</h3>
                <div className="price">{s.price}</div>
                <div className="unit">{s.unit}</div>
                <p>{s.text}</p>
                <Link className="link" to="/#contact">Get Started →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Scale Craft</span>
            <h2>A partner you can trust with your growth</h2>
          </div>
          <div className="why-grid">
            {why.map(([t, p]) => (
              <div className="why-item" key={t}><h3>{t}</h3><p>{p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>From first conversation to measurable growth</h2>
          </div>
          <div className="steps">
            {steps.map(([t, p], i) => (
              <div className="step" key={t}>
                <div className="num">{i + 1}</div><h3>{t}</h3><p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

           <section id="results">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Results & portfolio</span>
            <h2>Campaigns we've helped bring to life</h2>
            <p>Real crowdfunding projects we have worked on.</p>
          </div>
          <div className="campaigns">
            {campaigns.map(c => (
              <article className="campaign" key={c.name}>
                <h3>{c.name}</h3>
                <p className="c-text">{c.text}</p>
                <dl>
                  <div><dt>Achievement</dt><dd>{c.achievement}</dd></div>
                  <div><dt>Impact</dt><dd>{c.impact}</dd></div>
                </dl>
                <a className="btn btn-dark-outline" href={c.url} target="_blank" rel="noopener noreferrer">
                  View campaign on Kickstarter ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container narrow">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>
          {faqs.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <Contact />
    </>
  )
}