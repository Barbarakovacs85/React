import {useState} from 'react'

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


export function Counter() {

  const [ data, setData ] = useState( {name: '', email: '', password: ''} )
  const [result, setResult] = useState( null )

  const handleChange = (e) => {
    setData( {...data, [e.target.name]: e.target.value})
  }
  
  return <article>
    
    <h1>Regisztráció</h1>
    <form action="" method='post' onSubmit={ function(e) {
      e.preventDefault();

      fetch('http://localhost/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      })
        .then( response => response.json() )
        .then( response => {

        setResult( response )
      } )
    } } >


      <input type="text" name="name" placeholder='Add meg a neved' onChange={ handleChange }/>
      <br /><br /> 
      <input type="text" name="email" placeholder='Add meg az e-mail címed'onChange={ handleChange }/>
      <br /><br />
      <input type="text" name="password" placeholder='Add meg a jelszót'onChange={ handleChange }/>
      <br /><br />

      <button> Küldés </button>
    </form>
  </article>
}
