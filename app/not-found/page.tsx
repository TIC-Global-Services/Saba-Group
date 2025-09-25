import Link from 'next/link'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 
            className="text-9xl font-bold tracking-tight"
            style={{ color: '#10562C' }}
          >
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 
            className="text-3xl font-semibold mb-4"
            style={{ color: '#10562C' }}
          >
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 w-full"
            style={{ 
              backgroundColor: '#10562C',
              color: 'white'
            }}
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 w-full border-2"
            style={{ 
              borderColor: '#10562C',
              color: '#10562C'
            }}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="text-sm text-gray-500">
          <p className="mb-2">Looking for something specific?</p>
          <Link 
            href="/search"
            className="inline-flex items-center hover:underline"
            style={{ color: '#10562C' }}
          >
            <Search className="w-4 h-4 mr-1" />
            Try our search
          </Link>
        </div>
      </div>
    </div>
  )
}