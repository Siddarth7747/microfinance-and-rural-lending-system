import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Users, DollarSign, CheckCircle2, Award, ArrowUpRight, Activity } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export const RuralVillageClusterMap = () => {
  const { t } = useTranslation();

  const villageClusters = [
    {
      id: 'cluster-1',
      name: 'Shivpur Rural Cluster',
      zone: 'Sector 1A - North Varanasi',
      fieldOfficer: 'Vikram Singh (FO-102)',
      activeBorrowers: 342,
      shgGroups: 28,
      demandToday: 78500,
      collectedToday: 77200,
      efficiency: 98.3,
      status: 'ON_TRACK',
      lat: 25.352,
      lng: 82.975,
      x: 180,
      y: 90
    },
    {
      id: 'cluster-2',
      name: 'Mirzapur Agro Hub',
      zone: 'Sector 2B - East Belt',
      fieldOfficer: 'Anjali Sharma (FO-105)',
      activeBorrowers: 420,
      shgGroups: 35,
      demandToday: 95000,
      collectedToday: 94100,
      efficiency: 99.1,
      status: 'EXCELLENT',
      lat: 25.133,
      lng: 82.564,
      x: 320,
      y: 190
    },
    {
      id: 'cluster-3',
      name: 'Ramnagar Handloom Cluster',
      zone: 'Sector 3C - South Ganga',
      fieldOfficer: 'Rajesh Verma (FO-108)',
      activeBorrowers: 286,
      shgGroups: 24,
      demandToday: 62000,
      collectedToday: 60500,
      efficiency: 97.6,
      status: 'ON_TRACK',
      lat: 25.267,
      lng: 83.028,
      x: 460,
      y: 110
    },
    {
      id: 'cluster-4',
      name: 'Chandauli Farmer Zone',
      zone: 'Sector 4D - Rural East',
      fieldOfficer: 'Pooja Tiwari (FO-112)',
      activeBorrowers: 200,
      shgGroups: 18,
      demandToday: 48000,
      collectedToday: 48000,
      efficiency: 100.0,
      status: 'COMPLETED',
      lat: 25.259,
      lng: 83.268,
      x: 580,
      y: 200
    }
  ];

  const [activeCluster, setActiveCluster] = useState(villageClusters[0]);

  return (
    <div className="glass-card" style={{ padding: '26px 28px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-gold">
              <Navigation size={13} /> GPS Live Field Mesh
            </span>
            <span style={{ fontSize: '12px', color: '#a1a1aa' }}>Doorstep Center Tracking</span>
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fef08a', marginTop: '4px', margin: 0 }}>
            Rural Geographic Clusters & Doorstep Heatmap
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-emerald">
            <Activity size={12} className="animate-pulse" /> 4 Field Units Active
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px', alignItems: 'start' }}>
        
        {/* Interactive SVG Radar Map */}
        <div style={{
          background: '#040406',
          borderRadius: '16px',
          border: '1px solid rgba(234, 179, 8, 0.3)',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '290px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* Decorative Grid Lines */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(234, 179, 8, 0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.8
          }} />

          {/* SVG Map Canvas */}
          <svg viewBox="0 0 700 300" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 2 }}>
            <defs>
              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#facc15" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glowPin" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Corridor Roads */}
            <path
              d="M 180 90 Q 250 160 320 190 T 460 110 T 580 200"
              fill="none"
              stroke="rgba(234, 179, 8, 0.3)"
              strokeWidth="2"
              strokeDasharray="6,6"
            />

            {/* Pulse Wave for Active Cluster */}
            <circle
              cx={activeCluster.x}
              cy={activeCluster.y}
              r="28"
              fill="rgba(250, 204, 21, 0.18)"
              className="animate-ping"
            />

            {/* Village Cluster Nodes */}
            {villageClusters.map((c) => {
              const isSelected = activeCluster.id === c.id;
              return (
                <g 
                  key={c.id} 
                  onClick={() => setActiveCluster(c)} 
                  style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                >
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isSelected ? 18 : 12}
                    fill={isSelected ? '#facc15' : '#0a0a0f'}
                    stroke={isSelected ? '#ffffff' : '#facc15'}
                    strokeWidth={isSelected ? 3 : 2}
                    filter={isSelected ? 'url(#glowPin)' : undefined}
                  />

                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isSelected ? 6 : 4}
                    fill={isSelected ? '#000000' : '#facc15'}
                  />

                  {/* Label */}
                  <text
                    x={c.x}
                    y={c.y + 28}
                    fill={isSelected ? '#fef08a' : '#ca8a04'}
                    fontSize={isSelected ? '13' : '11'}
                    fontWeight="800"
                    textAnchor="middle"
                    style={{ textShadow: '0 2px 8px #000000' }}
                  >
                    {c.name.split(' ')[0]}
                  </text>
                  <text
                    x={c.x}
                    y={c.y + 40}
                    fill="#34d399"
                    fontSize="10"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {c.efficiency}%
                  </text>
                </g>
              );
            })}
          </svg>

          <div style={{
            position: 'absolute',
            bottom: '8px',
            right: '12px',
            fontSize: '10.5px',
            color: '#854d0e',
            fontWeight: '600'
          }}>
            Click nodes to inspect rural center metrics
          </div>
        </div>

        {/* Selected Cluster Details Card */}
        <div style={{
          background: 'rgba(10, 10, 15, 0.9)',
          border: '1px solid rgba(234, 179, 8, 0.4)',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.8)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#facc15', fontWeight: '800', textTransform: 'uppercase' }}>
                {activeCluster.zone}
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '900', color: '#fef08a', margin: '3px 0 0 0' }}>
                {activeCluster.name}
              </h4>
            </div>
            <span className="badge badge-emerald">
              <CheckCircle2 size={12} /> {activeCluster.status}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ background: '#050508', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
              <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Assigned Field Officer</span>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#fef08a', marginTop: '2px' }}>
                {activeCluster.fieldOfficer}
              </div>
            </div>

            <div style={{ background: '#050508', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
              <span style={{ fontSize: '11px', color: '#a1a1aa' }}>Active SHG / JLG Groups</span>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#facc15', marginTop: '2px' }}>
                {activeCluster.shgGroups} Groups ({activeCluster.activeBorrowers} Borrowers)
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(234, 179, 8, 0.08)', padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(234, 179, 8, 0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
              <span style={{ color: '#d4d4d8' }}>Doorstep Recovery Progress</span>
              <span style={{ color: '#34d399', fontWeight: '800' }}>{activeCluster.efficiency}%</span>
            </div>
            <div style={{ height: '8px', background: '#1c1c24', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{
                width: `${activeCluster.efficiency}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #facc15 0%, #34d399 100%)',
                borderRadius: '4px'
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginTop: '6px', color: '#a1a1aa' }}>
              <span>Collected: <b style={{ color: '#fef08a' }}>{formatCurrency(activeCluster.collectedToday)}</b></span>
              <span>Demand: <b style={{ color: '#fef08a' }}>{formatCurrency(activeCluster.demandToday)}</b></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RuralVillageClusterMap;
