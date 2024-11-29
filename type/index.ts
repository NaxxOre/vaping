interface NavLink {
    title: string
    items: NavLinkItem[]
}

interface NavLinkItem {
    text: string
    link: string
}

interface ImageHeaderText {
    name : string
    name1? : string
  }


export type {NavLink, ImageHeaderText}