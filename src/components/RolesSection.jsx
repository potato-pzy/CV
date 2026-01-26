import { useState } from 'react';
import './RolesSection.css';

const rolesData = [
  {
    id: 'vectors',
    name: 'Vectors',
    title: 'Vectors Deploy',
    description: 'You embed with clients, ship AI to production, and stay until adoption is complete. In a world of prototypes and pilots, you deliver outcomes. Vectors are adaptable, client-facing, and own the last mile.'
  },
  {
    id: 'forgers',
    name: 'Forgers',
    title: 'Forgers Build',
    description: 'You architect and build AI systems that transform businesses. Working at the intersection of engineering and product, you create the infrastructure and tools that power real-world AI applications. Forgers combine technical depth with practical problem-solving.'
  },
  {
    id: 'pathfinders',
    name: 'Pathfinders',
    title: 'Pathfinders Discover',
    description: 'You explore emerging technologies and identify opportunities for clients. Researching cutting-edge AI capabilities and translating complex technical concepts into business value, you guide strategic decisions and chart the path forward.'
  }
];

function RolesSection({ roles = rolesData }) {
  const [activeRole, setActiveRole] = useState('vectors');

  const currentRole = roles.find(role => role.id === activeRole);

  return (
    <section className="roles-section">
      <div className="roles-container">
        {/* Left Side - Title and Tabs */}
        <div className="roles-left">
          <h2 className="roles-main-title">Types of Roles</h2>

          <div className="roles-tabs">
            {roles.map((role) => (
              <button
                key={role.id}
                className={`roles-tab ${activeRole === role.id ? 'active' : ''}`}
                onClick={() => setActiveRole(role.id)}
              >
                <span className="roles-tab-text">{role.name}</span>
                <span className="roles-tab-line" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="roles-right">
          <div className="roles-intro">
            <p className="roles-intro-text">
              Three roles. One mission.{'\n'}
              <span className="roles-highlight">Vectors deploy. Forgers build. Pathfinders discover.</span>{'\n'}
              Together, they move clients from vision to production.
            </p>
          </div>

          <div className="roles-content">
            <h3 className="roles-content-title">{currentRole.title}</h3>
            <p className="roles-content-description">{currentRole.description}</p>
          </div>
        </div>
      </div>
      <div className="roles-glow"></div>
    </section>
  );
}

export default RolesSection;
