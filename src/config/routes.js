import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";

const routes = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
    title: "Dashboard",
    icon: "star-o",
    key: "dashboard"
  },
  {
    path: "/courses",
    component: Courses,
    exact: false,
    title: "Courses",
    icon: "video-camera",
    key: "courses"
  },
  {
    path: "/profile",
    component: Profile,
    exact: false,
    title: "Profile",
    icon: "folder",
    key: "profile"
  }
  // {
  //   path: "/cursos/crear",
  //   component: CreateCourse
  // },
  // {
  //   path: "/cursos/editar/:id",
  //   component: EditCourse
  // }
];

export default routes;
