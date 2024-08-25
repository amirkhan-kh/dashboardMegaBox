import './_header.scss'
const Header = () => {
  return (
      <header className=" ms-[14.6%] py-3">
      <div className="flex items-center gap-3 px-7 justify-between">
        <form
          id="searchInput"
          className="flex items-center gap-5 bg-gray-200 py-2 px-4 rounded-2xl w-full"
        >
          <i className="bi bi-search"></i>
          <input type="search" placeholder="Qidiruv..." />
        </form>
        <div className="flex items-center gap-3 w-1/10">
          <button>
            <i className="bi bi-bell-fill"></i>
          </button>
          <input id="checkbox" type="checkbox" />
          <button>
            <img src="" alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header