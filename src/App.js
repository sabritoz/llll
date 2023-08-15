
import './App.css';
import Playerslist from './compenent/Playerslist';


function App() {
  let playerslist=[
    {
      name:'Messi',
      image:'https://th.bing.com/th/id/R.8ca1c1455583cad4e5f572ea45143b90?rik=GQWHWgFfZlh2PQ&pid=ImgRaw&r=0',
      nationality:'Argentine'
    },
    {
      name:'Ronaldo',
      image:'https://th.bing.com/th/id/OIF.dmy3ECQGO3Ev68d448mfBQ?pid=ImgDet&rs=1',
      nationality:'Portogale'
    },
    {
      name:'Hannabal',
      image:'https://th.bing.com/th/id/OIP.KdXzst1ZioRqBMwfqgaViAHaE8?pid=ImgDet&rs=1',
      nationality:'Tunisia'
    },
    {
      name:'Mbappe',
      image:'https://th.bing.com/th/id/R.f6924f15f7ffdb995082941d3a03d487?rik=Hg2rzZcajMupCA&pid=ImgRaw&r=0',
      nationality:'France'
    }
  ]
  return (
    <div className="App">
      <Playerslist playerslist={playerslist}/>
      
    </div>
  );
}

export default App;