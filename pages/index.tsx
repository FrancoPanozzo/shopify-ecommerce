import type { InferGetStaticPropsType } from 'next'

export async function getStaticProps() {
  const products = [1, 2, 3]

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
