
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import data from './data';

function App() {
  
  return (
    <div>
      <Header />
      <main>
      {data.map(item => <Blog key={item.title} {...item}/>)}
      </main>
      
    </div>
    
  );
}

export default App;
