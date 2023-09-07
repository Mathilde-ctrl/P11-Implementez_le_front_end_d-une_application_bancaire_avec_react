import argentBankLogo from './argentBankLogo.webp';


function Nav({Name, Text, Icon}){

  return(
    <nav class="main-nav">
      <a class="main-nav-logo" href="./">
        <img
          src={argentBankLogo}
          class="main-nav-logo-image"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div class="main-nav-links">
        <a class="main-nav-item-1" href='/'>
          <i class="fa fa-user-circle"></i>
        </a>
        {Name && (
          <a class="main-nav-item-1" href='/'>
            <p class="main-nav-name">{Name}</p>
          </a>
        )}
        {Icon && (
          <a class="main-nav-item-2" href='/sign-in'>
            <i class={Icon}></i>
          </a>
        )}
        <a class="main-nav-item-2" href='/sign-in'>
          <p class="main-nav-text">{Text}</p>
        </a>
      </div>
    </nav>
  )
}

export default Nav