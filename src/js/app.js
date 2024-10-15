// Import necessary modules
import { firebaseConfig } from './firebase-config';
import { initAuth } from './auth';
import { initFirestore } from './firestore';

import { login, logout, signUp } from './auth';  // Use available exports
import { addResource, getPosts, updatePost } from './firestore';  // Use available exports


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DOMContentLoaded ensures the HTML is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase authentication
    initAuth();

    // Initialize Firestore operations
    initFirestore();

    // Basic navigation handling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => section.style.display = 'none');
    }

    // Function to show the selected section
    function showSection(id) {
        hideAllSections();
        const targetSection = document.querySelector(id);
        if (targetSection) targetSection.style.display = 'block';
    }

    // Attach click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const target = event.target.getAttribute('href');
            showSection(target);
        });
    });

    // By default, show the home section
    showSection('#home');
});


export { login, logout, signUp, addResource, getPosts, updatePost };