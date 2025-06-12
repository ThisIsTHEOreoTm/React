import flowerImg from './assets/flower.jpg';
import flowerImg2 from './assets/flower2.jpg';
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
        <Post title="My Academy"  content ="This is the 20 academy" > <h1>20</h1> </Post>
        <Post title="hello world" content="This is the hello world article" />
        <Post title="post3"       content="this is the body of post 3" />
      </div>
      <div className={"container3"}>
        <Bottonss title="New"> 
         <div>
          <span>🌟🌟🌟</span>
         </div>
        </Bottonss>
        
        <Bottonss title="most review"> 
         <div>
          <img src={flowerImg} alt="flower" className="img" />
         </div>
        </Bottonss>
        
        <Bottonss title="special review">
          <div>
          <img src={flowerImg2} alt="flower" className="img" />
         </div>

        </Bottonss>
      </div>
      </div>
    </>
  )
}
export default App


















