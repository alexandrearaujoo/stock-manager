import SizeForm from './components/size-form';

import { getSize } from '@/services/sizes';

export async function generateMetadata({
  params
}: {
  params: { sizeId: string };
}) {
  const { sizeId } = params;

  const size = await getSize({ sizeId });

  const title = size?.name ? 'Editar tamanho' : 'Criar tamanho';

  return {
    title
  };
}

export default async function SizePage({
  params
}: {
  params: { sizeId: string };
}) {
  const { sizeId } = params;

  const size = await getSize({ sizeId });

  return (
    <article className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialValues={size} />
      </div>
    </article>
  );
}
