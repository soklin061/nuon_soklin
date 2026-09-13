import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Calendar } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { GithubIcon, LinkedinIcon, TelegramIcon, EmailIcon } from '../common/SocialIcons';
import { profileData } from '../../data/portfolioData';

// RFC 5322 compliant regex for practical email format verification
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState({ email: false });
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' | 'info' | 'error' | null
    message: '',
    mailtoFallback: ''
  });
  const [loading, setLoading] = useState(false);

  const validateEmailFormat = (email) => {
    const trimmed = (email || '').trim();
    if (!trimmed) {
      return 'Email address is required.';
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      return 'Please enter a valid email address (e.g. name@example.com).';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email' && touched.email) {
      setEmailError(validateEmailFormat(value));
    }
  };

  const handleEmailBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
    setEmailError(validateEmailFormat(formData.email));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Check for valid email before any submission
    const emailValidationMsg = validateEmailFormat(formData.email);
    if (emailValidationMsg) {
      setTouched((prev) => ({ ...prev, email: true }));
      setEmailError(emailValidationMsg);
      document.getElementById('contact-email')?.focus();
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: null, message: '', mailtoFallback: '' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    // Fallback mailto link in case service is offline or access key is not yet set
    const fallbackMailto = `mailto:${profileData.email}?subject=${encodeURIComponent(
      trimmedSubject || `Portfolio Message from ${trimmedName}`
    )}&body=${encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`
    )}`;

    if (accessKey && accessKey !== 'your_web3forms_access_key_here' && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: trimmedName,
            email: trimmedEmail,
            subject: `[Portfolio Contact] ${trimmedSubject}`,
            message: trimmedMessage,
            from_name: trimmedName,
            replyto: trimmedEmail
          })
        });

        const data = await response.json();

        if (data.success) {
          setSubmitStatus({
            type: 'success',
            message: `Thank you! Your message was successfully sent directly to ${profileData.email}. I will get back to you shortly.`,
            mailtoFallback: ''
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTouched({ email: false });
          setEmailError('');
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch {
        setSubmitStatus({
          type: 'error',
          message: 'Unable to send message automatically at this moment. You can send it directly through your email client.',
          mailtoFallback: fallbackMailto
        });
      } finally {
        setLoading(false);
      }
    } else {
      // If Web3Forms access key is not yet configured in .env:
      // Open the user's default email client prefilled to soklin061@gmail.com
      window.location.href = fallbackMailto;
      setSubmitStatus({
        type: 'info',
        message: `Opening your email app to deliver your message to ${profileData.email}. (Tip: Add your free VITE_WEB3FORMS_ACCESS_KEY in .env for direct background sending without opening an email app).`,
        mailtoFallback: fallbackMailto
      });
      setLoading(false);
    }
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
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-slate-100 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Date Of Birth</span>
                  <span className="text-sm font-semibold text-slate-800">
                    15-01-2002
                  </span>
                </div>
              </div>
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
                  { name: 'Email', icon: EmailIcon, url: profileData.socialLinks.email }
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

            {/* Status Notifications */}
            {submitStatus.type === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-relaxed">
                  {submitStatus.message}
                </span>
              </div>
            )}

            {submitStatus.type === 'info' && (
              <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm font-medium leading-relaxed flex-1">
                  <p>{submitStatus.message}</p>
                  {submitStatus.mailtoFallback && (
                    <a
                      href={submitStatus.mailtoFallback}
                      className="inline-block mt-2 text-xs font-semibold text-blue-700 underline hover:text-blue-900"
                    >
                      Click here if your email client didn't open automatically
                    </a>
                  )}
                </div>
              </div>
            )}

            {submitStatus.type === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm font-medium leading-relaxed flex-1">
                  <p>{submitStatus.message}</p>
                  {submitStatus.mailtoFallback && (
                    <a
                      href={submitStatus.mailtoFallback}
                      className="inline-block mt-2 text-xs font-semibold text-red-700 underline hover:text-red-900"
                    >
                      Click here to send directly to {profileData.email}
                    </a>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
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
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Email Address *
                    </label>
                    {emailError && (
                      <span className="text-xs font-medium text-red-500 animate-in fade-in">
                        {emailError}
                      </span>
                    )}
                  </div>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleEmailBlur}
                    placeholder="alex@example.com"
                    aria-invalid={!!emailError}
                    className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm focus:outline-none transition-all ${
                      emailError
                        ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                        : 'border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Subject *
                </label>
                <input
                  id="contact-subject"
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
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
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
                icon={loading ? Loader2 : Send}
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
