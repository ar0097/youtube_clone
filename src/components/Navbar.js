import React, { useState, useEffect } from "react";
import { Stack, Button, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Signed in with Google:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between"
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      {user ? (
        <Stack direction="row" alignItems="center">
          <Avatar alt={user.displayName} src={user.photoURL} />
          <Button
            onClick={handleSignOut}
            variant="outlined"
            color="primary"
            sx={{ marginLeft: 2 }}
          >
            Sign Out
          </Button>
        </Stack>
      ) : (
        <Button
          onClick={handleSignIn}
          variant="outlined"
          color="primary"
          sx={{ marginRight: 2 }}
        >
          Sign In with Google
        </Button>
      )}
    </Stack>
  );
};

export default Navbar;
