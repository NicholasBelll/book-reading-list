import './globals.css';
import ReduxProvider from "./Provider";
import NotificationBanner from '../features/notifications/NotificationBanner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <header className="bg-white shadow sticky top-0 z-10">
          <nav className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="/reading-list" className="text-2xl font-bold text-blue-700 tracking-tight">Book Reading List</a>
            <div className="flex gap-4">
              <a href="/reading-list" className="text-gray-700 hover:text-blue-600 font-medium">Reading List</a>
            </div>
          </nav>
        </header>
        <ReduxProvider>
          <NotificationBanner />
          <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">
            {children}
          </main>
        </ReduxProvider>
        <footer className="bg-white border-t mt-8 py-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Book Reading List. Made with Next.js & Redux.
        </footer>
      </body>
    </html>
  );
}
