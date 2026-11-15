import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common'
import { CreateVillainDto } from './dto/create-villain.dto'
import { UpdateVillainDto } from './dto/update-villain.dto'
import { VillainsService } from './villains.service'

@Controller('villains')
export class VillainsController {
  constructor(private readonly villainsService: VillainsService) {}

  @Post()
  create(@Body() dto: CreateVillainDto) {
    return this.villainsService.create(dto)
  }

  @Get()
  findAll() {
    return this.villainsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.villainsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateVillainDto) {
    return this.villainsService.update(id, dto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.villainsService.remove(id)
  }
}
