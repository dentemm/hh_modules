import * as React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css.map'

import Juxtapose from './ui/modules/Juxtapose'
import Heatmap from './ui/modules/Heatmap'

function App() {
  return (
    <div className="App">
      {/* <Juxtapose /> */}
      <Heatmap />
    </div>
  );
}

export default App;
