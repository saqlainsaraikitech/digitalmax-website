import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, WhatsFloat, ScrollToTop } from './components/Layout';
import Home from './pages/Home';

// Route-level code splitting: har page ka JS tabhi download hota hai
// jab user us page par jaye -> pehli visit par sirf Home ka code aata hai.
const Service = lazy(() => import('./pages/Service'));
const Tools = lazy(() => import('./pages/Tools'));
const ToolDetail = lazy(() => import('./pages/ToolDetail'));
const Consultancy = lazy(() => import('./pages/Consultancy'));
const Contact = lazy(() => import('./pages/Contact'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="page-loading" aria-hidden="true">
      <div className="pl-spinner" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<Service />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tool/:slug" element={<ToolDetail />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsFloat />
    </BrowserRouter>
  );
}
