import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateVillainDto } from './dto/create-villain.dto'
import { UpdateVillainDto } from './dto/update-villain.dto'
import { Villain, VillainCategory } from './entities/villain.entity'

@Injectable()
export class VillainsService {
  private nextId = 9
  private readonly villains: Villain[] = [
    { id: 1, name: 'The Firebug', category: VillainCategory.Villain, hp: 8, cards: 'Frozen Mirror, Ice Shards', strategy: 'Gunakan Frozen Mirror lalu Ice Shards. Ulangi bergantian sampai Firebug kalah.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 2, name: 'Jimmy Snow', category: VillainCategory.Villain, hp: 8, cards: 'Thunderstorm, Shocking Fist', strategy: 'Gunakan Thunderstorm lalu Shocking Fist. Ulangi bergantian sampai Jimmy Snow kalah.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 3, name: 'Big Bertha', category: VillainCategory.Villain, hp: 8, cards: 'Overheat, Incinerate', strategy: 'Gunakan Overheat lalu Incinerate. Ulangi bergantian sampai Big Bertha kalah.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 4, name: 'Shockinator', category: VillainCategory.Villain, hp: 8, cards: 'Enrage, Crush', strategy: 'Gunakan Enrage lalu Crush. Ulangi bergantian sampai Shockinator kalah.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 5, name: 'Generic Thug #17', category: VillainCategory.Mastermind, hp: 10, cards: 'Incinerate, Flame On!', strategy: 'Pakai Incinerate, lalu Flame On!; ulangi urutan ini.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 6, name: 'Professor Pummel', category: VillainCategory.Mastermind, hp: 10, cards: 'Incinerate, Flame On!', strategy: 'Pakai Incinerate, lalu Flame On!; ulangi urutan ini.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 7, name: 'Dragon Hand', category: VillainCategory.Mastermind, hp: 10, cards: 'Crush, Regeneration, 3 kartu Ice berbeda', strategy: 'Pakai Crush lalu Regeneration. Deck dengan 3 kartu Ice berbeda mendorong Dragon Hand lebih sering memakai kartu Lightning.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
    { id: 8, name: 'Kat 5', category: VillainCategory.Mastermind, hp: 10, cards: 'Overcharge, Shocking Fist, Thunderstorm', strategy: 'Gunakan Overcharge, lalu pakai Shocking Fist dan Thunderstorm bergantian.', isDefeated: false, createdAt: '2026-01-01T00:00:00.000Z' },
  ]

  create(dto: CreateVillainDto): Villain {
    const name = dto.name.trim()
    if (this.villains.some((villain) => villain.name.toLowerCase() === name.toLowerCase())) {
      throw new ConflictException(`Villain bernama "${name}" sudah ada.`)
    }

    const villain: Villain = {
      id: this.nextId++,
      ...dto,
      name,
      isDefeated: false,
      createdAt: new Date().toISOString(),
    }
    this.villains.push(villain)
    return villain
  }

  findAll(): Villain[] {
    return [...this.villains]
  }

  findOne(id: number): Villain {
    const villain = this.villains.find((item) => item.id === id)
    if (!villain) throw new NotFoundException(`Villain dengan ID ${id} tidak ditemukan.`)
    return villain
  }

  update(id: number, dto: UpdateVillainDto): Villain {
    const villain = this.findOne(id)
    const name = dto.name?.trim()
    if (name && this.villains.some((item) => item.id !== id && item.name.toLowerCase() === name.toLowerCase())) {
      throw new ConflictException(`Villain bernama "${name}" sudah ada.`)
    }
    Object.assign(villain, dto, name ? { name } : {})
    return villain
  }

  remove(id: number): Villain {
    const index = this.villains.findIndex((item) => item.id === id)
    if (index === -1) throw new NotFoundException(`Villain dengan ID ${id} tidak ditemukan.`)
    return this.villains.splice(index, 1)[0]
  }
}
