export interface MenuCategory {
  id: number;
  name: string;
  isAvailable: boolean;
  isArchived: boolean;
}
export interface CreateMenuCategoryType {
  name: string;
  isAvailable: boolean;
}

export interface MenuCategoryState {
  items: MenuCategory[];
  isLoading: boolean;
  error: Error | null;
}
