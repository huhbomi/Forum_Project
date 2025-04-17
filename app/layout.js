import './globals.css' // ✅ 글로벌 CSS 연결

export const metadata = {
  title: '보미의 게시판',
  description: 'Next.js x MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
