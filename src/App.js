import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Breakfast from "./Pages/Breakfast/Breakfast";
import Dinner from "./Pages/Dinner/Dinner";
import Lunch from "./Pages/Lunch/Lunch";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Home from "./Shared/Header/Home";
import Login from "./Shared/Header/Login/Login";
import Navigationbar from "./Shared/Header/Navigationbar";
import Register from "./Shared/Header/Register/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Navigationbar />
            <Header></Header>
            <Container>
              <Breakfast></Breakfast>
            </Container>
            <Footer></Footer>
        </Route>

        <Route path="/home">
        <Navigationbar />
        <Header></Header>
          <Container>
          <Home></Home>
          </Container>
          <Footer></Footer>
        </Route>

        <Route path="/breakfast">
        <Navigationbar />
        <Header></Header>
          <Container>
            <Breakfast></Breakfast>
          </Container>
          <Footer></Footer>
        </Route>

        <Route path="/lunch">
        <Navigationbar />
            <Header></Header>
          <Container>
            <Lunch></Lunch>
          </Container>
          <Footer></Footer>
        </Route>

        <Route path="/dinner">
        <Navigationbar />
            <Header></Header>
          <Container>
           <Dinner></Dinner>
          </Container>
          <Footer></Footer>
        </Route>
        
        <Route path="/login">
          {/* <Navigationbar/> */}
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
