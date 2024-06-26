'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

import Currency from './currency';
import IconButton from './icon-button';

import { usePreviewModal } from '@/hooks/usePreviewModal';
import { Product } from '@/interfaces';
import { useCartStore } from '@/stores/cartStore';
import { Expand, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const onOpen = usePreviewModal((state) => state.onOpen);

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <figure className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={product?.images?.[0]?.url}
          alt={product.name}
          fill
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              onClick={onAddToCart}
            />
          </div>
        </div>
      </figure>
      <section>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category.name}</p>
      </section>
      <section className="flex items-center justify-between">
        <Currency value={product.price} />
      </section>
    </div>
  );
};

export default ProductCard;
