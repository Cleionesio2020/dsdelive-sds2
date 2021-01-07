import NavBar from "./navbar/Index"
import Home from "./home"
import Orders from "./orders"
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";


export default function Routes() {
    return (
        <BrowserRouter>
         <NavBar />
            <Switch>
                <Route path="/orders"><Orders/></Route>
                <Route path="/"><Home/></Route>
            </Switch>
        </BrowserRouter>
    )
}