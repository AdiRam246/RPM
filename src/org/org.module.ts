import { Module } from '@nestjs/common';
import { OrgService } from './org.service';
import { OrgResolver } from './org.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { org } from './entities/org.entity';

@Module({
  imports: [TypeOrmModule.forFeature([org])],
  providers: [OrgResolver, OrgService],
})
export class OrgModule {}
