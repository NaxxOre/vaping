import { SrvRecord } from 'dns';
import DOMPurify from 'dompurify';


function changeQuotes(str: string) {
    if (str.startsWith('"') && str.endsWith('"')) {
      return `\`${str.slice(1, -1)}\``;
    }
    return str;
  }

export  function domRender(string: string) {
    let body = string.split("</p>").map((item) => item+"</p>").map(i => DOMPurify.sanitize(changeQuotes(i)));

    return body;


};

export function domRenderShort(string: string) {
  

    // Extracting and sanitizing HTML content
    let body = string.split("</p>")[0] + "</p>";
    let result = DOMPurify.sanitize(body).slice(0, 150);


    return result + ".....";


};

