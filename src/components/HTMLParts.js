

export function Nav(){
    return  <nav>
    <ul>
      <li><a href="#">London</a></li>
      <li><a href="#">Paris</a></li>
      <li><a href="#">Tokyo</a></li>
    </ul>
  </nav>
}
export function Header( {focim, color}){

    return ( <header>
    <h2 style={ { color: color } }>{focim}</h2>
    </header>
    );
} 
export function Article({ data }) {
  
  const {title, content }= data;

    return (
      <article>
        <h1>{title}</h1>
        <p>{content}</p>
      </article>
    );
}

export function Footer( {labjegyzet, color}) {
    return ( 
    <footer>
    <p style={{color: color}}>{labjegyzet}</p>
    </footer>
    );
}