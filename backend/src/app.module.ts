import { Module } from '@nestjs/common'
import { VillainsModule } from './villains/villains.module'

@Module({
  imports: [VillainsModule],
})
export class AppModule {}
