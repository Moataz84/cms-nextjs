import Menu from "@/app/components/Menu"
import Footer from "@/app/components/Footer"
import "@/app/styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Menu />
          <div className="content">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}