import { ProductConnection } from './../schema.d'
import getAllProductsQuery from '../utils/queries/get_all_products'
import fetchApi from '../utils/fetch_api'

async function getAllProducts(): Promise<any> {
  const products = await fetchApi<ProductConnection>(getAllProductsQuery)

  return (
    products.edges.map((e) => {
      return e.node
    }) ?? []
  )
}

export default getAllProducts
