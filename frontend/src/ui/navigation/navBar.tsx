import * as React from 'react'

import {
  Link
} from 'react-router-dom'

export enum AppRoutes {
  HOME = '/',
  JUXTAPOSE ='/juxtapose',
  HEATMAP = '/heatmap'
}

const Routes: React.FC = () => {

  // return <div></div>

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <ul className="navbar-nav">
        {Object.values(AppRoutes).map(item => {

          let title = ''

          switch (item) {
            case AppRoutes.HOME:
              title = 'Home'
              break

            case AppRoutes.JUXTAPOSE:
              title = 'Juxtapose'
              break

            case AppRoutes.HEATMAP:
              title = 'Heatmap'
              break
          }

            return (
            <li className="nav-item" key={item}>
              <Link to={item} className="nav-link text-white">
                {title}
              </Link>
            </li>
            )
        })}     
        </ul>
      </nav>
    </div>
  )
}

export default Routes