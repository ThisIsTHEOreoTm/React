import Header from './component/Header'
import Post from './component/post'
import Bottonss from './component/bottons'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='Father'>
      <div className="container2">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="container3">
        <Bottonss />
      </div>
      </div>
    </>
  )
}

export default App


















