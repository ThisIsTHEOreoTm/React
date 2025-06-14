import flowerImg from './assets/flower.jpg';
import flowerImg2 from './assets/flower2.jpg';
import Header from './component/Header'
import Post from './component/post'
import Bottonss from './component/bottons'
import './App.css'

function App() {
  const posts = [
    { title: "My Academy", content: "This is the 20 academy", children: <h1>20</h1> },
    { title: "hello world", content: "This is the hello world article" },
    { title: "post3", content: "this is the body of post 3" }
  ];
  const postElements = posts.map((post, index) => (
    <Post 
      key={index} 
      title={post.title} 
      content={post.content} 
    >
    {post.children}
    </Post>
  ));
  const bottons = [
    { title: "New", children: "🌟🌟🌟" },
    { title: "most review", children: <img src={flowerImg} alt="flower" className="img" /> },
    { title: "special review", children: <img src={flowerImg2} alt="flower" className="img" /> }
  ];
  const bottonElements = bottons.map((button, index) => (
    <Bottonss 
    key={index} 
    title={button.title}> 
       <div>
        {button.children}
       </div>
      </Bottonss>
  ));
  
  return (
    <>
      <Header />
      <div className='Father'>
      <div className="container2">
        {postElements}
      </div>
      <div className={"container3"}>
        {bottonElements}
      </div>
      </div>
    </>
  )
}
export default App

























