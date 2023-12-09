import React, { ReactNode, Suspense } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		// You can also log the error to an error reporting service
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props

		if(hasError) {
			return <Suspense fallback=""></Suspense>
		}

		return children
	}
}

export default ErrorBoundary