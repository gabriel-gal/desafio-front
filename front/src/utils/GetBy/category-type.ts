import { FilterType } from "@/@types/types"

export function getCategoryByType(type: FilterType) {
    if (type == FilterType.MUG) return "mugs"
    if (type == FilterType.SHIRT) return "t-shirts"
    return ""
}