import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SEO from './components/SEO.jsx';
import WhatsAppFab from './components/WhatsAppFab.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Reservation = lazy(() => import('./pages/Reservation.jsx'));

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 }
};

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <SEO title="Drive Diag Motors" description="Services, réservation, portfolio et contact – Drive Diag Motors" />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="page-loading">Chargement…</div>}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/services"
                element={
                  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
                    <Services />
                  </motion.div>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
                    <Portfolio />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
                    <Contact />
                  </motion.div>
                }
              />
              <Route
                path="/reservation"
                element={
                  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants}>
                    <Reservation />
                  </motion.div>
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <WhatsAppFab />
      <Footer />
    </div>
  );
}
