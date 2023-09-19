export interface CreateMenuCategory {
  name: string;
  isAvailable: boolean;
}

export interface MenuCategory extends CreateMenuCategory {
  id: number;
  isArchived: false;
}

export interface MenuCategoryState {
  items: MenuCategory[];
  isLoading: boolean;
  error: Error | null;
}
