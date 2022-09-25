import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '../framework/shopify/product/get_all_products'

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: {
      products,
    },
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{products}</div>
}
