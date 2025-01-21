let unsubscribe;

const authStateChangedHandler = (user) => {
  if (user) {
    console.log('User is signed in:', user.uid);
    // ...
  } else {
    console.log('User is signed out');
    // ...
  }
};

const setupAuthListener = () => {
  unsubscribe = onAuthStateChanged(auth, authStateChangedHandler);
};

const cleanupAuthListener = () => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null; // Explicitly set to null for clarity
  }
};

// Example usage: call setupAuthListener on component mount
setupAuthListener();

// Example usage: call cleanupAuthListener on component unmount or when the listener is no longer needed
// cleanupAuthListener();