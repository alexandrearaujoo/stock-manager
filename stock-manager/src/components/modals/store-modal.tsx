'use client';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';
import Modal from '../ui/modal';

import { useModalForm } from '@/hooks/useModalForm';
import { useModalStore } from '@/hooks/useModalStore';

const StoreModal = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const onClose = useModalStore((state) => state.onClose);

  const { modalForm, onSubmit, handleSubmit, isSubmitting } = useModalForm();

  return (
    <Modal
      title="Criar loja"
      description="Adicione uma nova loja para gerenciar os produtos"
      isOpen={isOpen}
      onClose={onClose}
    >
      <section>
        <article className="space-y-4 py-2 pb-4">
          <Form {...modalForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                control={modalForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E-Commerce"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <article className="flex w-full items-center justify-end space-x-2 pt-6">
                <Button
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  Continuar
                </Button>
              </article>
            </form>
          </Form>
        </article>
      </section>
    </Modal>
  );
};

export default StoreModal;
