import React from 'react';

export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('UI Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#ef4444', textAlign: 'center' }}>
          <h2>Something went wrong in the component UI.</h2>
          <p style={{ marginTop: '8px', color: '#94a3b8' }}>{this.state.error?.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
