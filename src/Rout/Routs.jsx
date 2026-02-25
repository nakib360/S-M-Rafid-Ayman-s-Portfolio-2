import { createBrowserRouter } from "react-router";
import Main from "../Root/Main";
import SocialMediaDesign from "../Components/Design Components/SocialMediaDesign";
import ThumbnailDesign from "../Components/Design Components/ThumbnailDesign";
import LogoDesign from "../Components/Design Components/LogoDesign";
import BrandIdentity from "../Components/Design Components/BrandIdentity";
import ManipulationDesign from "../Components/Design Components/ManipulationDesign";
import PrintDesign from "../Components/Design Components/PrintDesign";
import HomePage from "../Components/Pages/HomePage";

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
      },
      {
        path: "thumbnail-designs",
        Component: ThumbnailDesign,
      },
      {
        path: "logo-designs",
        Component: LogoDesign,
      },
      {
        path: "brand-identity",
        Component: BrandIdentity,
      },
      {
        path: "manipulation-designs",
        Component: ManipulationDesign,
        loader: () => fetch(`${import.meta.env.VITE_API}/uploads?category=manipulation`)
      },
      {
        path: "print-designs",
        Component: PrintDesign,
      },
    ],
  },
]);

export default rout;
