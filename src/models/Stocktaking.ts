export interface Stocktaking {
  name: string,
  description: string,
  imageUrl: string,
  categoryId: string | null,
  subcategoryId: string | null,
  count: number,
  unit: string,
  brand: string
}