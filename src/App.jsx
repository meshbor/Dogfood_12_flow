import { useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {

  const [hook, setHook] = useState(0);
  const [isAvailable, setAvailabale] = useState(true);


  let counter = 3;

  // const arr = [1,2,3,5];
  // const [first, second, third, adsasasfd] = arr;

  // console.log('first, second, third, adsasasfd', first, second, third, adsasasfd);
  console.log(hook);

  const clicker = () => {
    console.log('works');
    setHook((state) =>  state = state + 1 )
  }
  // setHook((state) =>  state = state + 1 )


  // hook = 'newewewe'; DEPRECATED
  return (
    <div className="App">

      <Header myTitle={'Title'} attributes={{ name: 'all' }}>
        <span className="children-name">
          something inside
        </span>

      </Header>
      {counter}
      <div></div>
      {hook}

      <button onClick={() => counter = counter + 1}>click me</button>
      <button onClick={clicker}>click me state</button>

      <CardList customattr='acaca' />
      {/* <Footer /> */}

    </div>
  );
}


export default App;
