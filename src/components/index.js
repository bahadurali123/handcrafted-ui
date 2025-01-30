import Button from "./Other_components/Button.component";
import Input from "./Other_components/Input.component";
import PasswordInput from "./Other_components/Pass_input.component";
import Checkbox from "./Other_components/Checkbox.component";
import Header from "./Other_components/Header.component";
import Footer from "./Other_components/Footer.component";
import Pagination from "./Other_components/Pagination.component";
import NoData from "./Other_components/Nodata.component";
import LoadingIndicator from "./Other_components/Loading.component";

import Login from "./auth_components/login.component";
import Signup from "./auth_components/Signup.component";
import Verification from "./auth_components/Verification.component";
import Resetpass from "./auth_components/Resetpass.component";
import Logout from "./auth_components/logout.component";

import UserProfile from "./user_components/Userprofile.component";
import OrderHistory from "./user_components/Orderhistory.component";
import Wishlist from "./user_components/Wishlist.component";
import ShippingAddress from "./user_components/Shippingaddress.component";
import SingleOrder from "./user_components/Singleorder.component";
import EditUser from "./user_components/Edituser.component";
import Orders from "./user_components/Orders.component";
import OrderProduct from "./user_components/Orderproduct.component";
import OrderDetails from "./user_components/Orderdetails.component";
import WriteReview from "./user_components/Writereview.component";
import SingleWishlistItem from "./user_components/SinglewishlistItem.component";
import WishlistPage from "./user_components/Wishlists.component";
import SingleShippingAddress from "./user_components/Singleshippingaddress.component";
import ShippingAddressesPage from "./user_components/Shippingaddresses.component";
import AddShipping from "./user_components/Addshipping.component";
import EditShipping from "./user_components/Editshipping.component";
import OrderTracking from "./user_components/Ordertracking.component";

import SingleReview from "./main_pages_components/Review_components/Singlereview.component";
import ReviewsPage from "./main_pages_components/Reviews.component";
import BlogCategorySlider from "./main_pages_components/Blog_components/Categoryslider.component";
import BlogList from "./main_pages_components/Blog_components/Bloglist.component";
import BlogsPage from "./main_pages_components/Blogs.componet";
import Blog from "./main_pages_components/Blog_components/Blog.component";
import BlogComments from "./main_pages_components/Blog_components/Comments.component";
import BlogPage from "./main_pages_components/Blog.component";
import ContactUs from "./main_pages_components/Contactus.component";
import ProductComponent from "./main_pages_components/Product_components/Singleproduct.component";
import ProductFilterPopup from "./main_pages_components/Product_components/Productfilterpopup.component";
import ProductsPage from "./main_pages_components/Products.component";
import ProductPage from "./main_pages_components/Product.component";
import Search from "./main_pages_components/Search.component";
import ShoppingCart from "./main_pages_components/Shoppingcart.component";
import CartProduct from "./main_pages_components/Product_components/Cartproduct.component";
import Checkout from "./main_pages_components/Checkout.component";
import HeroSection from "./main_pages_components/Home_components/Herosection.component";
import CategoriesSection from "./main_pages_components/Home_components/Categoriessection.component";
import FeaturedProducts from "./main_pages_components/Home_components/Featuredproducts.component";
import FeaturedBlogs from "./main_pages_components/Home_components/Featuredblogs.component";
import UserSatisfaction from "./main_pages_components/Home_components/Usersatisfaction.component";
import HomePage from "./main_pages_components/Home.component";
import AboutPage from "./main_pages_components/About.component";
import PrivacyPolicy from "./main_pages_components/Privacypolicy.component";
import TermsAndConditions from "./main_pages_components/Termsandconditions.component";
import PaypalButtons from "./main_pages_components/Paypal.component";
import StripeButton from "./main_pages_components/Stripe.component";
import OrderSuccess from "./main_pages_components/ordersuccess.component";
import OrderCancel from "./main_pages_components/ordercancel.component";

