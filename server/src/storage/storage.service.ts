import { Injectable } from '@nestjs/common';
import { CreateStorageDto } from './dto/create-storage.dto';
import { GetStorageDto } from './dto/get-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';

@Injectable()
export class StorageService {
  create(createStorageDto: CreateStorageDto) {
    return 'This action adds a new storage';
  }

  getAll(offset:number, count:number) {
    return `This action returns all storage`;
  }

  get(id: number, getStorageDto: GetStorageDto) {
    return `This action returns a #${id} storage`;
  }

  update(id: number, updateStorageDto: UpdateStorageDto) {
    return `This action updates a #${id} storage`;
  }

  remove(id: number) {
    return `This action removes a #${id} storage`;
  }
}
