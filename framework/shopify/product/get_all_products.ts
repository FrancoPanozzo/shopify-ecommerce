import { ProductConnection } from './../schema.d'
import getAllProductsQuery from '../utils/queries/get_all_products'
import { normalizeProduct } from '../utils/normalize'
import fetchApi from '../utils/fetch_api'

type ReturnType = {
  products: ProductConnection
}

async function getAllProducts(): Promise<any> {
  const data = await fetchApi<ReturnType>(getAllProductsQuery)

  return (
    // Normalize data: Return a simple array of products
    data.products.edges.map((e) => normalizeProduct(e.node)) ?? []
  )
}

export default getAllProducts
