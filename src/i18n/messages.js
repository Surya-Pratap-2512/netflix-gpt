import LOCALES from "./locale";

const messages = {
  [LOCALES.ENGLISH]: {
    logoAltText: "Netflix Logo",
    bgAltText: "Background Image",
    errReq: "{key, string} is required.",
    errMax:
      "The {key, string} length should not exceed {n, number} characters.",
    errMin:
      "The {key, string} length should be atleast {n,number} characteres.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    signUp: "Sign Up",
    signOut: "Sign Out",
    existingUserSingInText: "Already Member of Netflix?",
    newUserSingUpText: "New to Netflix?",
    userAvatar: "User Avatar",
  },
  [LOCALES.FRENCH]: {
    logoAltText: "Logo Netflix",
    bgAltText: "Image d’arrière-plan",
    errReq: "{key, string} est obligatoire.",
    errMax:
      "La longueur de {key, string} ne doit pas dépasser {n, number} caractères.",
    errMin:
      "La longueur de {key, string} doit être d’au moins {n,number} caractères.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Messagerie électronique",
    password: "Mot de passe",
    signIn: "Connexion",
    signUp: "S’enregistrer",
    existingUserSingInText: "Vous êtes déjà membre de Netflix?",
    newUserSingUpText: "Nouveau sur Netflix?",
  },
  [LOCALES.GERMAN]: {},
};

export default messages;
