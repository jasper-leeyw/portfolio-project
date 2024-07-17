import React, { useEffect, useState } from 'react';

const useThemeSwitcher = () => {

    // Define the media query string for detecting dark mode preference
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    // State to store the current mode ('dark' or 'light')
    const [mode, setMode] = useState("");

    // Check if there is any user settings or configs available
    useEffect(() => {
        // Function to handle changes in theme preference
        const mediaQuery = window.matchMedia(preferDarkQuery);

        // Retrieve user's stored preference from localStorage
        const userPref = window.localStorage.getItem("theme");

        // Determine the current mode based on userPref or mediaQuery
        const handleChange = () => {
            if(userPref){
                let check = userPref === "dark" ? "dark" : "light";
                console.log(`User preference: ${userPref}, Setting mode to: ${check}`);
                setMode(check);
                if(check==="dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }
            }else{
                let check = mediaQuery.matches ? "dark" : "light"
                // Update the mode state and apply/remove 'dark' class to <html> element
                console.log(`No user preference, Media query matches: ${mediaQuery.matches}, Setting mode to: ${check}`);
                setMode(check);
                window.localStorage.setItem(
                    "theme",
                    check
                );

                if(check==="dark"){
                    document.documentElement.classList.add("dark")
                }else{
                    document.documentElement.classList.remove("dark")
                }

            }
            
        }
        
        handleChange();

         // Create a media query listener for changes in prefer-color-scheme
        mediaQuery.addEventListener("change", handleChange)

        // Returns EventListener
        return () => mediaQuery.removeEventListener("change", handleChange)

    }, []);

    // Updates values in local storage whenever there is a mode change
    useEffect(() => {
        console.log(`Mode changed to ${mode}`)
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }
        
        if(mode === "light"){
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }

    }, [mode])

    return [mode, setMode];

}

export default useThemeSwitcher