import Stats from "./admin_dashboard/Dashboard_components/Stats.component";
import AdminHeader from "./admin_dashboard/Header.component";
import RecentOrders from "./admin_dashboard/Dashboard_components/Recentorders.component";
import LowStockAlerts from "./admin_dashboard/Dashboard_components/Lowstockalerts.component";
import AdminDashboard from "./admin_dashboard/Dashboard_components/Dashboard.component";
import RecentOrderItem from "./admin_dashboard/Dashboard_components/Recentorderitem.component";
import PageHeader from "./admin_dashboard/Pageheader.component";
import ProductRow from "./admin_dashboard/Product_components/Productrow.component";
import FilterPopup from "./admin_dashboard/Product_components/Filterpopup.component";
import Products from "./admin_dashboard/Products.component";
import AddProduct from "./admin_dashboard/Addproduct.component";
import ProductForm from "./admin_dashboard/Product_components/Productform.component";
import UpdateProduct from "./admin_dashboard/Updateproduct.component";
import UserRow from "./admin_dashboard/User_components/Userrow.component";
import Users from "./admin_dashboard/Users.component";
import UserFilterPopup from "./admin_dashboard/User_components/Filterpopup.component";
import SingleUserOrder from "./admin_dashboard/User_components/Singleorder.component";
import UserDetails from "./admin_dashboard/User.component";
import EditUserFromAdmin from "./admin_dashboard/Edituser.component";
import BlogPostItem from "./admin_dashboard/Blog_components/Blogpostitem.component";
import BlogPosts from "./admin_dashboard/Blogposts.component";
import BlogsFilterPopup from "./admin_dashboard/Blog_components/Filterpopup.component";
import CommentItem from "./admin_dashboard/Blog_components/Commentitem.component";
import CommentsFilterPopup from "./admin_dashboard/Blog_components/CommentsFilterpopup.component";
import Comments from "./admin_dashboard/Comments.component";
import UpdateCommentStatus from "./admin_dashboard/Updatecomment.component";
import BlogForm from "./admin_dashboard/Blog_components/Blogform.component";
import AddBlog from "./admin_dashboard/Addblog.component";
import UpdateBlog from "./admin_dashboard/Updateblog.component";
import SingleCategory from "./admin_dashboard/Categorie_component/Singlecategory";
import CategoryFilterPopup from "./admin_dashboard/Categorie_component/Categoryfilterpopup.component";
import Categories from "./admin_dashboard/Categories.component";
import CategoryForm from "./admin_dashboard/Categorie_component/Categoryform.component";
import AddCategory from "./admin_dashboard/Addcategory.component";
import UpdateCategory from "./admin_dashboard/Updatecategory.component";
import OrderItem from "./admin_dashboard/Order_components/Orderitems.component";
import AdminOrders from "./admin_dashboard/Orders.component";
import OrdersFilterPopup from "./admin_dashboard/Order_components/Filterpopup.component";
import AdminOrderProduct from "./admin_dashboard/Order_components/Orderproduct.component";
import AdminOrder from "./admin_dashboard/Order.component";

import NotFoundPage from "./error_pages_components/Notfound.component";
import ServerErrorPage from "./error_pages_components/Internalserver.component";
import ForbiddenPage from "./error_pages_components/Forbidden.component";
import UnauthorizedPage from "./error_pages_components/Unauthorized.component";
import ServiceUnavailablePage from "./error_pages_components/Serviceunavailable.component";
import BadRequestPage from "./error_pages_components/BadRequest.component";

export {
    Button, // Others
    Input,
    PasswordInput,
    Checkbox,
    Header,
    Footer,
    Pagination,
    NoData,
    LoadingIndicator,
    Login, // Auth
    Signup,
    Verification,
    Resetpass,
    Logout,
    UserProfile, // User
    OrderHistory,
    Wishlist,
    ShippingAddress,
    SingleOrder,
    EditUser,
    Orders,
    OrderProduct,
    OrderDetails,
    WriteReview,
    SingleWishlistItem,
    WishlistPage,
    SingleShippingAddress,
    ShippingAddressesPage,
    AddShipping,
    EditShipping,
    OrderTracking,
    SingleReview,
    ReviewsPage,
    Stats, // Admin
    AdminHeader,
    RecentOrders,
    LowStockAlerts,
    AdminDashboard,
    RecentOrderItem,
    PageHeader,
    ProductRow,
    FilterPopup,
    Products,
    AddProduct,
    ProductForm,
    UpdateProduct,
    UserRow,
    Users,
    UserFilterPopup,
    SingleUserOrder,
    UserDetails,
    EditUserFromAdmin,
    BlogPostItem,
    BlogPosts,
    BlogsFilterPopup,
    CommentItem,
    CommentsFilterPopup,
    Comments,
    UpdateCommentStatus,
    BlogForm,
    AddBlog,
    UpdateBlog,
    SingleCategory,
    CategoryFilterPopup,
    Categories,
    CategoryForm,
    AddCategory,
    UpdateCategory,
    OrderItem,
    AdminOrders,
    OrdersFilterPopup,
    AdminOrderProduct,
    AdminOrder,
    BlogCategorySlider, // Pages
    BlogList,
    BlogsPage,
    Blog,
    BlogComments,
    BlogPage,
    ContactUs,
    ProductComponent,
    ProductFilterPopup,
    ProductsPage,
    ProductPage,
    Search,
    ShoppingCart,
    CartProduct,
    Checkout,
    HeroSection,
    CategoriesSection,
    FeaturedProducts,
    FeaturedBlogs,
    UserSatisfaction,
    HomePage,
    AboutPage,
    PrivacyPolicy,
    TermsAndConditions,
    PaypalButtons,
    StripeButton,
    OrderSuccess,
    OrderCancel,
    NotFoundPage, // Errors
    ServerErrorPage,
    ForbiddenPage,
    UnauthorizedPage,
    ServiceUnavailablePage,
    BadRequestPage,
}