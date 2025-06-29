import '../globals.css';
import { ReduxProvider } from '../lib/redux/providers/ReduxProvider';
import Sidebar from '../components/layout/Sidebar';
import AuthInitializer from '../components/auth/AuthInitializer';
import { AuthChecker } from '../components/auth/AuthChecker';

export const metadata = {
  title: 'Burger House',
  description: 'Aplicación de pedidos para burger house',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        
        <ReduxProvider>
          <AuthInitializer>
            <AuthChecker/>
              <Sidebar />
              <main className="pt-8 px-4 sm:px-6 lg:px-8">
                {children}
              </main>
          </AuthInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}
