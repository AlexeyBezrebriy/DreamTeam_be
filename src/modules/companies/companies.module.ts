import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Company from 'src/common/entities/company.entity';

import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
