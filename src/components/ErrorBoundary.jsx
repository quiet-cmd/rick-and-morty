import { Component } from 'react';
import { Title } from '@mantine/core';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.props.isOnline;

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErrorBoundary error', error);
    console.log('ErrorBoundary errorInfo', errorInfo);
  }
  
  

  render() {
    if(this.state.hasError) {
      return (
        <>
          <Title order={2}>{this.props.isOnline ? 'Sad UwU' : 'offline'}</Title>
        </>  
      );
    }
        
    return this.props.children;
  }
}

export default ErrorBoundary;