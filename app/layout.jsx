import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <header>
        </header>
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}

export default RootLayout