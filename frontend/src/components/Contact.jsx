import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', service: 'Email Marketing', budget: 'Under $500', message: '', website: ''
  })
  const [status, setStatus] = useState('')

  const update = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    // Step 6 will send this to the backend
    setStatus('Form layout ready. Sending is connected in Step 6.')
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Let's grow together</span>
          <h2>Your Next Stage of Growth Starts Here.</h2>
          <p>Tell us what you're building, and let's explore how the right marketing strategy can support your goals.</p>
        </div>
        <form onSubmit={submit}>
          <h3>Request a Consultation</h3>
          <label>Your name
            <input name="name" value={form.name} onChange={update} required />
          </label>
          <label>Email address
            <input type="email" name="email" value={form.email} onChange={update} required />
          </label>
          <label>Service of interest
            <select name="service" value={form.service} onChange={update}>
              <option>Email Marketing</option>
              <option>SEO & Google Ads</option>
              <option>Social Media Marketing</option>
              <option>Press Release</option>
              <option>Custom Growth Campaign</option>
            </select>
          </label>
          <label>Estimated budget
            <select name="budget" value={form.budget} onChange={update}>
              <option>Under $500</option>
              <option>$500–$1,000</option>
              <option>$1,000+</option>
            </select>
          </label>
          <label>Tell us about your project
            <textarea name="message" value={form.message} onChange={update} />
          </label>
          {/* Hidden spam trap: real visitors never see or fill this */}
          <input name="website" value={form.website} onChange={update}
                 style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
          <button className="btn btn-primary" type="submit">Send Inquiry</button>
          <p className="form-status">{status}</p>
        </form>
      </div>
    </section>
  )
}