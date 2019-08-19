import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({ error, errorInfo });
    }
  
    render() {
      if (this.state.errorInfo) {
        // You can render any custom fallback UI
        return (
            <>
                <h1>Something went wrong.</h1>
                <div>{this.state.error.toString()}</div>
                <div>{this.state.errorInfo.componentStack}</div>
            </>
        );
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;
