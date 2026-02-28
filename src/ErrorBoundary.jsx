import React from 'react';

class ErrorBoundary extends React.Component {
       constructor(props) {
              super(props);
              this.state = { hasError: false, error: null };
       }

       static getDerivedStateFromError(error) {
              return { hasError: true, error };
       }

       componentDidCatch(error, errorInfo) {
              // You can also log the error to an error reporting service
              console.error("Uncaught error strictly caught by ErrorBoundary:", error, errorInfo);
       }

       render() {
              if (this.state.hasError) {
                     // Fallback UI
                     return (
                            <div className="min-h-screen bg-black text-red-500 font-mono flex flex-col items-center justify-center p-6 selection:bg-red-900 selection:text-white">
                                   <svg className="w-16 h-16 mb-6 text-red-500/80 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                   </svg>
                                   <div className="border border-red-900/50 bg-red-950/20 p-8 max-w-lg w-full text-center relative overflow-hidden">
                                          {/* HUD Decorators */}
                                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500"></div>
                                          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500"></div>
                                          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500"></div>
                                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500"></div>

                                          <h1 className="text-xl font-bold mb-2 uppercase tracking-widest text-red-400">Neural Link Severed</h1>
                                          <p className="text-sm text-red-300/60 mb-8 font-light">
                                                 An unexpected critical sub-system failure occurred. The firewall layer could not initialize.
                                          </p>
                                          <button
                                                 onClick={() => window.location.reload()}
                                                 className="px-8 py-3 bg-red-900/40 hover:bg-red-900/60 border border-red-500/30 text-red-400 font-bold uppercase tracking-widest text-xs transition-colors w-full"
                                          >
                                                 Initiate Reboot Sequence
                                          </button>
                                   </div>
                            </div>
                     );
              }

              return this.props.children;
       }
}

export default ErrorBoundary;
