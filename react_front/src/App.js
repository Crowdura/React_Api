import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './main/main';
import CreacteUser from './user/createUser';
import DelectUser from './user/delectUser';
import UpdateUser from './user/updateUser';
import ShowListUser from './user/showListUser';
import ShowUser from './user/showUser';
function App() {
  return (
    <div className="App">
      <Main/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ShowListUser/> }></Route>
        <Route path='/create' element={ <CreacteUser/> }></Route>
        <Route path='/showuser/:id' element={ <ShowUser/> }></Route>
        <Route path='/delect/:id' element={ <DelectUser/> }></Route>
        <Route path='/update/:id' element={ <UpdateUser/> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
