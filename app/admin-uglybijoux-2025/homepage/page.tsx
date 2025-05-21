'use client';
import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

// Gunakan endpoint internal (proxy) dari Next.js App Router
const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function HomepageProduct() {
  // Ubah ke route internal
  const { data: shop, mutate: refreshShop } = useSWR('/api/products/shop', fetcher);
  const { data: homepage, mutate: refreshHomepage } = useSWR('/api/products/homepage', fetcher);
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const isOnHomepage = (productId: string) =>
    homepage?.some((entry: any) => entry.shop_products?.id === productId);

  const toggleHomepage = async (productId: string, currentlyShown: boolean) => {
    const confirmed = window.confirm(
      currentlyShown
        ? 'Apakah Anda yakin ingin menghapus produk ini dari homepage?'
        : 'Apakah Anda yakin ingin menampilkan produk ini di homepage?'
    );

    if (!confirmed) return;

    setLoadingProductId(productId);
    const url = `/api/products/homepage/${productId}`;

    try {
      if (currentlyShown) {
        await axios.delete(url);
      } else {
        await axios.post(url);
      }

      await new Promise(resolve => setTimeout(resolve, 10000));
      window.location.reload();
      await refreshHomepage();
    } catch (err) {
      console.error('Gagal mengubah status produk homepage:', err);
      toast.error('Gagal mengubah status produk');
    } finally {
      setLoadingProductId(null);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
        Kelola Produk Homepage
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-600">Foto</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Nama</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Harga</th>
              <th className="px-4 py-3 font-semibold text-gray-600 text-center">Status</th>
              <th className="px-4 py-3 font-semibold text-gray-600 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {shop?.map((product: any) => {
              const active = isOnHomepage(product.id);
              const isLoading = loadingProductId === product.id;

              return (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <img
                      src={product.image1 || '/images/fallback.jpg'}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded border"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">{product.title}</td>
                  <td className="px-4 py-3 text-gray-700">{product.price}</td>
                  <td className="px-4 py-3 text-center">
                    {active ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                        <CheckCircle className="w-4 h-4 mr-1" /> Ya
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                        <XCircle className="w-4 h-4 mr-1" /> Tidak
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      disabled={isLoading}
                      onClick={() => toggleHomepage(product.id, active)}
                      className={`inline-flex items-center justify-center gap-2 px-4 py-1.5 text-sm font-medium rounded-md shadow transition
                        ${active ? 'bg-gray-800 hover:bg-gray-900' : 'bg-black hover:bg-gray-900'}
                        text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="animate-spin w-4 h-4" />
                          Memproses...
                        </>
                      ) : active ? (
                        <>
                          <XCircle className="w-4 h-4" />
                          Hapus dari Homepage
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Tampilkan di Homepage
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}