import { getFieldByPriority } from "../GetBy/filed-priority"
import { getCategoryByType } from "../GetBy/category-type"
import { FilterType, PriorityType } from "@/@types/types"


export const mountQuery = (type: FilterType, priority: PriorityType) => {
    if (type === FilterType.ALL && priority === PriorityType.POPULARITY) return `query {
        allProducts(sortField: "sales", sortOrder: "DSC") {
          id
          name
          price_in_cents
          image_url
        }
      }
    `
    const sortSettings = getFieldByPriority(priority)
    const categoryFilter = getCategoryByType(type)
    return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ''}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `
}