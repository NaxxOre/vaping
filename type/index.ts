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

interface NotificationItems {
    id: number;
    icon: string;
    infos: string[]
}

interface TableProps {
    dataHeader: {name: string, style: string}[],
    data: string[][],
    center?: string
}

export type {NavLink, ImageHeaderText, HistoryType, NotificationItems, TableProps}
