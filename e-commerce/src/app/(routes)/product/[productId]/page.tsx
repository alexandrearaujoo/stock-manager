import Gallery from '@/components/gallery';
import Info from '@/components/info';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

import { getProduct } from '@/services/getProduct';
import { getProducts } from '@/services/getProducts';

export default async function ProductPage({
  params
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  const product = await getProduct({ id: productId });

  const suggestedProducts = await getProducts({
    categoryId: product.category.id
  });

  return (
    <main className="bg-white">
      <Container>
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related items" items={suggestedProducts} />
        </section>
      </Container>
    </main>
  );
}
