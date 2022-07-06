import { DiskModule } from '../disk/disk.module';
import { Module } from '@nestjs/common';
import { CpuModule } from '../cpu/cpu.module';
import { ComputerController } from './computer.controller';

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
})
export class ComputerModule { }
