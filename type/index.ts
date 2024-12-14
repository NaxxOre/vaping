interface NavLink {
    title: string
    items: NavLinkItem[]
}

interface NavLinkItem {
    text: string
    link: string
}

interface Club {
    img: string;
    name: string;
}

interface HistoryType {
    id: number
    logo: string
    title: string
    p: string
}

interface LabItem{
    id:number
    name:string
    img:string
    labType:string

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

interface Academy {
    img: string;
    name: string;
}

export type {NavLink, ImageHeaderText, HistoryType, NotificationItems, TableProps ,LabItem,Club , Academy}
