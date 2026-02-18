import React from 'react';

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4">
        {children}
      </main>
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-500">
          <p>© 2026 AI Tools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
