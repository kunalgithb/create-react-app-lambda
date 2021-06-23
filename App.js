import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import MainRoute from './utils/MainRoute';
import DataContext from './context/DataContext';

// Layouts
import Wrapper from './layout/Wrapper';

// Views 
import Home from './views/Home';

const App = () => {

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    // fetch(`http://localhost:5000/home`,
    //   {
    //     method: "GET",
    //     headers: new Headers({
    //       Accept: "application/json"
    //     })
    //   }
    // )
    //   .then(res => res.json())
    //   .then(response => {
    //     setData(response);
    //     setIsLoading(false);
    //   })
    //   .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    //document.title = "This is a title"
  }, [])


  return (
    <Switch>
      {isLoading ? <div></div> :
        <DataContext.Provider value={data}>
          <MainRoute exact path="/" component={Home} layout={Wrapper} />
        </DataContext.Provider>
      }
    </Switch>
  );
}

export default App;
