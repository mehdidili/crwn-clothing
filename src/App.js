import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/header.component';
class App extends Component {
  constructor(){
    super();
  
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
        const { setCurrentUser }= this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot =>{
              setCurrentUser({
                currentUser:{
                  id: snapShot.id,
                  ...snapShot.data()
                }
              });
            });
          }

          setCurrentUser(userAuth);
      });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {  
    return (
    <div > 
      <Header  />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact 
               path='/signin'
               render={() =>
                 this.props.currentUser ? 
                 (<Redirect to='/' />) : 
                 (<SignInAndSignUpPage />) }
               />
      </Switch>
          
    </div>
  );}

}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})


const mapDispatchToProps = dispatch => {
  return { setCurrentUser: user => dispatch(setCurrentUser(user))  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
