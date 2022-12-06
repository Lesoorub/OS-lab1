import {Injectable} from '@nestjs/common';
import {CreateStorageDto} from './dto/create-storage.dto';
import {GetStorageDto} from './dto/get-storage.dto';
import {UpdateStorageDto} from './dto/update-storage.dto';

@Injectable()
export class StorageService {
    create(createStorageDto: CreateStorageDto) {
        return 'This action adds a new storage';
    }

    getAll(offset: number, count: number) {
        return `This action returns all storage`;
    }

    get(id: number, getStorageDto: GetStorageDto) {
        var params = {
            Bucket: getStorageDto.bucket,
            Key: `${id}`
        };
        s3.getObject(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                console.log(data);
                return data;
            }
        });
    }

    update(id: number, updateStorageDto: UpdateStorageDto) {
        return `This action updates a #${id} storage`;
    }

    remove(id: number) {
        return `This action removes a #${id} storage`;
    }

    getS3() {
        return new S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
}
