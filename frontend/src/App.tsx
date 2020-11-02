import * as React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css.map'

import HeatmapPage from './ui/pages/HeatmapPage'
import JuxtaposePage from './ui/pages/JuxtaposePage'

import Navbar, {AppRoutes} from './ui/navigation/NavBar'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path={AppRoutes.JUXTAPOSE}>
            <JuxtaposePage/>
          </Route>
          <Route path={AppRoutes.HEATMAP}>
            <HeatmapPage/>
          </Route>
          <Route path={AppRoutes.HOME}>
            <p>Eerste</p>
          </Route>
        </Switch>

        {/* <div>
          <h1>Health House Modules Demo Page</h1>
        </div>
        <div>
          <h2>Juxtapose</h2>
          <Juxtapose
            beforeUrl={'https://hh-modules.s3.eu-central-1.amazonaws.com/images/juxtapose/before.jpg'}
            afterUrl={'https://hh-modules.s3.eu-central-1.amazonaws.com/images/juxtapose/after.jpg'}
          />
        </div>
          <h2>Heatmap</h2>
          <div
            className="btn btn-primary m-3"
            onClick={generateRandomData}
          >
            {hasData ? 
            <span>
              Reset heatmap data
            </span>
            :
            <span>
              Generate random heatmap data
            </span>
            }       
          </div>
          <Heatmap
            imageUrl={'https://hh-modules.s3.eu-central-1.amazonaws.com/images/heatmap/heatmap.jpg'}
            test={hasData}
          />  */}
      </div>
    </Router>
  );
}

export default App;
