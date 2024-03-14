
export type siteConfigType = {
    name:string
    description: string
    url:string
    links:{
        github:string
        facebook?:string
        linkedin?:string
    }
}

export type marketingConfigType = {
    mainNav: mainNavIteam[]
}

export type NavItem = {
    title: string
    href: string
    disabled?: boolean
  }
  
export type MainNavItem = NavItem