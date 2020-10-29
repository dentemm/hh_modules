import * as React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css.map'

import Juxtapose from './ui/modules/Juxtapose'
import Heatmap from './ui/modules/Heatmap'

function App() {

  const [hasData, setHasData] = React.useState(false)

  const generateRandomData = () => {
    setHasData(!hasData)
  }
  
  return (
    <div className="App">
      <div>
        <h1>Health House Modules Demo Page</h1>
      </div>
      <div>
        <h2>Juxtapose</h2>
        <Juxtapose />
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
          // hasRandomData={hasData}
          test={hasData}
        />
    </div>
  );
}

export default App;
