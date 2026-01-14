import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  menuItems,
  categories,
  modifiers,
  getBestSellers,
  getPopularItems,
  getItemsByCategory,
  getSpecialDeals,
  getItemById,
  getModifiersByIds,
} from '../data/menu';

export function useMenu() {
  const [items] = useState(menuItems);
  const [allCategories] = useState(categories);
  const [allModifiers] = useState(modifiers);
  const [loading] = useState(false);
  const [error] = useState(null);

  const bestSellers = useMemo(() => getBestSellers(), []);
  const popularItems = useMemo(() => getPopularItems(), []);
  const specialDeals = useMemo(() => getSpecialDeals(), []);

  const getByCategory = useCallback((categoryId) => {
    return getItemsByCategory(categoryId);
  }, []);

  const getById = useCallback((id) => {
    return getItemById(id);
  }, []);

  const getModifiers = useCallback((ids) => {
    return getModifiersByIds(ids);
  }, []);

  const searchItems = useCallback((query) => {
    const searchQuery = query.toLowerCase().trim();
    if (!searchQuery) return items;
    
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery)
    );
  }, [items]);

  const filterByDietary = useCallback((filters) => {
    return items.filter(item => {
      if (filters.healthy && !item.isHealthy) return false;
      if (filters.spicy && !item.isSpicy) return false;
      return true;
    });
  }, [items]);

  return {
    items,
    categories: allCategories,
    modifiers: allModifiers,
    loading,
    error,
    bestSellers,
    popularItems,
    specialDeals,
    getByCategory,
    getById,
    getModifiers,
    searchItems,
    filterByDietary,
  };
}

export default useMenu;
