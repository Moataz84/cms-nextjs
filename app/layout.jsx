import "@/app/styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}