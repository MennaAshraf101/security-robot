import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, QrCode } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#F3F5F7] via-white to-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto">
            Have questions about our Smart Security Robot? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Send us a message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF8B5E] to-[#FF6C9E] rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Message Sent!</h3>
                <p className="text-[#555555] text-center">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#555555] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF7A59] focus:outline-none transition-colors text-[#1A1A1A]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#555555] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF7A59] focus:outline-none transition-colors text-[#1A1A1A]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#555555] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF7A59] focus:outline-none transition-colors text-[#1A1A1A] resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white rounded-xl font-semibold text-lg shadow-xl shadow-[#FF8B5E]/30 hover:shadow-2xl hover:shadow-[#FF8B5E]/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#FF7A59] to-[#FFB37A] rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="mailto:info@smartsecurityrobot.com"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm opacity-90">info@smartsecurityrobot.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm opacity-90">Connect with us</div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm opacity-90">View our code</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center space-x-2">
                <QrCode className="w-6 h-6 text-[#FF7A59]" />
                <span>Project Documentation</span>
              </h3>

              <div className="aspect-square bg-gradient-to-br from-[#F3F5F7] to-[#9E7BFF]/10 rounded-2xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <QrCode className="w-32 h-32 text-[#FF7A59] mx-auto mb-4" />
                  <p className="text-[#555555] font-medium">Scan for Documentation</p>
                </div>
              </div>

              <p className="text-sm text-[#555555] text-center">
                Scan the QR code to access our complete project presentation and technical documentation
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#9E7BFF] to-[#6F42C1] rounded-3xl shadow-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-lg">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-sm opacity-90 mt-4">Response time: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
