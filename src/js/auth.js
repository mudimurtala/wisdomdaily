import { auth } from './firebase-config';

// Sign Up function
const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            console.log("User signed up:", user);
        })
        .catch((error) => {
            console.error("Error during sign up:", error.message);
        });
};

// Login function
const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            console.log("User logged in:", user);
        })
        .catch((error) => {
            console.error("Error during login:", error.message);
        });
};

// Logout function
const logout = () => {
    auth.signOut()
        .then(() => {
            console.log("User logged out");
        })
        .catch((error) => {
            console.error("Error during logout:", error.message);
        });
};

// Exporting authentication functions
export { signUp, login, logout };
