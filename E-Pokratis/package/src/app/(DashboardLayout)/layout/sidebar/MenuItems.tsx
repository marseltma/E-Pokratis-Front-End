import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
 IconReportMedical,
 IconStethoscope,IconClipboardHeart,
IconListSearch, IconPrescription }
 from "@tabler/icons-react";

import { uniqueId } from "lodash";


const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Επιλογές",
    icon:  IconListSearch ,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Προφίλ γιατρού",
    icon:  IconStethoscope,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Γιατρικό Ιστορικό",
    icon: IconClipboardHeart,
    href: "/utilities/typography",
  },

  {
    id: uniqueId(),
    title: "Μετρήσεις",
    icon: IconReportMedical,
    href: "/utilities/typography",
  },
 
  {
    id: uniqueId(),
    title: "Αναφορές",
    icon: IconReportMedical,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Δεδομένα e-prescription",
    icon: IconPrescription,
    href: "/utilities/typography",
  },
  
  
  

  {
    id: uniqueId(),
    title: "Shadow",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
