import React from 'react'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Mauli
          </a>
          <button>
            <img src={"assets/menu.svg"} alt="menu" className='w-6 h-6' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
