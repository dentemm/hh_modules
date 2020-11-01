import * as React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

enum AppRoutes {
  HOME = '/',
  JUXTAPOSE ='/juxtapose',
  HEATMAP = '/heatmap'
}

const Routes: React.FC = () => {
  return (
    <nav>
      <ul>
      {Object.values(AppRoutes).map(item => {
          return (
          <li>
            <Link to={item}>
              {item}
            </Link>
          </li>
          )
      })}     
      </ul>
    </nav>
  )
}

export default Routes