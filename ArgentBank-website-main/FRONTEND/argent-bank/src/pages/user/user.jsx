
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Welcome from "../../components/welcome/welcome";
import Account from "../../components/account/account";

function User(){
  return(
    <div>
      <Nav 
        Name="Name"
        Icon="fa fa-sign-out"
        Text="Sign out"
      />
      <main class="main bg-dark">
        <Welcome 
          Name="Tony"
        />
        <h2 class="sr-only">Accounts</h2>
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