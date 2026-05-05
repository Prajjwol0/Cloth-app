import { MulterModuleOptions } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export const multerConfig: MulterModuleOptions = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(
        null,
        '${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}',
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB MAX
};
