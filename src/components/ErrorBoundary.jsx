import { Component } from 'react';
import { Title } from '@mantine/core';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

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
      return <h2>Sad UwU</h2>;
    }
        
    return this.props.children;
  }
}

export default ErrorBoundary;