import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/auth_pages/Login.jsx'
import {
  Signup, Verify, ResetPass, Dashboard, EditUser, Orders, OrderDetails, WriteReview, Wishlist, Shippingspage, AddShipping, ReviewsPage,
  AdminDashboard, Products, AddProduct, UpdateProduct, Users, UserDetails, AdminUserEdit, BlogPosts, Comments, AddBlog, UpdateBlog, Categories, AddCategory, UpdateCategory,
  BlogsPage, BlogPage, ContactUsPage, ProductsPage, ProductPage, Search, ShoppingCart, HomePage, AboutPage, PrivacyPolicy, TermsAndConditions,
  NotFound, InternalError, Forbidden, Unauthorized, ServiceUnavailable,
  Checkout, PaypalButtons, StripeButton, OrderSuccess, OrderCancel,
  EditShipping, AdminOrders, AdminOrder, UpdateComment, Logout,
  BadRequest,
} from './pages/Index.js'
import { OrderTracking } from './components/index.js'
import UiWrapper from './components/wrappers/uiWrapper.jsx'
import UserWrapper from './components/wrappers/userWrapper.jsx'
import AdminWrapper from './components/wrappers/adminWrapper.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* UI Pages */}
      <Route path='' element={<UiWrapper><HomePage /></UiWrapper>} />
      <Route path='about' element={<UiWrapper><AboutPage /></UiWrapper>} />
      <Route path='shop/products' element={<UiWrapper><ProductsPage /></UiWrapper>} />
      <Route path='shop/product/:productId' element={<UiWrapper><ProductPage /></UiWrapper>} />
      <Route path='cart' element={<UiWrapper><ShoppingCart /></UiWrapper>} />
      <Route path='checkout' element={<UiWrapper><Checkout /></UiWrapper>} />
      <Route path='paypal' element={<PaypalButtons />} />
      <Route path='stripe' element={<StripeButton />} />
      <Route path='order/success' element={<OrderSuccess />} />
      <Route path='order/cancel' element={<OrderCancel />} />
      <Route path='reviews' element={<UiWrapper><ReviewsPage /></UiWrapper>} />
      <Route path='blogs' element={<UiWrapper><BlogsPage /></UiWrapper>} />
      <Route path='blog/:slug' element={<UiWrapper><BlogPage /></UiWrapper>} />
      <Route path='contact' element={<ContactUsPage />} />
      <Route path='shop/search' element={<Search />} />

      {/* User auth routes */}
      <Route path='auth/login' element={<Login />} />
      <Route path='auth/signup' element={<Signup />} />
      <Route path='auth/verify' element={<Verify />} />
      <Route path='auth/reset-password' element={<ResetPass />} />
      <Route path='auth/logout' element={<Logout />} />

      {/* User profile routes */}
      <Route path='account/dashboard' element={<UserWrapper><Dashboard /></UserWrapper>} />
      <Route path='account/edit' element={<UserWrapper><EditUser /></UserWrapper>} />
      <Route path='account/orders' element={<UserWrapper><Orders /></UserWrapper>} />
      <Route path='account/order/:orderId' element={<UserWrapper><OrderDetails /></UserWrapper>} />
      <Route path='account/order/tracking/:Id' element={<UserWrapper><OrderTracking /></UserWrapper>} />
      <Route path='account/review/:orderId' element={<UserWrapper><WriteReview /></UserWrapper>} />
      <Route path='account/wishlist' element={<UserWrapper><Wishlist /></UserWrapper>} />
      <Route path='account/shipping' element={<UserWrapper><Shippingspage /></UserWrapper>} />
      <Route path='account/shipping/add' element={<UserWrapper><AddShipping /></UserWrapper>} />
      <Route path='account/shipping/edit/:Id' element={<UserWrapper><EditShipping /></UserWrapper>} />

      {/* Website terms and policy routes */}
      <Route path='privacy-policy' element={<PrivacyPolicy />} />
      <Route path='terms-conditions' element={<TermsAndConditions />} />

      {/* Admin panel routes */}
      <Route path='admin/dashboard' element={<AdminWrapper><AdminDashboard /> </AdminWrapper>} />
      <Route path='admin/products' element={<AdminWrapper><Products /></AdminWrapper>} />
      <Route path='admin/product/add' element={<AdminWrapper><AddProduct /></AdminWrapper>} />
      <Route path='admin/product/update/:productId' element={<AdminWrapper><UpdateProduct /></AdminWrapper>} />
      <Route path='admin/users' element={<AdminWrapper><Users /></AdminWrapper>} />
      <Route path='admin/user/:userId' element={<AdminWrapper><UserDetails /></AdminWrapper>} />
      <Route path='admin/user/edit/:userId' element={<AdminWrapper><AdminUserEdit /></AdminWrapper>} />
      <Route path='admin/blogs' element={<AdminWrapper><BlogPosts /></AdminWrapper>} />
      <Route path='admin/comments/:blogId' element={<AdminWrapper><Comments /></AdminWrapper>} />
      <Route path='admin/comment/:commentId' element={<AdminWrapper><UpdateComment /></AdminWrapper>} />
      <Route path='admin/blog/add' element={<AdminWrapper><AddBlog /></AdminWrapper>} />
      <Route path='admin/blog/update/:blogId' element={<AdminWrapper><UpdateBlog /></AdminWrapper>} />
      <Route path='admin/categories' element={<AdminWrapper><Categories /></AdminWrapper>} />
      <Route path='admin/category/add' element={<AdminWrapper><AddCategory /></AdminWrapper>} />
      <Route path='admin/category/update/:categoryId' element={<AdminWrapper><UpdateCategory /></AdminWrapper>} />
      <Route path='admin/orders' element={<AdminWrapper><AdminOrders /></AdminWrapper>} />
      <Route path='admin/order/:orderId' element={<AdminWrapper><AdminOrder /></AdminWrapper>} />

      {/* Error pages */}
      <Route path='error/400' element={<BadRequest />} />
      <Route path='error/401' element={<Unauthorized />} />
      <Route path='error/403' element={<Forbidden />} />
      <Route path='error/404' element={<NotFound />} />
      <Route path='error/500' element={<InternalError />} />
      <Route path='error/503' element={<ServiceUnavailable />} />
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </StrictMode>,
)