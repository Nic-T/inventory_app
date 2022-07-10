const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now() + ".jpg");
  },
});
var upload = multer({ storage: storage });
const authMiddleware = require("../middleware/authMiddleware");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", upload.single("file"), authMiddleware, createProduct);

router.put("/:id", authMiddleware, updateProduct);

router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
