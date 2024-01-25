import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand fixed-top bg-body-tertiary">
          <div className="container-fluid flex-nowrap">
            <NavLink
              className="btn navbar-brand bg-primary"
              aria-current="page"
              to={'/'}
            >
              #
            </NavLink>

            <div className="d-flex justify-content-end border-start ps-3">
              <div className="btn-group">
                <NavLink
                  className={({ isActive, isPending }) =>
                    (isPending ? 'pending' : isActive ? 'active' : '') +
                    ` btn text-nowrap text-truncate`
                  }
                  aria-current="page"
                  to={'/'}
                >
                  - / -
                </NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    (isPending ? 'pending' : isActive ? 'active' : '') +
                    ` btn text-nowrap text-truncate`
                  }
                  aria-current="page"
                  to={'/home'}
                >
                  home
                </NavLink>
                <NavLink
                  className={({ isActive, isPending }) =>
                    (isPending ? 'pending' : isActive ? 'active' : '') +
                    ` btn text-nowrap text-truncate`
                  }
                  aria-current="page"
                  to={'/about'}
                >
                  about
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
