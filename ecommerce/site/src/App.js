import './App.scss';
import First from './First';
import StickyHeader from './StickyHeader';

function App() {
  return (
    <div className="App">
      <First/>
      {/* Sticky Header */}
      <StickyHeader/>
    </div>
  );
}

export default App;
