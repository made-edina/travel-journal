
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import data from './data';

function App() {
  const blog = data.map(item => {
    return (
      <Blog 
        key={item.title}
        {...item}
      />
    )
  })
  
  return (
    <div>
      <Header />
      <main>
      {blog}
      </main>
      
    </div>
    
  );
}

export default App;
