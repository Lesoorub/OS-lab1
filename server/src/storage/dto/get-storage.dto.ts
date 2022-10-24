import { PartialType } from "@nestjs/swagger";
import { CreateStorageDto } from "./create-storage.dto";

export class GetStorageDto extends PartialType(CreateStorageDto) {}
