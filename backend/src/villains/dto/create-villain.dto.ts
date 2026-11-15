import { IsEnum, IsInt, IsString, Max, MaxLength, Min, MinLength } from 'class-validator'
import { VillainCategory } from '../entities/villain.entity'

export class CreateVillainDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string

  @IsEnum(VillainCategory)
  category: VillainCategory

  @IsInt()
  @Min(1)
  @Max(999)
  hp: number

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  cards: string

  @IsString()
  @MinLength(5)
  @MaxLength(220)
  strategy: string
}
