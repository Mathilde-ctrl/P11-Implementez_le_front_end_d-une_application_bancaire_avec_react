
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Welcome from "../../components/welcome/welcome";
import Account from "../../components/account/account";

function User(){
  // This userName is going away if refresh because not stored. 
  // const userName = useSelector((state) => state.auth.userName)


  // const profileData = useSelector((state) => state.auth.body)
  //console.log('*****' + profileData.profileData)
  // const userName = profileData ? profileData.userName : "No"

  // If page is refresh the userName from the state is gone unless I store 
  // the state inside a sessionStorage. 
  const userName = sessionStorage.getItem('userName')

  const token = sessionStorage.getItem('token');
  console.log("token : ", token)

  function SignOut(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userName')
  }

  

  return(
    <div> 
      <Nav 
        logoLink='/'
        signInLink='/'
        profileLink='/profile'
        iconLink='/profile'
        Name={userName}
        Icon="fa fa-sign-out"
        Text="Sign out"
        Function={SignOut}
        
      />
      <main className="main bg-dark">
        <Welcome 
          Name={userName}
        />
        <h2 className="sr-only">Accounts</h2>
        <Account 
          Title="Argent Bank Checking"
          Number="x8349"
          Amount="$2,082.79"
          Description="Available Balance"
        />
        <Account 
          Title="Argent Bank Savings"
          Number="x6712"
          Amount="$10,928.42"
          Description="Available Balance"
        />
        <Account 
          Title="Argent Bank Credit Card"
          Number="x8349"
          Amount="$184.30"
          Description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  )
}

export default User