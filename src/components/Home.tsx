import { Play, Shield, Eye, Zap, Brain, Lock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F3F5F7] via-white to-[#F3F5F7]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FF7A59]/20 to-[#FFB37A]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#9E7BFF]/20 to-[#6F42C1]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] opacity-20 rounded-full blur-3xl animate-pulse" />
              <Shield className="relative w-32 h-32 text-[#FF7A59]" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent leading-tight">
            Smart Security Robot
          </h1>

          <p className="text-3xl md:text-4xl text-[#1A1A1A] font-semibold mb-4">
            Your Eyes on Duty 24/7
          </p>

          <p className="text-xl text-[#555555] max-w-3xl mx-auto mb-12 leading-relaxed">
            An autonomous security robot powered by advanced AI that detects motion, identifies threats,
            and sends real-time alerts to keep your premises safe around the clock.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => onNavigate('demo')}
              className="group px-8 py-4 bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white rounded-xl font-semibold text-lg shadow-xl shadow-[#FF8B5E]/30 hover:shadow-2xl hover:shadow-[#FF8B5E]/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Play className="w-6 h-6 group-hover:animate-pulse" />
              <span>View Demo</span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-white text-[#1A1A1A] rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#FF7A59]/20"
            >
              Explore Features
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF7A59] to-[#FFB37A] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">24/7 Monitoring</h3>
              <p className="text-[#555555]">Continuous surveillance with intelligent motion detection</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9E7BFF] to-[#6F42C1] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">AI-Powered</h3>
              <p className="text-[#555555]">Advanced threat detection using machine learning</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF8B5E] to-[#FF6C9E] rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Instant Alerts</h3>
              <p className="text-[#555555]">Real-time notifications via SMS and push notifications</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            Quick Access
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'About Robot', page: 'about', color: 'from-[#FF7A59] to-[#FFB37A]' },
              { icon: Lock, label: 'Dashboard', page: 'dashboard', color: 'from-[#9E7BFF] to-[#6F42C1]' },
              { icon: Play, label: 'View Demo', page: 'demo', color: 'from-[#FF8B5E] to-[#FF6C9E]' },
              { icon: Eye, label: 'Meet Team', page: 'team', color: 'from-[#FFB37A] to-[#FF7A59]' },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(item.page)}
                className="group relative overflow-hidden bg-gradient-to-br from-[#F3F5F7] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <item.icon className="w-12 h-12 text-[#FF7A59] group-hover:text-[#FF6C9E] transition-colors mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-[#1A1A1A]">{item.label}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
