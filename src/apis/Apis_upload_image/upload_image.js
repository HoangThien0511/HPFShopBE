const cloudinary = require('cloudinary').v2;
const multer = require('multer');

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
});

// Cấu hình Multer để nhận file từ client
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // giới hạn kích thước file 10 MB
  },
});