import { FilterType, PriorityType, ProductsFetchResponse } from "@/@types/types";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import getCategory from "./getCategory";
import getPriority from "./getPriority";
import { useDeferredValue } from "react";

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post<ProductsFetchResponse>('http://localhost:3333', { query });
};

const mountQuery = (type: FilterType, priority: PriorityType) => {
    if (type == FilterType.ALL && priority === PriorityType.NEWS) return `
        query {
            allProducts (sortField: "sales", sortOrder: "DSC") {
                id
                name
                price_in_cents
                image_url
            }
        }
    `
    const prioritySettings = getPriority(priority)
    const category = getCategory(type)
    return `
        query {
            allProducts(sortField: "${prioritySettings.field}", sortOrder: "${prioritySettings.order}", ${category ? `filter: { category: "${category}"}`: ''}) {
              id
              name
              price_in_cents
              image_url
              category
            }
          }
        
        `
}

export default function useProdutos() {
    const { type, priority, search } = useFilter()
    const searchDefer = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
    })

    const produtcs =  data?.data?.data?.allProducts

    const filteredporducts = produtcs?.filter(produto => produto.name.toLocaleLowerCase().includes(searchDefer.toLocaleLowerCase()))

    return {
        data: filteredporducts
    }
}