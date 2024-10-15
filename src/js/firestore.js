import { db } from './firebase-config';

// Create a new post in the Firestore
const createPost = (collectionName, postData) => {
    db.collection(collectionName).add(postData)
        .then((docRef) => {
            console.log("Post created with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding post: ", error);
        });
};

// Get all posts from a Firestore collection
const getPosts = (collectionName, callback) => {
    db.collection(collectionName).get()
        .then((querySnapshot) => {
            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() });
            });
            callback(posts); // Pass the posts to the provided callback function
        })
        .catch((error) => {
            console.error("Error getting posts: ", error);
        });
};

// Update a post by ID in Firestore
const updatePost = (collectionName, docId, updatedData) => {
    db.collection(collectionName).doc(docId).update(updatedData)
        .then(() => {
            console.log("Post updated successfully");
        })
        .catch((error) => {
            console.error("Error updating post: ", error);
        });
};

// Delete a post by ID from Firestore
const deletePost = (collectionName, docId) => {
    db.collection(collectionName).doc(docId).delete()
        .then(() => {
            console.log("Post deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting post: ", error);
        });
};

// Add a new resource
const addResource = (resource) => {
    resourcesCollection.add(resource)
        .then((docRef) => {
            console.log('Resource added with ID:', docRef.id);
        })
        .catch((error) => {
            console.error('Error adding resource:', error.message);
        });
};

// Get all resources
const getResources = (callback) => {
    resourcesCollection.get()
        .then((querySnapshot) => {
            const resources = [];
            querySnapshot.forEach((doc) => {
                resources.push({ id: doc.id, ...doc.data() });
            });
            callback(resources);
        })
        .catch((error) => {
            console.error('Error fetching resources:', error.message);
        });
};

// Exporting Firestore functions
export { createPost, getPosts, updatePost, deletePost, addResource, getResources };
