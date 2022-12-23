import {Injectable} from '@nestjs/common';
import {CreateStorageDto} from './dto/create-storage.dto';
import {GetStorageDto} from './dto/get-storage.dto';
import {UpdateStorageDto} from './dto/update-storage.dto';

@Injectable()
export class StorageService {
    create(createStorageDto: CreateStorageDto) {
    }

    getAll(offset: number, count: number) {
    }

    get(id: number, getStorageDto: GetStorageDto) {
    }

    update(id: number, updateStorageDto: UpdateStorageDto) {
    }

    remove(id: number) {
    }

    getS3() {
    }
}
