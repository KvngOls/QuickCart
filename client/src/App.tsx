import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import CategoriesPage from "./pages/shop/CategoriesPage";
import ProductDetailsPage from "./pages/shop/ProductDetailsPage";
import CartPage from "./pages/cart/CartPage";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import RegisterPage from "./pages/auth/RegisterPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";
import CheckoutPage from "./pages/cart/CheckoutPage";
import OrderConfirmationPage from "./pages/cart/OrderConfirmationPage";
import AccountLayout from "./layouts/AccountLayout";
import OrderHistoryPage from "./pages/account/OrderHistoryPage";
import SavedItemsPage from "./pages/account/SavedItemsPage";
import AddressesPage from "./pages/account/AddressesPage";
import AccountSettingsPage from "./pages/account/AccountSettingsPage";
import AccountOverviewPage from "./pages/account/AccountOverviewPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminCustomersPage from "./pages/admin/AdminCustomersPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";
import AdminProductsFormPage from "./pages/admin/AdminProductsFormPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import OrderDetailsPage from "./pages/account/OrderDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {Everyone can access this pages} */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route
              path="/product/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            {/* pages that requires login: shoppers who are not logged in are sent to login first if they try */}

            <Route>
              <Route path="/verify-email" element={<VerifyEmailPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route
                path="/order-confirmation/:orderId"
                element={<OrderConfirmationPage />}
              />

              {/* Account pages: account menu on the left */}
              <Route path="/account" element={<AccountLayout />}>
                <Route index element={<AccountOverviewPage />} />
                <Route path="orders" element={<OrderHistoryPage />} />
                <Route path="settings" element={<AccountSettingsPage />} />
                <Route path="addresses" element={<AddressesPage />} />
                <Route path="saved" element={<SavedItemsPage />} />
              </Route>

              {/* order details is full width in the design, so it has no account menu */}
              <Route
                path="/account/orders/:orderId"
                element={<OrderDetailsPage />}
              />

              {/* Shipping, returns, FAQs, About, Terms, Privacy... (one route each, all) */}
            </Route>

            {/* {Admin login: no layout} */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* {Admin login: no layout} */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* {Admin pages: admin menu + top bar, no store header or footer. Only admins get in} */}

          <Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="products" element={<AdminProductsPage />} />
              <Route path="Products/new" element={<AdminProductsFormPage />} />
              <Route
                path="products/:productId/edit"
                element={<AdminProductsFormPage />}
              />
              <Route path="orders" element={<AdminOrdersPage />} />
              <Route path="customers" element={<AdminCustomersPage />} />
              <Route path="categories" element={<AdminCategoriesPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />

              {/* {Any other admin address shows the 404 page inside the admin layout} */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
