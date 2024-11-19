// layout.tsx
import './globals.css';

export const metadata = {
  title: 'リクルート用LPサイト',
  description: '私たちのチームに参加しませんか？',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header style={{ padding: '1rem', background: '#0070f3', color: '#fff' }}>
          <h1 style={{ textAlign: 'center' }}>Join Our Team</h1>
        </header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            padding: '1rem',
            background: '#333',
            color: '#fff',
          }}
        >
          <p>© 2024 Our Company. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
