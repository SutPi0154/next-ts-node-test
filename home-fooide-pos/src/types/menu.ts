export interface CreateMenuType {
  name: string;
  price: number;
  assetUrl?: string;
}

export interface Menu extends CreateMenuType {
  id: number;
  isArchived: boolean;
}
