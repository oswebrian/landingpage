import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AdmissionDropdown from "./pages/AdmissionDropdown";
import CourseDropdown from "./pages/CourseDropdown";
import AboutUsDropdown from "./pages/AboutUsDropdown";
import ArticleNewsOrEvent from "./pages/ArticleNewsOrEvent";
import NewsAndArticles from "./pages/NewsAndArticles";
import CourseProfile from "./pages/CourseProfile";
import Admissions from "./pages/Admissions";
import CoursesAndPrograms from "./pages/CoursesAndPrograms";
import DownloadsDropdown from "./pages/DownloadsDropdown";
import Downloads from "./pages/Downloads";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import FrameComponent1 from "./pages/FrameComponent1";
import FrameComponent2 from "./pages/FrameComponent2";
import FrameComponent3 from "./pages/FrameComponent3";
import FrameComponent4 from "./pages/FrameComponent4";
import FrameComponent6 from "./pages/FrameComponent6";
import FrameComponent7 from "./pages/FrameComponent7";
import FrameComponent8 from "./pages/FrameComponent8";
import FrameComponent9 from "./pages/FrameComponent9";
import FrameComponent10 from "./pages/FrameComponent10";
import Frame1 from "./pages/Frame1";
import Frame from "./pages/Frame";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admission-dropdown":
        title = "";
        metaDescription = "";
        break;
      case "/course-dropdown":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-dropdown":
        title = "";
        metaDescription = "";
        break;
      case "/article-news-or-event":
        title = "";
        metaDescription = "";
        break;
      case "/news-and-articles":
        title = "";
        metaDescription = "";
        break;
      case "/course-profile":
        title = "";
        metaDescription = "";
        break;
      case "/admissions":
        title = "";
        metaDescription = "";
        break;
      case "/courses-and-programs":
        title = "";
        metaDescription = "";
        break;
      case "/downloads-dropdown":
        title = "";
        metaDescription = "";
        break;
      case "/downloads":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/frame-176":
        title = "";
        metaDescription = "";
        break;
      case "/frame-175":
        title = "";
        metaDescription = "";
        break;
      case "/frame-174":
        title = "";
        metaDescription = "";
        break;
      case "/frame-181":
        title = "";
        metaDescription = "";
        break;
      case "/frame-179":
        title = "";
        metaDescription = "";
        break;
      case "/frame-178":
        title = "";
        metaDescription = "";
        break;
      case "/frame-38":
        title = "";
        metaDescription = "";
        break;
      case "/frame-36":
        title = "";
        metaDescription = "";
        break;
      case "/frame-34":
        title = "";
        metaDescription = "";
        break;
      case "/frame":
        title = "";
        metaDescription = "";
        break;
      case "/frame1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admission-dropdown" element={<AdmissionDropdown />} />
      <Route path="/course-dropdown" element={<CourseDropdown />} />
      <Route path="/about-us-dropdown" element={<AboutUsDropdown />} />
      <Route path="/article-news-or-event" element={<ArticleNewsOrEvent />} />
      <Route path="/news-and-articles" element={<NewsAndArticles />} />
      <Route path="/course-profile" element={<CourseProfile />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/courses-and-programs" element={<CoursesAndPrograms />} />
      <Route path="/downloads-dropdown" element={<DownloadsDropdown />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/frame-176" element={<FrameComponent1 />} />
      <Route path="/frame-175" element={<FrameComponent2 />} />
      <Route path="/frame-174" element={<FrameComponent3 />} />
      <Route path="/frame-181" element={<FrameComponent4 />} />
      <Route path="/frame-179" element={<FrameComponent6 />} />
      <Route path="/frame-178" element={<FrameComponent7 />} />
      <Route path="/frame-38" element={<FrameComponent8 />} />
      <Route path="/frame-36" element={<FrameComponent9 />} />
      <Route path="/frame-34" element={<FrameComponent10 />} />
      <Route path="/frame" element={<Frame1 />} />
      <Route path="/frame1" element={<Frame />} />
      <Route path="./pages/Admissions.js" element={<Admissions.js />} />
      <Route path="AdmissionsDropdown.js" element={<AdmissionDropdown />} />
    </Routes>
  );
}
export default App;
