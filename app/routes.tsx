import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { StrategyMap } from "./pages/StrategyMap";
import { DevelopmentStrategy } from "./pages/DevelopmentStrategy";
import { CryptoSecurity } from "./pages/CryptoSecurity";
import { InventoryDashboard } from "./pages/InventoryDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project/mobile-banking",
    Component: StrategyMap,
  },
  {
    path: "/project/development-strategy",
    Component: DevelopmentStrategy,
  },
  {
    path: "/project/crypto-security",
    Component: CryptoSecurity,
  },
  {
    path: "/project/inventory-dashboard",
    Component: InventoryDashboard,
  },
]);