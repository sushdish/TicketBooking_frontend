import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Cart from "./core/Cart";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import PrivateRoute from "./auth/helper/PrivateRoute";
import AdminRoute from "./auth/helper/AdminRoute";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import UpdateCategory from "./admin/UpdateCategory";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import BookingModal from './core/components/BookingModal';
import Card from './core/components/Card';
import MyBookings from './core/components/MyBookings';
import MyCancellations from './core/components/Cancellation'
import AdminCancellations from "./admin/AdminCancellations";
import RequestSolved from "./core/components/ResolvedQuery";
import AdminSolvedReq from "./admin/AdminAllSolvedReq";
import Testing from "./core/components/Testing"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/testing" exact component={Testing} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/booking-modal" component={BookingModal} />
        <Route path="/card" component={Card} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <PrivateRoute path="/user/mybookings" exact component={MyBookings} />
        <PrivateRoute path="/user/mycancellations" exact component={MyCancellations} />
        <PrivateRoute path="/user/requestsolved" exact component={RequestSolved} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute
          path="/admin/cancellation/update"
          exact
          component={AdminCancellations}
        />
        <AdminRoute
          path="/admin/cancellation/adminsolved"
          exact
          component={AdminSolvedReq}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
