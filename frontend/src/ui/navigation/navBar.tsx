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