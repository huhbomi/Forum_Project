
import './globals.css' // ✅ 글로벌 CSS 연결
import 'bootstrap/dist/css/bootstrap.min.css'


export const metadata = {
  title: '보미의 게시판',
  description: 'Next.js x MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Bom's Forum</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/list">List</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
