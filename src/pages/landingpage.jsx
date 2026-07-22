import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Homepage = () => {
  return (
    <header className="bg-[#0a0f0d] px-6 py-3 border-b border-white/5">
      <nav className="flex flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="logoside flex items-center gap-3">
          <img src={logo} alt="Victor's Trade Hub logo" className="w-9 h-9 rounded-xl" />
          <span>treade hub</span>
        </div>

        <div>
          <ul className="flex flex-row items-center gap-1 list-none m-0 p-0">
            <li className="px-4 py-2">Home</li>
            <li className="px-4 py-2">Marketplace</li>
          </ul>
        </div>

        <div className="endside">
          <Link to="/login" className="text-white hover:underline">Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Homepage