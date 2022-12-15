import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <header>
         <div className="container">
             <Link to = '/'>
                    <h4>Home</h4>
               </Link>
               <Link to = '/lineup'>
                    <h4>Lineup</h4>
               </Link>
               <Link to = '/travel'>
                    <h4>Travel</h4>
               </Link>
               <Link to = '/festival'>
                    <h4>Festival Info</h4>
               </Link>
               <Link to = '/tickets'>
                    <h4>Buy Tickets</h4>
               </Link>
          </div>
        </header>
    )
}

export default Nav