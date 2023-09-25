export interface CreateMenuType {
  name: string;
  price: number;
  assetUrl: string;
}
export interface Menu extends CreateMenuType {
  id: number;
  isArchived: boolean;
}
export interface MenuState {
  items: Menu[];
  isLoading: boolean;
  error: Error | null;
}

export interface UpdateMenuPayload {
  id: number;
  name: string;
}
