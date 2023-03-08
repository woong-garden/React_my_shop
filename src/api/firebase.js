import { initializeApp } from "firebase/app";
import { signOut, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            return user;
        })
        .catch(console.error);
}

export function logout() {
    signOut(auth)
    .catch(console.error);
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await adminUser(user) : null;
        callback(updatedUser);
    });
}

async function adminUser(user) {
    return get(ref(database, 'admins'))
    .then((snapshot) => {
        if(snapshot.exists()) {
            const admins = snapshot.val();
            const isAdmin = admins.includes(user.uid);
            return {...user, isAdmin}
        }
        return user;
    })
}