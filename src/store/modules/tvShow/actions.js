
import { action } from "typesafe-actions"

import { Dispatch } from "redux"

import { CatalogTypes } from "./types"

import { ApiCallInterface } from "~/types/ApiCallInterface"
import { fetchCatalogs, fetchProducts } from "~/services/Catalog"
import store from "~/store"
import { ICatalogs } from "~/store/entities"


export const setCatalogs = (catalogs: any): any => action(CatalogTypes.SET_CATALOGS, catalogs)
export const setProducts = (products: any): any => action(CatalogTypes.SET_PRODUCTS, products)
export const setCurrentCatalog = (catalog: any): any => action(CatalogTypes.SET_CURRENT_CATALOG, catalog)

export const fetchAllProductsList = (
    merchantId: number,
    searchQuery = "",
) => async (dispatch: Dispatch): Promise<ApiCallInterface> => {
    const apiCallResponse: ApiCallInterface = await fetchProducts(
        merchantId,
        searchQuery,
    )

    dispatch(setProducts(apiCallResponse.data))

    return apiCallResponse
}

export const fetchCatalogList = (
    merchantId: number,
) => async (dispatch: Dispatch): Promise<ApiCallInterface> => {
    const apiCallResponse: ApiCallInterface = await fetchCatalogs(merchantId)

    dispatch(setCatalogs(apiCallResponse.data))

    return apiCallResponse
}

export const fetchCurrentCatalog = (
    catalogID: number,
) =>  (dispatch: Dispatch): void => {

    const payload = store.getState().catalog.catalogList.find(
        (item: ICatalogs) => Number(item.id) === Number(catalogID)
    )

    dispatch(setCurrentCatalog(payload))

}
