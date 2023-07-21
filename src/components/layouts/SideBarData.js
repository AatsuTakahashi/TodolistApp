import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export const SideBarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "ユーザー情報",
    icon: <PersonIcon />,
    link: "/userProfile",
  },
  {
    title: "サインアウト",
    icon: <LogoutIcon />,
    link: "/sign_in",
  },
];
