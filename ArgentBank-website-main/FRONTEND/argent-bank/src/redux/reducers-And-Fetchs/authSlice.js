/**
 * "createAsyncThunk" est une fonction provenant de toolkit qui simplifie le processus de 
 * création d'actions asynchrone dans Redux. 
 * 
 * 3 actions ("pending", 'fulifilled', "rejected")
 */ 
 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Export @variable getLoginUser avec createAsyncThunk 
 * 
 * @param(email, password)
 * @objet contenant la méthode dispatch
 */
export const getloginUser = createAsyncThunk('auth/login', async ({ email, password }, { dispatch }) => {
  try {
    // Première requête "POST" pour authentifier un utilisateur avec email et password. 
    const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (loginResponse.ok) {
      // La réponse à la requête est stocké dans data
      const data = await loginResponse.json();

      // Récupère le token de connection de data pour l'enregistrer dans sessionStorage
      const token = data.body.token;
      sessionStorage.setItem('token', token);

      // Envoye la deuxième requête "POST" pour récupérer les informations de l'utilisateur avec le token
      const getUserProfileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (getUserProfileResponse.ok) {
        // Récupère les données de l'utilisateur dans profileData
        const profileData = await getUserProfileResponse.json();

        // Permet de voir l'état des données récupérés suite à la deuxième requête. 
        console.log("profileData: ", profileData.body);

        // Envoye les données dans le store avec l'action loginSuccess. 
        dispatch(loginSuccess(profileData.body)); 

        return
      } else {
        const errorInfo = await getUserProfileResponse.json()
        // envoye une erreur dans le store 
        dispatch(loginFailure(errorInfo))
      }
    } else {
      // Récupère un paragraphe avec id "textErrorMessage"
      const errorMessage = document.getElementById("textErrorMessage")
      // Récupère la fenêtre du form
      const signIn = document.getElementById("formWindow");

      // Extrait les données d'échec d'authentification 
      const errorData = await loginResponse.json();

      // Envoye les messages d'erreur dans le store avec l'action loginFailure 
      dispatch(loginFailure(errorData.message || 'login failed'))

      // Ajoute la classe "expended" à la fenêtre pour augmenter la longueur et afficher le message d'erreur
      signIn.classList.add("expanded")
      // Affiche le text du message d'erreur. 
      errorMessage.textContent = errorData.message || 'Login failed';
         
    }
  } catch (error) {
    dispatch(loginFailure(error.message || 'Login failed'));
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isLoading: true,
    userName:"", 
    lastName:"",  
    firstName:'', 
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;

      state.userName = action.payload.userName 
      state.lastName = action.payload.lastName    
      state.firstName = action.payload.firstName  

      console.log('***********authSlice*************' +  action.payload.userName)
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
    },
    logout:(state) => {
      state.isAuthenticated = false;
      state.userName = "";
      state.firstName = "";
      state.lastName = "";
    },
  },
  extraReducers:(builder) => {
    builder
      .addCase(getloginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getloginUser.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false
      })
      .addCase(getloginUser.rejected, (state) => {
        state.isLoading = false
      })
  }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export const sliceReducer = authSlice.actions;
