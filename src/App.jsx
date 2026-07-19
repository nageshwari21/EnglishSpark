import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Trainers from './pages/Trainers'
import DemoClass from './pages/DemoClass'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import AdminLayout from './pages/Admin/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import ManageCourses from './pages/Admin/ManageCourses'
import ManageTrainers from './pages/Admin/ManageTrainers'
import ManageBlogs from './pages/Admin/ManageBlogs'
import ManageStudents from './pages/Admin/ManageStudents'
import DemoRequests from './pages/Admin/DemoRequests'
import ContactMessages from './pages/Admin/ContactMessages'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Routes>
        <Route path="/admin" element={<ProtectedRoute adminOnly><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<ManageCourses />} />
          <Route path="trainers" element={<ManageTrainers />} />
          <Route path="blogs" element={<ManageBlogs />} />
          <Route path="students" element={<ManageStudents />} />
          <Route path="demo-requests" element={<DemoRequests />} />
          <Route path="messages" element={<ContactMessages />} />
        </Route>

        <Route
          path="*"
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetails />} />
                  <Route path="/trainers" element={<Trainers />} />
                  <Route path="/demo-class" element={<DemoClass />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetails />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
