import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { GithubIcon, LinkedinIcon, TelegramIcon, EmailIcon } from '../common/SocialIcons';
import { profileData } from '../../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="GET IN TOUCH"
          title="Let's Work Together"
          subtitle="Have an ambitious project in mind, need a frontend developer, or want to discuss design? Drop a message below."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 bg-[#FAFAFC] rounded-3xl p-8 sm:p-10 border border-slate-200/80">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Contact Information
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              Feel free to reach out directly via email, phone, or connect with me across professional social networks.
            </p>

            <div className="space-y-6 mb-8">
              <a 
                href={`mailto:${profileData.email}`} 
                className="flex items-center gap-4 group p-3 rounded-2xl bg-white border border-slate-100 hover:border-brand-300 transition-all shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email</span>
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-brand-600 transition-colors">
                    {profileData.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Phone / Telegram</span>
                  <span className="text-sm font-semibold text-slate-800">
                    {profileData.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Location</span>
                  <span className="text-sm font-semibold text-slate-800">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect With Me
              </p>
              <div className="flex items-center gap-2.5">
                {[
                  { name: 'GitHub', icon: GithubIcon, url: profileData.socialLinks.github },
                  { name: 'LinkedIn', icon: LinkedinIcon, url: profileData.socialLinks.linkedin },
                  { name: 'Telegram', icon: TelegramIcon, url: profileData.socialLinks.telegram },
                  { name: 'Email', icon: EmailIcon, url: profileData.socialLinks.email } // Placeholder for Dribbble or any other social link
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                      aria-label={item.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Thank you! Your message has been sent successfully. I will get back to you shortly.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Website Design & Development"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 transition-all resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Send}
                iconPosition="right"
                disabled={loading}
                className="w-full sm:w-auto px-8"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
