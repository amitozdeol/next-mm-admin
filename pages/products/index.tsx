import AppWrappers from 'app/AppWrappers';
import ProductsPage from 'app/products/default/page';
import AdminLayout from 'layouts/admin';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: { products },
  };
};

export default function Products({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <AppWrappers>
      <AdminLayout>
        <ProductsPage products={products} />
      </AdminLayout>
    </AppWrappers>
  );
}
