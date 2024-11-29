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



export type {NavLink, HistoryType}