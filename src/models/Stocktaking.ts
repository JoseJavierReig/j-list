// Modelos
import type { Category } from './Category.ts';
import type { Subcategory } from './Subcategory.ts';

export interface Stocktaking {
  name: string,
  description: string,
  imageUrl: string,
  category: Category | null,
  subcategory: Subcategory | null,
  count: number,
  unit: string,
  brand: string
}