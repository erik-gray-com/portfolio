import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  Package,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  ShoppingCart,
  DollarSign,
  Box,
  Activity,
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  price: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  lastUpdated: string;
}

export function InventoryDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const stats = [
    {
      label: "Total Products",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Package,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Total Revenue",
      value: "$428,920",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Low Stock Items",
      value: "23",
      change: "-3.1%",
      trend: "down",
      icon: AlertTriangle,
      color: "from-orange-500 to-orange-600",
    },
    {
      label: "Total Orders",
      value: "1,429",
      change: "+15.3%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-green-500 to-green-600",
    },
  ];

  const inventoryData: InventoryItem[] = [
    {
      id: "1",
      name: "Wireless Headphones Pro",
      sku: "WH-PRO-001",
      category: "Electronics",
      quantity: 145,
      price: 299.99,
      status: "In Stock",
      lastUpdated: "2 hours ago",
    },
    {
      id: "2",
      name: "Smart Watch Series 5",
      sku: "SW-S5-002",
      category: "Electronics",
      quantity: 12,
      price: 399.99,
      status: "Low Stock",
      lastUpdated: "3 hours ago",
    },
    {
      id: "3",
      name: "Ergonomic Office Chair",
      sku: "OC-ERG-003",
      category: "Furniture",
      quantity: 0,
      price: 549.99,
      status: "Out of Stock",
      lastUpdated: "1 day ago",
    },
    {
      id: "4",
      name: "4K Monitor 27 inch",
      sku: "MON-4K-004",
      category: "Electronics",
      quantity: 87,
      price: 449.99,
      status: "In Stock",
      lastUpdated: "5 hours ago",
    },
    {
      id: "5",
      name: "Mechanical Keyboard RGB",
      sku: "KB-RGB-005",
      category: "Electronics",
      quantity: 234,
      price: 149.99,
      status: "In Stock",
      lastUpdated: "1 hour ago",
    },
    {
      id: "6",
      name: "Standing Desk Electric",
      sku: "SD-ELC-006",
      category: "Furniture",
      quantity: 8,
      price: 799.99,
      status: "Low Stock",
      lastUpdated: "6 hours ago",
    },
  ];

  const salesData = [
    { month: "Jan", sales: 42000 },
    { month: "Feb", sales: 38000 },
    { month: "Mar", sales: 45000 },
    { month: "Apr", sales: 52000 },
    { month: "May", sales: 48000 },
    { month: "Jun", sales: 61000 },
  ];

  const categoryData = [
    { category: "Electronics", value: 145 },
    { category: "Furniture", value: 89 },
    { category: "Accessories", value: 123 },
    { category: "Software", value: 67 },
    { category: "Office", value: 92 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Low Stock":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Out of Stock":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium flex items-center gap-2">
                <Download size={18} />
                <span className="hidden sm:inline">Export Data</span>
              </button>
              <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center gap-2">
                <Plus size={18} />
                <span className="hidden sm:inline">Add Product</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Inventory Management</h1>
          <p className="text-gray-400">Real-time tracking and analytics for your product inventory</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {stat.trend === "up" ? (
                    <TrendingUp size={16} className="text-green-400" />
                  ) : (
                    <TrendingDown size={16} className="text-red-400" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Sales Trend Chart */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold mb-1">Sales Trend</h3>
                <p className="text-sm text-gray-400">Last 6 months performance</p>
              </div>
              <Activity className="text-gray-400" size={20} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="url(#colorGradient)"
                  strokeWidth={3}
                  dot={{ fill: "#8B5CF6", r: 4 }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution Chart */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold mb-1">Category Distribution</h3>
                <p className="text-sm text-gray-400">Products by category</p>
              </div>
              <Box className="text-gray-400" size={20} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="category" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Inventory Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="p-6 border-b border-gray-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h3 className="text-lg font-bold">Product Inventory</h3>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-64 pl-10 pr-4 py-2 bg-black border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-gray-600 transition-colors"
                  />
                </div>
                <button className="p-2 bg-black border border-gray-700 rounded-lg hover:border-gray-600 transition-colors">
                  <Filter size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {["All", "Electronics", "Furniture", "Accessories"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-black border border-gray-700 text-gray-400 hover:border-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    SKU
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredInventory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-900/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                          <Package size={20} className="text-white" />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400 font-mono text-sm">{item.sku}</td>
                    <td className="px-6 py-4 text-gray-400">{item.category}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold">{item.quantity}</span>
                    </td>
                    <td className="px-6 py-4 font-semibold">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{item.lastUpdated}</td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                        <MoreVertical size={18} className="text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Showing {filteredInventory.length} of {inventoryData.length} products
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-black border border-gray-700 rounded-lg text-sm hover:border-gray-600 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm">
                1
              </button>
              <button className="px-3 py-1 bg-black border border-gray-700 rounded-lg text-sm hover:border-gray-600 transition-colors">
                2
              </button>
              <button className="px-3 py-1 bg-black border border-gray-700 rounded-lg text-sm hover:border-gray-600 transition-colors">
                Next
              </button>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="size-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4">
              <Activity size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Real-time Tracking</h3>
            <p className="text-sm text-gray-400">
              Monitor inventory levels in real-time with instant updates and notifications for low stock items.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
              <TrendingUp size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Advanced Analytics</h3>
            <p className="text-sm text-gray-400">
              Gain insights with comprehensive charts and reports to make data-driven inventory decisions.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="size-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-4">
              <AlertTriangle size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Smart Alerts</h3>
            <p className="text-sm text-gray-400">
              Receive automated alerts for low stock, expiring products, and unusual inventory movements.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-800">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>© 2026 Erik Gray. Inventory Management Dashboard Demo.</p>
        </div>
      </footer>
    </div>
  );
}
