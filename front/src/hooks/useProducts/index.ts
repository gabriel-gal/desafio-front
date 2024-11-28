import { ProductsFetchResponse } from "@/@types/types";
import { useFilter } from "@/contexts/FilterContext";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useDeferredValue } from "react";
import { mountQuery } from "@/utils/MountQuery";

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post<ProductsFetchResponse>('http://localhost:3333', { query });
};

export default function useProducts() {
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