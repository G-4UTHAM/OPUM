import React from 'react';

const FriendzyApp = () => {
  const stories = [
    { name: 'My Story', image: 'https://via.placeholder.com/50' },
    { name: 'Selena', image: 'https://via.placeholder.com/51' },
    { name: 'Clara', image: 'https://via.placeholder.com/52' },
    { name: 'Fabian', image: 'https://via.placeholder.com/53' },
  ];

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'white' }}>
        <div style={{ fontSize: '12px', color: 'gray' }}>9:41</div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'purple' }}>Friendzy</h1>
        <span style={{ fontSize: '20px' }}>🔔</span>
      </div>

      {/* Stories */}
      <div style={{ display: 'flex', overflowX: 'auto', padding: '10px', backgroundColor: 'white' }}>
        {stories.map((story, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px' }}>
            <img src={story.image} alt={story.name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid purple' }} />
            <span style={{ fontSize: '12px', marginTop: '5px' }}>{story.name}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <button style={{ backgroundColor: 'lightgray', color: 'purple', padding: '10px', borderRadius: '20px', border: 'none' }}>Make Friends</button>
        <button style={{ backgroundColor: 'purple', color: 'white', padding: '10px', borderRadius: '20px', border: 'none' }}>Search Partners</button>
      </div>

      {/* Content Card */}
      <div style={{ backgroundColor: 'white', borderRadius: '10px', margin: '10px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ position: 'relative' }}>
          <img src="https://via.placeholder.com/400x200" alt="Travel destination" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(255,255,255,0.7)', padding: '5px 10px', borderRadius: '15px', fontSize: '12px' }}>
            ✈️ Travel
          </div>
        </div>
        <div style={{ padding: '15px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>If you could live anywhere in the world, where would you pick?</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://via.placeholder.com/32" alt="Miranda Kehlani" style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '10px' }} />
            <div>
              <p style={{ fontWeight: 'bold' }}>Miranda Kehlani</p>
              <p style={{ fontSize: '12px', color: 'gray' }}>STUTTGART</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 15px 15px' }}>
          <span>👍</span>
          <span>💬</span>
          <span>⋯</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', padding: '10px', maxWidth: '400px', margin: '0 auto' }}>
        <span style={{ fontSize: '24px' }}>🏠</span>
        <span style={{ fontSize: '24px' }}>🔍</span>
        <span style={{ fontSize: '24px' }}>➕</span>
        <span style={{ fontSize: '24px' }}>👥</span>
        <span style={{ fontSize: '24px' }}>💬</span>
      </div>
    </div>
  );
};

export default FriendzyApp;