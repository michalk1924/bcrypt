
# Bcrypt Authentication Example

This project demonstrates how to implement secure password handling using the `bcrypt` library. It includes functionalities for password hashing and verification, making it a robust solution for user authentication in Node.js applications.

## Features
- **Password Hashing**: Securely hashes user passwords using `bcrypt` to enhance security.
- **Password Verification**: Compares hashed passwords with user input to verify authentication.
- **Simple Integration**: Designed for easy integration into existing Node.js applications.

## Prerequisites
Before running the project, ensure you have the following installed:
- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/michalk1924/bcrypt.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bcrypt
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. **Run the application**:
   ```bash
   npm run dev
   ```
2. **Testing the functionality**:
   - Hash a password using `bcrypt`.
   - Verify the hashed password against user input.

## How It Works
1. **Hashing**:
   - Uses the `bcrypt.hash` function to create a secure hash of a password.
   - Salts are automatically generated to add randomness and protect against rainbow table attacks.

2. **Verification**:
   - Uses the `bcrypt.compare` function to check if a given password matches the stored hash.

## Example Code

```javascript
const bcrypt = require('bcrypt');

// Hashing a password
const password = 'mySecretPassword';
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log('Hashed Password:', hash);

  // Verifying the password
  bcrypt.compare(password, hash, (err, result) => {
    if (err) throw err;
    console.log('Password Match:', result);
  });
});
```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
