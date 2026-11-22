export interface StoreType {
  label: string,
  value: string,
  icon: string
}
export interface StoreForm {
  name: string,
  imageUrl: string,
  type: StoreType | null,
  address: string,
  schedule: string
}