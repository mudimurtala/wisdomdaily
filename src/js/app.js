// Importing necessary modules
import { firebaseConfig } from './firebase-config';
import { initAuth } from './auth';
import { initFirestore } from './firestore';

import { login, logout, signUp } from './auth';
import { addResource, getPosts, updatePost } from './firestore';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', () => {
    initAuth();

    // Initialize Firestore operations
    initFirestore();

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function hideAllSections() {
        sections.forEach(section => section.style.display = 'none');
    }

    function showSection(id) {
        hideAllSections();
        const targetSection = document.querySelector(id);
        if (targetSection) targetSection.style.display = 'block';
    }

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