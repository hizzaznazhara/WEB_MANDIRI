export enum VillainCategory {
  Villain = 'Villain',
  Mastermind = 'Mastermind',
  Supervillain = 'Supervillain',
}

export class Villain {
  id: number
  name: string
  category: VillainCategory
  hp: number
  cards: string
  strategy: string
  isDefeated: boolean
  createdAt: string
}
