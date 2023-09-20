export interface CreateMenuType {
  name: string;
  price: number;
  assetUrl?: string;
}

export interface Menu extends CreateMenuType {
  id: number;
  isArchived: boolean;
}

export interface MenuSlide {
  items: Menu[];
  isLoading: boolean;
  error: Error | null;
}
