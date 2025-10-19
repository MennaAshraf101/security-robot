import { Play, Camera, Image as ImageIcon } from 'lucide-react';

export default function Demo() {
  const galleryImages = [
    { title: 'Robot Prototype', description: 'Initial build stage', emoji: '🤖' },
    { title: 'Testing Phase', description: 'Motion detection tests', emoji: '🔬' },
    { title: 'UI Dashboard', description: 'Control panel interface', emoji: '💻' },
    { title: 'Night Vision', description: 'Low-light operation', emoji: '🌙' },
    { title: 'Alert System', description: 'Real-time notifications', emoji: '🔔' },
    { title: 'Field Deployment', description: 'On-site testing', emoji: '🏢' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#F3F5F7] via-white to-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            Demo & Gallery
          </h1>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto">
            Watch our robot in action and explore the development journey
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] via-[#555555] to-[#1A1A1A] flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59]/10 to-[#FFB37A]/10" />

            <div className="relative z-10 text-center">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] opacity-20 rounded-full blur-3xl animate-pulse" />
                <Camera className="relative w-32 h-32 text-white mx-auto" />
              </div>

              <button className="group/btn px-8 py-4 bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white rounded-xl font-semibold text-lg shadow-xl shadow-[#FF8B5E]/30 hover:shadow-2xl hover:shadow-[#FF8B5E]/40 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto">
                <Play className="w-6 h-6 group-hover/btn:animate-pulse" />
                <span>Watch Demo Video</span>
              </button>

              <p className="mt-6 text-white/80 text-lg">
                See how our robot detects and responds to security threats in real-time
              </p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">360°</div>
                <div className="text-sm opacity-90">Vision Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">&lt;2s</div>
                <div className="text-sm opacity-90">Alert Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Detection Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            Development Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-[#F3F5F7] to-[#9E7BFF]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59]/5 to-[#FFB37A]/5 group-hover:opacity-100 opacity-0 transition-opacity" />
                  <span className="text-8xl group-hover:scale-110 transition-transform">{item.emoji}</span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-[#555555]">{item.description}</p>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon className="w-5 h-5 text-[#FF7A59]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">Key Features Demonstrated</h3>
            <ul className="space-y-3">
              {[
                'Autonomous navigation and patrol',
                'Real-time threat detection',
                'HD video streaming',
                'Instant alert notifications',
                'Night vision capability',
                'Remote control interface',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-[#555555]">
                  <span className="w-2 h-2 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#9E7BFF] to-[#6F42C1] rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Test Results</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Motion Detection</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '98%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Fire Detection</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '95%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Weapon Recognition</span>
                  <span className="font-bold">92%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>System Uptime</span>
                  <span className="font-bold">99.9%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '99.9%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
