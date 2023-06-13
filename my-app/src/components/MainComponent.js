import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
//component
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
//shared
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS

        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />

            );
        }
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
      
        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>

                <Footer />

            </div>
        );
    }
}

// const Main = () => {
//     const [dishes, setDishes] = React.useState(DISHES);
//     const [comments, setComments] = React.useState(COMMENTS);
//     const [promotions, setPromotions] = React.useState(PROMOTIONS);
//     const [leaders, setLeaders] = React.useState(LEADERS);

    
//     const HomePage = () => {
//         return (
//             <Home
//                 dish={dishes.filter((dish) => dish.featured)[0]}
//                 promotion={promotions.filter((promo) => promo.featured)[0]}
//                 leader={leaders.filter((leader) => leader.featured)[0]}
//             />
//         );
//     };

//     return (
//         <div>
//             <Header />
//             <Switch>
//                 <Route path='/home' component={HomePage} />
//                 <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
//                 <Redirect to="/home" />
//                 <Route exact path='/contactus' component={Contact} />
//             </Switch>

//             <Footer />
//         </div>
//     );
// };



export default Main;