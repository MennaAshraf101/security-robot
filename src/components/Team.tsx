import { Linkedin, Github, User, Cpu, Palette } from 'lucide-react';
import { TeamMember } from '../types';

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Alex Hardware',
      role: 'Hardware Engineer',
      image: '⚙️',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    {
      name: 'Sam AI',
      role: 'AI Developer',
      image: '🤖',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    {
      name: 'Jordan Design',
      role: 'Web Designer',
      image: '🎨',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  ];

  const roleIcons: Record<string, typeof Cpu> = {
    'Hardware Engineer': Cpu,
    'AI Developer': User,
    'Web Designer': Palette,
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#F3F5F7] via-white to-[#F3F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto">
            The brilliant minds behind the Smart Security Robot project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, idx) => {
            const RoleIcon = roleIcons[member.role];
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A59]/10 to-[#FFB37A]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-8">
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#F3F5F7] to-[#9E7BFF]/10 rounded-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                      {member.image}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF8B5E] to-[#FF6C9E] text-white p-2 rounded-full">
                      <RoleIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A1A1A] text-center mb-2">
                    {member.name}
                  </h3>

                  <p className="text-[#555555] text-center mb-6 font-medium">
                    {member.role}
                  </p>

                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#F3F5F7] rounded-lg hover:bg-gradient-to-r hover:from-[#FF8B5E] hover:to-[#FF6C9E] hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#F3F5F7] rounded-lg hover:bg-gradient-to-r hover:from-[#FF8B5E] hover:to-[#FF6C9E] hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#FF7A59] to-[#FFB37A] rounded-2xl shadow-xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">⚙️</div>
            <h3 className="text-2xl font-bold mb-2">Hardware Engineering</h3>
            <p className="opacity-90">Designing and building the physical robot with sensors and motors</p>
          </div>

          <div className="bg-gradient-to-br from-[#9E7BFF] to-[#6F42C1] rounded-2xl shadow-xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">🤖</div>
            <h3 className="text-2xl font-bold mb-2">AI Development</h3>
            <p className="opacity-90">Creating intelligent algorithms for threat detection and response</p>
          </div>

          <div className="bg-gradient-to-br from-[#FF8B5E] to-[#FF6C9E] rounded-2xl shadow-xl p-8 text-white text-center">
            <div className="text-5xl font-bold mb-2">🎨</div>
            <h3 className="text-2xl font-bold mb-2">Web Design</h3>
            <p className="opacity-90">Building intuitive interfaces for monitoring and control</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF7A59] to-[#FFB37A] bg-clip-text text-transparent">
            Our Collaborative Approach
          </h2>
          <p className="text-xl text-[#555555] max-w-4xl mx-auto leading-relaxed mb-8">
            Our diverse team brings together expertise in hardware, software, and design to create
            a comprehensive security solution. Through close collaboration and iterative development,
            we've built a robot that combines cutting-edge technology with practical usability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Agile Development', 'Daily Standups', 'Code Reviews', 'Design Sprints', 'Testing & QA'].map((method, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-gradient-to-r from-[#F3F5F7] to-white rounded-full text-[#555555] font-medium shadow-md"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
