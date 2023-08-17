import './App.css';
import Playerslist from "./compenent/Playerslist"
function App() {
  const players=[
    {
      name:'Messi',
      element:'Hydro',
      elmage:'https://i.pinimg.com/originals/8a/6c/25/8a6c2525df02ac9c4084319d10cecb2b.png',
      region:'Monstadt',
      image:'https://listabuzz.com/wp-content/uploads/2014/06/Messi-2.jpg',
    },
    {
      name:'madisson',
      element:'Anemo',
      elmage:'https://pbs.twimg.com/profile_images/1483396060/o_selecao_brasileira_ronaldo_o_fenomeno-2649695_400x400.jpg',
      region:'Liye',
      image:'https://th.bing.com/th/id/OIP.E6zjXUUr0HwmalO0jPAHIQHaEK?pid=ImgDet&rs=1'
    },
    {
      name:'jason',
      element:'Pyro',
      elmage:'https://th.bing.com/th/id/OIP.2yO32uvIXKNxc7Ra9gMGsgHaFj?pid=ImgDet&rs=1',
      region:'Inazuma',

    },
    {
      name:'neymar',
      element:'Dendro',
      elmage:'https://th.bing.com/th/id/R.6f8f53c8b29890899fc35e6ce5d2fec5?rik=mlAH3bbFcofs3w&pid=ImgRaw&r=0',
      region:'Sumeru',

      
    }
  ]
  return (
    <div className="App">
      <Playerslist players={players}/>
    </div>
  );
}

export default App;
