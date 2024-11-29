import Link from "next/link";


interface ListItemProps {
    text: string;
    isTitle?: boolean;
    link: string;
    isActive?: boolean; // Optional for highlighting active links
  }
  
function ListItem({ text, isTitle = false, link, isActive = false }: ListItemProps) {
    // Add a CSS class for active links
    const className = isActive ? "active-link" : "";
  
    return isTitle ? (
      <li className="title">{text}</li>
    ) : (
      <Link href={link} id="navigation">
        <li className={className}>{text}</li>
      </Link>
    );
}

export default ListItem;