import { PartialType } from '@nestjs/swagger';
import { CreateRewardDto } from './create-reward.dto';

export class GetRewardDto extends PartialType(CreateRewardDto) {}
