import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
// import AddRoom from "./components/Room/AddRoom";
import ExistingRooms from "./components/Room/ExistingRooms";
import Home from "../src/components/home/Home";
import EditRoom from "./components/Room/EditRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRoom from "./components/Room/AddRoom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import RoomListing from "./components/Room/RoomListing";
import Admin from "./components/admin/Admin";
import Checkout from "./components/booking/Checkout";
import BookingSuccess from "./components/booking/BookingSuccess";
import Bookings from "./components/booking/Bookings";
import FindBooking from "./components/booking/FindBooking";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:roomId" element={<EditRoom />} />
          <Route path="/existing-rooms" element={<ExistingRooms />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/book-room/:roomId" element={<Checkout />} />
          <Route path="/browse-all-rooms" element={<RoomListing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/existing-booking" element={<Bookings />} />
          <Route path="/find-booking" element={<FindBooking />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
