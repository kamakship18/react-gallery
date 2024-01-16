import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const imgData = imageData();
  return (
    <div>
      <h1>Kalvium gallary</h1>
      {
       imgData.map((image) => {
        return(
          <div className="grid"key={image.id}>
            <img src={image.img} alt="img"/>
          </div>
        ) 
        })}
     </div>
  )
}

export default App;
