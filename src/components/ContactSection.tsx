import React, { useState } from 'react';
import { useThemeMode } from '../context/ThemeModeContext';
import { SHARED_INFO } from '../data/sharedData';
import { TECHNICAL_SOCIAL_LINKS } from '../data/technicalData';
import { CREATIVE_SOCIAL_LINKS } from '../data/creativeData';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Info,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon, BehanceIcon, MediumIcon } from './Icons';

// =============================================================================
// BACKEND SERVICE INTEGRATION (Formspree / EmailJS Configuration)
// To hook up Formspree:
//   1. Create a free form at https://formspree.io/
//   2. Set FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id'
// To hook up EmailJS:
//   1. Install @emailjs/browser
//   2. Call emailjs.send(...) inside handleFormSubmission
// =============================================================================
const FORMSPREE_ENDPOINT: string | null = null;

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const { isTechnical } = useThemeMode();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'success' | 'fallback_mailto' | 'error'
  >('idle');

  // Active social channels strictly adapted to mode
  const activeSocialLinks = isTechnical ? TECHNICAL_SOCIAL_LINKS : CREATIVE_SOCIAL_LINKS;

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SHARED_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmissionStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmissionStatus('error');
        }
      } else {
        const prefix = isTechnical ? 'Technical Engineering Inquiry' : 'Creative Design Inquiry';
        const subject = encodeURIComponent(`${prefix} from ${formData.name.trim()}`);
        const body = encodeURIComponent(
          `Hi Supriya,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nMode: ${
            isTechnical ? 'Technical Mode' : 'Creative Mode'
          }\n\nMessage:\n${formData.message.trim()}\n\nSent via Supriverse Portfolio.`
        );
        const mailtoUrl = `mailto:${SHARED_INFO.email}?subject=${subject}&body=${body}`;

        window.open(mailtoUrl, '_blank');
        setSubmissionStatus('fallback_mailto');
      }
    } catch {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GitHubIcon className="w-4 h-4 text-blue-400" />;
      case 'LinkedIn':
        return <LinkedInIcon className={`w-4 h-4 ${isTechnical ? 'text-blue-400' : 'text-yellow-400'}`} />;
      case 'Behance':
        return <BehanceIcon className="w-4 h-4 text-yellow-400" />;
      case 'Medium':
        return <MediumIcon className={`w-4 h-4 ${isTechnical ? 'text-blue-400' : 'text-yellow-400'}`} />;
      default:
        return <Mail className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="contact" className="mb-24 scroll-mt-24">
      {/* Section Header: Dynamically Tailored */}
      <div className="flex flex-col gap-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono self-start text-slate-300">
          <Mail className={`w-3.5 h-3.5 ${isTechnical ? 'text-blue-400' : 'text-yellow-400'}`} />
          <span className={isTechnical ? 'text-blue-400' : 'text-yellow-400'}>
            {isTechnical ? '05.' : '04.'}
          </span>
          <span className="tracking-wider uppercase">
            {isTechnical ? 'ENGINEERING_CHANNELS // INQUIRIES' : 'CREATIVE_CHANNELS // INQUIRIES'}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isTechnical ? "Let's build something meaningful." : "Let's create something meaningful."}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          {isTechnical
            ? 'Open to software engineering internships, AI development opportunities, full-stack roles, and technical collaborations.'
            : 'Open to creative leadership roles, poster design commissions, UI/UX opportunities, and visual branding projects.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact & Strictly Mode-Specific Profiles */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Action Card */}
          <div className="reveal-item p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-750 transition-all duration-300">
            <div className="flex items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <Mail className={`w-4 h-4 ${isTechnical ? 'text-blue-400' : 'text-yellow-400'}`} />
                <span>Direct Email</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700 transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${SHARED_INFO.email}`}
              className={`text-base sm:text-lg font-mono break-all font-semibold transition-colors block mt-1 ${
                isTechnical ? 'text-blue-400 hover:text-blue-300' : 'text-yellow-400 hover:text-yellow-300'
              }`}
            >
              {SHARED_INFO.email}
            </a>
            <p className="text-xs text-slate-400 mt-2">
              {isTechnical
                ? 'Fastest response time for software engineering & AI inquiries.'
                : 'Fastest response time for creative direction & design inquiries.'}
            </p>
          </div>

          {/* Location & Status Card */}
          <div className="reveal-item p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-1">
              <MapPin className={`w-4 h-4 ${isTechnical ? 'text-blue-400' : 'text-yellow-400'}`} />
              <span>Location &amp; Availability</span>
            </div>
            <p className="text-sm text-slate-300">
              {SHARED_INFO.location} • Open to on-site, hybrid, and worldwide remote engagements.
            </p>
          </div>

          {/* Mode-Specific Profile Links (Strictly Segregated) */}
          <div className="reveal-item p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              {isTechnical ? 'Verified Engineering Profiles' : 'Verified Design Portfolios'}
            </div>
            <div className="space-y-2">
              {activeSocialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-850 hover:bg-slate-850 text-slate-200 hover:text-white transition-all duration-200 group ${
                    isTechnical ? 'hover:border-blue-500/50' : 'hover:border-yellow-400/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-slate-900 text-slate-300">
                      {getPlatformIcon(link.platform)}
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">{link.platform}</span>
                      <span className="text-[11px] font-mono text-slate-400">{link.label}</span>
                    </div>
                  </div>
                  <ExternalLink
                    className={`w-3.5 h-3.5 text-slate-500 ${
                      isTechnical ? 'group-hover:text-blue-400' : 'group-hover:text-yellow-400'
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Clean Contact Form with Validation & Clear Backend Structure */}
        <div className="lg:col-span-7 reveal-item p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl relative">
          <div className="flex items-center gap-2 text-base font-bold text-white mb-6">
            <MessageSquare className={`w-4 h-4 ${isTechnical ? 'text-blue-400' : 'text-yellow-400'}`} />
            <span>Send a Direct Message</span>
          </div>

          {/* Status Notices */}
          {submissionStatus === 'fallback_mailto' && (
            <div className={`mb-6 p-5 rounded-2xl border space-y-2 ${
              isTechnical ? 'bg-blue-950/60 border-blue-500/40' : 'bg-yellow-950/50 border-yellow-500/40'
            }`}>
              <div className={`flex items-center gap-2 font-bold text-sm ${
                isTechnical ? 'text-blue-300' : 'text-yellow-300'
              }`}>
                <Info className="w-4 h-4 shrink-0" />
                <span>Opening Mail Client</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your email client is opening with your formatted inquiry addressed to{' '}
                <strong className="text-white">{SHARED_INFO.email}</strong>.
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                Note: Formspree or EmailJS can be connected directly via ContactSection.tsx.
              </div>
            </div>
          )}

          {submissionStatus === 'success' && (
            <div className="mb-6 p-5 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Message Received!</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you for reaching out. I will respond to your message promptly.
              </p>
            </div>
          )}

          {submissionStatus === 'error' && (
            <div className="mb-6 p-5 rounded-2xl bg-red-950/50 border border-red-500/40 space-y-2">
              <div className="flex items-center gap-2 text-red-300 font-bold text-sm">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Submission Issue</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Could not connect to the form service. Please email directly at{' '}
                <a href={`mailto:${SHARED_INFO.email}`} className="text-blue-400 underline">
                  {SHARED_INFO.email}
                </a>
                .
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name Field */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                Name <span className={isTechnical ? 'text-blue-400' : 'text-yellow-400'}>*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="Alex Morgan"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none transition-colors ${
                  errors.name
                    ? 'border-red-500/80 focus:border-red-400'
                    : isTechnical
                    ? 'border-slate-800 focus:border-blue-500'
                    : 'border-slate-800 focus:border-yellow-400'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                Email Address <span className={isTechnical ? 'text-blue-400' : 'text-yellow-400'}>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="alex@company.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none transition-colors ${
                  errors.email
                    ? 'border-red-500/80 focus:border-red-400'
                    : isTechnical
                    ? 'border-slate-800 focus:border-blue-500'
                    : 'border-slate-800 focus:border-yellow-400'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                Message <span className={isTechnical ? 'text-blue-400' : 'text-yellow-400'}>*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                placeholder={
                  isTechnical
                    ? "Hi Supriya, I'd like to discuss a software engineering opportunity, AI development, or technical collaboration..."
                    : "Hi Supriya, I'd like to discuss a creative leadership role, poster design commission, UI/UX project, or creative collaboration..."
                }
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? 'border-red-500/80 focus:border-red-400'
                    : isTechnical
                    ? 'border-slate-800 focus:border-blue-500'
                    : 'border-slate-800 focus:border-yellow-400'
                }`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Form Footer Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 ${
                  isTechnical
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
                    : 'bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold shadow-md shadow-yellow-400/30'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Processing...' : 'Send Message'}</span>
              </button>

              <div className="text-[11px] font-mono text-slate-400">
                Direct inquiries welcome anytime.
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
