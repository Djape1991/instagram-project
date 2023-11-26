import './App.css';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';

function App() {
  return (
    <div style={styles.appContainer}>

      <Sidebar/>

      <div>
        <Stories/>
        <Posts/>
      </div>

    </div>
  );
}

const styles = {
  appContainer:{
    display: 'flex'
  }
}

export default App;