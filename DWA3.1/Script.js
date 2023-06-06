// @ts-check

/**
 * Represents a user object.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {number} age - The age of the user.
 * @property {string} email - The email address of the user.
 */

/**
 * Displays user information.
 * @param {User} user - The user object.
 */
function displayUserInfo(user) {
    const { name, age, email } = user;
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
  }
  
  // Example usage
  const user = {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com'
  };
  
  displayUserInfo(user);
  