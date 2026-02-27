import { createBrowserRouter } from "react-router";
import Main from "../Root/Main";
import SocialMediaDesign from "../Components/Design Components/SocialMediaDesign";
import ThumbnailDesign from "../Components/Design Components/ThumbnailDesign";
import LogoDesign from "../Components/Design Components/LogoDesign";
import ManipulationDesign from "../Components/Design Components/ManipulationDesign";
import PrintDesign from "../Components/Design Components/PrintDesign";
import HomePage from "../Components/Pages/HomePage";
import CoverDesign from "../Components/Design Components/CoverDesign";
import AdminPanel from "../Components/Pages/AdminPanel";

const rout = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "social-media-designs",
        Component: SocialMediaDesign,
        loader: () => ({
          designs: fetch(`${import.meta.env.VITE_API}/uploads?category=social`)
            .then((res) => (res.ok ? res.json() : []))
            .catch(() => []),
        }),
      },
      {
        path: "thumbnail-designs",
        Component: ThumbnailDesign,
        loader: () => ({
          designs: fetch(`${import.meta.env.VITE_API}/uploads?category=thumbnail`)
            .then((res) => (res.ok ? res.json() : []))
            .catch(() => []),
        }),
      },
      {
        path: "logo-designs",
        Component: LogoDesign,
        loader: () => ({
          designs: fetch(`${import.meta.env.VITE_API}/uploads?category=logo`)
            .then((res) => (res.ok ? res.json() : []))
            .catch(() => []),
        }),
      },
      {
        path: "cover-designs",
        Component: CoverDesign,
        loader: () => ({
          designs: fetch(`${import.meta.env.VITE_API}/uploads?category=cover`)
            .then((res) => (res.ok ? res.json() : []))
            .catch(() => []),
        }),
      },
      {
        path: "manipulation-designs",
        Component: ManipulationDesign,
        loader: () => ({
          designs: fetch(`${import.meta.env.VITE_API}/uploads?category=manipulation`)
            .then((res) => (res.ok ? res.json() : []))
            .catch(() => []),
        }),
      },
      {
        path: "print-designs",
        Component: PrintDesign,
        loader: () => ({
          designs: fetch(`${import.meta.env.VITE_API}/uploads?category=print`)
            .then((res) => (res.ok ? res.json() : []))
            .catch(() => []),
        }),
      },
    ],
  },
  {
    path: "/manage/f1a033032bdc8be594d6",
    Component: AdminPanel
  }
]);

export default rout;
