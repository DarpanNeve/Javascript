const express = require("express");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

// Predefined encryption key
const encryptionKey = "MySecretKey123"; // You should replace this with your actual encryption key
const iv = "1234567890123456";
// Function to encrypt text
function encryptText(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", encryptionKey);
  let encryptedText = cipher.update(text, "utf8", "hex");
  encryptedText += cipher.final("hex");
  return encryptedText;
}

// Function to decrypt text
function decryptText(encryptedText) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", encryptionKey);
  let decryptedText = decipher.update(encryptedText, "hex", "utf8");
  decryptedText += decipher.final("utf8");
  return decryptedText;
}

app.use(express.json());

// Endpoint to encrypt text
app.post("/encrypt", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }
  const encryptedText = encryptText(text);
  res.json({ encryptedText });
});

// Endpoint to decrypt text
app.get("/decrypt", (req, res) => {
  const { encryptedText } = req.body;
  if (!encryptedText) {
    return res.status(400).json({ error: "Encrypted text is required" });
  }
  try {
    const decryptedText = decryptText(encryptedText);
    res.json({ decryptedText });
  } catch (error) {
    res.status(400).json({ error: "Failed to decrypt text" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
