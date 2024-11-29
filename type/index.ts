interface NavLink {
    title: string
    items: NavLinkItem[]
}

interface NavLinkItem {
    text: string
    link: string
}

interface HistoryType {
    id: number
    logo: string
    title: string
    p: string
}

interface ImageHeaderText {
    url : string
    name : string
    name1? : string
  }


export type {NavLink, ImageHeaderText, HistoryType}
