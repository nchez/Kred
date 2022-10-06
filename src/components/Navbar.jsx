export default function Navbar({ setPage }) {
  const handleNavClick = (page) => {
    setPage(page)
  }
  return (
    <nav>
      <ul
        className="nav nav-tabs justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li
          className="nav-item"
          role="presentation"
          onClick={() => {
            handleNavClick('all')
          }}
        >
          <button
            className="nav-link active"
            id="all-tab"
            data-bs-toggle="tab"
            data-bs-target="#all"
            type="button"
            role="tab"
            aria-controls="all"
            aria-selected="true"
          >
            All NFTs
          </button>
        </li>
        <li
          className="nav-item"
          role="presentation"
          onClick={() => {
            handleNavClick('hidden')
          }}
        >
          <button
            className="nav-link"
            id="hidden-tab"
            data-bs-toggle="tab"
            data-bs-target="#hidden"
            type="button"
            role="tab"
            aria-controls="hidden"
            aria-selected="false"
          >
            Hidden NFTs
          </button>
        </li>
      </ul>
    </nav>
  )
}
