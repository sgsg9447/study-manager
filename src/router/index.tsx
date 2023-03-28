import { Route, Routes } from "react-router-dom";
import Code from "../pages/code";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import Room from "../pages/room";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/code" element={<Code />} />
      <Route path="/room" element={<Room />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
