const crypto = require('crypto');

function hashPassword(password) {
  // Create a hash object with the desired algorithm (in this case, SHA-256)
  const hash = crypto.createHash('sha256');

  // Update the hash object with the password
  hash.update(password);

  // Generate the hash value in hexadecimal format
  const hashedPassword = hash.digest('hex');

  return hashedPassword;
}

module.exports = hashPassword;