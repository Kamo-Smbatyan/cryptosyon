import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Notifications from './components/Notifications';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import WalletProvider from './WalletProvider';
import ErrorBoundary from './components/ErrorBoundary';
import CustomizableDashboard from './components/CustomizableDashboard';
import { GlobalProvider } from './contexts/GlobalStateContext';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Trade = lazy(() => import('./pages/Trade'));
const Wallet = lazy(() => import('./pages/Wallet'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const News = lazy(() => import('./components/News'));
const TransactionHistory = lazy(() => import('./components/TransactionHistory'));
const AnalyticsDashboard = lazy(() => import('./components/AnalyticsDashboard'));
const TradingDashboard = lazy(() => import('./components/TradingDashboard'));
const SignIn = lazy(() => import('./components/SignIn'));
const TrailingStopOrder = lazy(() => import('./components/TrailingStopOrder'));
const ConditionalOrder = lazy(() => import('./components/ConditionalOrder'));
const TradingBot = lazy(() => import('./components/TradingBot'));
const AdvancedAnalytics = lazy(() => import('./components/AdvancedAnalytics'));
const OrderNotifications = lazy(() => import('./components/OrderNotifications'));
const PriceAlerts = lazy(() => import('./components/PriceAlerts'));
const InteractiveTutorials = lazy(() => import('./components/InteractiveTutorials'));
const SocialTrading = lazy(() => import('./components/SocialTrading'));
const PortfolioManagement = lazy(() => import('./components/PortfolioManagement'));
const ExampleChart = lazy(() => import('./components/ExampleChart'));
const CryptoPrices = lazy(() => import('./components/CryptoPrices'));

const App = () => {
  return (
    <GlobalProvider>
      <WalletProvider>
        <ThemeProvider>
          <Router>
            <Header />
            <ThemeToggle />
            <Notifications />
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/trade" element={<Trade />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
                  <Route path="/news" element={<News />} />
                  <Route path="/transactions" element={<ProtectedRoute><TransactionHistory /></ProtectedRoute>} />
                  <Route path="/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />
                  <Route path="/trading-dashboard" element={<ProtectedRoute><TradingDashboard /></ProtectedRoute>} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/trailing-stop-order" element={<ProtectedRoute><TrailingStopOrder /></ProtectedRoute>} />
                  <Route path="/conditional-order" element={<ProtectedRoute><ConditionalOrder /></ProtectedRoute>} />
                  <Route path="/trading-bot" element={<ProtectedRoute><TradingBot /></ProtectedRoute>} />
                  <Route path="/advanced-analytics" element={<ProtectedRoute><AdvancedAnalytics /></ProtectedRoute>} />
                  <Route path="/order-notifications" element={<ProtectedRoute><OrderNotifications /></ProtectedRoute>} />
                  <Route path="/price-alerts" element={<ProtectedRoute><PriceAlerts /></ProtectedRoute>} />
                  <Route path="/interactive-tutorials" element={<ProtectedRoute><InteractiveTutorials /></ProtectedRoute>} />
                  <Route path="/social-trading" element={<ProtectedRoute><SocialTrading /></ProtectedRoute>} />
                  <Route path="/portfolio-management" element={<ProtectedRoute><PortfolioManagement /></ProtectedRoute>} />
                  <Route path="/customizable-dashboard" element={<ProtectedRoute><CustomizableDashboard /></ProtectedRoute>} />
                  <Route path="/example-chart" element={<ExampleChart />} />
                  <Route path="/crypto-prices" element={<CryptoPrices />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
            <Footer />
          </Router>
        </ThemeProvider>
      </WalletProvider>
    </GlobalProvider>
  );
};

export default App;
