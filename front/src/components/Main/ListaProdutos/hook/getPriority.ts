import { PriorityType } from "@/@types/types"

export default function getPriority(priority: PriorityType) {
    if (priority === PriorityType.BIGGEST_PRICE) return {field: "price_in_cents", order: "DSC"}
    if (priority === PriorityType.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
    if (priority === PriorityType.NEWS) return {field: "created_at", order: "ASC"}
    return {field: "sales", order: "DSC"}
}
