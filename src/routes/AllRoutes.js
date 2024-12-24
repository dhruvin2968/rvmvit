import {Routes,Route} from "react-router-dom";
import { Home,AboutUs,JoinUs,Events, PageNotFound ,ContactUs, Departments} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="">
    <Routes>
    <Route path="" element={<Home title="MovieMate"/>} />
    <Route path="about" element={<AboutUs title="Popular Movies/MovieMate"/>} />
    <Route path="joinus" element={<JoinUs  title="Top Rated Movies/MovieMate"/>} />
    <Route path="events" element={<Events title="Upcoming Movies/MovieMate"/>} />
    <Route path="contact" element={<ContactUs  />} />
    <Route path="departments" element={<Departments  />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  )
};