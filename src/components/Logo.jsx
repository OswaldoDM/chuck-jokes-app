import logo from '../images/chucklogo.png'

export function Logo() {

  return (
    <div className="logo-container">
        <img src={logo} alt="chuck-logo" loading="lazy" />        
    </div>
  )
}
