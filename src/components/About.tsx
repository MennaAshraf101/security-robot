import { Target, Eye, Zap, Shield, Brain, Camera, Wifi, Activity } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#F3F5F7] via-white to-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            About the Smart Security Robot
          </h1>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto">
            Innovation meets security in an autonomous solution designed to protect what matters most
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59]/20 to-[#FFB37A]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#F3F5F7] to-[#9E7BFF]/10 flex items-center justify-center">
                <Shield className="w-32 h-32 text-[#FF7A59] animate-pulse" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A59] to-[#FFB37A] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Project Goal</h2>
              </div>
              <p className="text-[#555555] leading-relaxed">
                To develop an intelligent, autonomous security robot that addresses the growing need for
                reliable, continuous surveillance. Our robot provides real-time threat detection and instant
                alerts, eliminating the limitations of traditional static security cameras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9E7BFF] to-[#6F42C1] rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Vision</h2>
              </div>
              <p className="text-[#555555] leading-relaxed">
                To revolutionize security through intelligent automation, making advanced protection
                accessible and efficient for homes, businesses, and public spaces worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF8B5E] to-[#FF6C9E] rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Mission</h2>
              </div>
              <p className="text-[#555555] leading-relaxed">
                To deliver cutting-edge security technology that combines artificial intelligence,
                robotics, and IoT to create a safer environment for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            Technologies & Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Detection',
                description: 'Machine learning algorithms for threat identification',
                color: 'from-[#FF7A59] to-[#FFB37A]'
              },
              {
                icon: Camera,
                title: 'HD Cameras',
                description: 'High-definition vision with night mode capability',
                color: 'from-[#9E7BFF] to-[#6F42C1]'
              },
              {
                icon: Activity,
                title: 'Motion Sensors',
                description: 'Advanced sensors for precise movement detection',
                color: 'from-[#FF8B5E] to-[#FF6C9E]'
              },
              {
                icon: Wifi,
                title: 'IoT Connected',
                description: 'Real-time cloud connectivity and data sync',
                color: 'from-[#FFB37A] to-[#FF7A59]'
              },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-[#F3F5F7] to-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                <div className={`relative w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 text-center">{tech.title}</h3>
                <p className="text-[#555555] text-sm text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] rounded-3xl shadow-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">The Security Problem We Solve</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg leading-relaxed">
            <p>
              Traditional security systems are limited by fixed camera positions, delayed response times,
              and the inability to distinguish between genuine threats and false alarms.
            </p>
            <p>
              Our Smart Security Robot combines mobility, artificial intelligence, and real-time
              communication to provide dynamic, intelligent protection that adapts to its environment
              and responds instantly to potential threats.
            </p>
            <p className="font-semibold">
              The result? Comprehensive coverage, fewer false alarms, and immediate action when it matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
