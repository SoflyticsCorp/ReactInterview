import React from 'react';
import EvalParent from './Eval/EvalParent';
import EvalStandalone from './Eval/EvalStandalone';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Test EventBus by itself first */}
        {/* <EvalStandalone/> */}
        {/* Test EventBus hook */}
        {/* <EvalParent/> */}
      </header>
    </div>
  );
}

export default App;
