import { FilterType } from "@/@types/types"

export default function getCategory(type:FilterType) {
    if (type === FilterType.MUG) return "mugs"
    if (type === FilterType.SHIRT) return "t-shirts"
    return ""
}
