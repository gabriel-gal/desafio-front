import { PriorityType } from "@/@types/types"

export function getFieldByPriority(priority: PriorityType) {
    if (priority === PriorityType.NEWS) return { field: "created_at", order: "ASC" }
    if (priority === PriorityType.BIGGEST_PRICE) return { field: "price_in_cents", order: "ASC" }
    if (priority === PriorityType.MINOR_PRICE) return { field: "price_in_cents", order: "ASC" }
    return { field: "sales", order: "DSC" }
}
