import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { techItems } from '../data/technologies';
import { TechItem } from '../types';

export const TechConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'Languages', label: 'Languages' },
    { id: 'Backend & Systems', label: 'Backend & Systems' },
    { id: 'Cloud & DevOps', label: 'Cloud & DevOps' },
    { id: 'Data & Persistence', label: 'Data & Persistence' },
    { id: 'Frontend', label: 'Frontend UI' },
    { id: 'AI & Tooling', label: 'AI & Tooling' },
  ];

  const filteredItems = techItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.appliedIn.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="stack" className="section-padding" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">TECHNICAL TOOLKIT · RELATIONSHIP MATRIX</div>
          <h2 className="section-title">Verified Technologies & Application Context</h2>
          <p className="section-description">
            Organized around domain context, practical applications, and engineering environments rather than arbitrary percentage ratings.
          </p>
        </div>

        {/* Filter Toolbar: Categories + Live Search */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-8)',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.775rem',
                    fontFamily: 'var(--font-mono)',
                    background: isActive ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.03)',
                    color: isActive ? 'var(--bg-canvas)' : 'var(--text-secondary)',
                    border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-subtle)',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '260px',
            }}
          >
            <Search
              size={14}
              color="var(--text-muted)"
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or context..."
              style={{
                width: '100%',
                padding: '0.45rem 0.75rem 0.45rem 2rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Technologies Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {filteredItems.map((item) => {
            const isSelected = activeTech?.name === item.name;
            return (
              <div
                key={item.name}
                onClick={() => setActiveTech(isSelected ? null : item)}
                style={{
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  background: isSelected ? 'rgba(56, 189, 248, 0.08)' : 'rgba(16, 20, 29, 0.65)',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="mono"
                    style={{
                      fontSize: '0.65rem',
                      color:
                        item.evidenceTier === 'User-confirmed professional'
                          ? 'var(--accent-emerald)'
                          : item.evidenceTier === 'Project / source code confirmed'
                          ? 'var(--accent-cyan)'
                          : 'var(--accent-amber)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {item.evidenceTier === 'User-confirmed professional'
                      ? 'Professional'
                      : item.evidenceTier === 'Project / source code confirmed'
                      ? 'Project-Verified'
                      : 'Conceptual'}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-3)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.context}
                </p>

                <div>
                  <div
                    className="mono"
                    style={{
                      fontSize: '0.675rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Applied In:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {item.appliedIn.map((app) => (
                      <span
                        key={app}
                        className="mono"
                        style={{
                          fontSize: '0.675rem',
                          color: 'var(--text-secondary)',
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '0.1rem 0.4rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
