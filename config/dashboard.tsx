import {
  CreditCardIcon,
  FileTextIcon,
  LucideIcon,
  LucideProps,
  SettingsIcon,
} from "lucide-react";

export type dashboardNavType = {
  title: string;
  href: string;
  disabled?: boolean;
};

export const dashboardNavConfig: dashboardNavType[] = [
  {
    title: "Documentation",
    href: "/documentation",
    disabled: false,
  },
  {
    title: "Support",
    href: "/support",
    disabled: true,
  },
];

interface asidebarItemsConfigType extends dashboardNavType {
  icon?: React.ReactNode;
}

export const asidebarItemsConfig: asidebarItemsConfigType[] = [
  {
    title: "Posts",
    href: "/dashboard",
    disabled: false,
    icon: <FileTextIcon />,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    disabled: false,
    icon: <CreditCardIcon />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    disabled: true,
    icon: <SettingsIcon />,
  },
];
