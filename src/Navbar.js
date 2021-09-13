const Navbar = () => {
  return ( 
    <nav className='navbar'>
      <h1>Caitlin Swickard</h1>
      <div className='links'>
        <a herf="/">Home</a>
        <a herf="/projects">Projects</a>
        <a herf="/about">About</a>
        <a herf="/contact">Contact</a>
        <a herf="/resume" style={{
          color:'white',
          backgroundColor: 'red',
          borderRadius: '8px'
        }}>Resume</a>
      </div>
    </nav>
   );
}
 
export default Navbar;