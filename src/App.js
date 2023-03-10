import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {/* <h1>E-Comm Project</h1> */}
                    <Route path="/login"> 
                        <Login />
                    </Route>
                    <Route path="/register"> 
                        <Register />
                    </Route>
                    <Route path="/add"> 
                        <Protected Cmp = {AddProduct} />
                        {/* <AddProduct /> */}
                    </Route>
                    <Route path="/update"> 
                        <Protected Cmp = {UpdateProduct} />
                        {/* <UpdateProduct /> */}
                    </Route>
                    <Route path="/"> 
                        <Protected Cmp = {ProductList} />
                        {/* <ProductList /> */}
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
