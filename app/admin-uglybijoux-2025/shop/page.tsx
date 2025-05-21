'use client';

import { useState, useRef } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import toast from 'react-hot-toast';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function ShopPage() {
  const { data, mutate } = useSWR('/api/products/shop', fetcher);

  const [form, setForm] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    details: ['']
  });

  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const image1Ref = useRef<HTMLInputElement>(null);
  const image2Ref = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const handleEdit = (item: any) => {
    setForm({
      title: item.title,
      price: item.price,
      category: item.category,
      description: item.description,
      details: item.details || ['']
    });
    setEditId(item.id);
    setEditMode(true);
    setImage1(null);
    setImage2(null);
    if (image1Ref.current) image1Ref.current.value = '';
    if (image2Ref.current) image2Ref.current.value = '';
  };

  const handleCancelEdit = () => {
    setForm({ title: '', price: '', category: '', description: '', details: [''] });
    setImage1(null);
    setImage2(null);
    setEditId(null);
    setEditMode(false);
    if (image1Ref.current) image1Ref.current.value = '';
    if (image2Ref.current) image2Ref.current.value = '';
  };

  const handleDetailChange = (index: number, value: string) => {
    const updated = [...form.details];
    updated[index] = value;
    setForm({ ...form, details: updated });
  };

  const addDetail = () => setForm({ ...form, details: [...form.details, ''] });
  const removeDetail = (index: number) => {
    const updated = [...form.details];
    updated.splice(index, 1);
    setForm({ ...form, details: updated });
  };

  const handleSubmit = async () => {
    const { title, price, category, description, details } = form;

    if (!title || !price || !category || !description) {
      toast.error('Semua field wajib diisi');
      return;
    }

    if (!editMode) {
      if (!image1 || !image2) {
        toast.error('Gambar wajib diisi');
        return;
      }
    }

    if (details.some(detail => !detail.trim())) {
      toast.error('Semua detail produk wajib diisi');
      return;
    }

    setLoading(true);
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === 'details') {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value as string);
      }
    });

    if (image1) formData.append('image1', image1);
    if (image2) formData.append('image2', image2);

    try {
      if (editMode && editId) {
        const body = {
          title: form.title,
          price: form.price,
          category: form.category,
          description: form.description,
          details: form.details,
        };

        await axios.put(`/api/products/shop/${editId}`, body);
        toast.success('Produk diperbarui');
        window.location.reload();
      } else {
        await axios.post('/api/products/shop', formData);
        toast.success('Produk ditambahkan');
        setForm({ title: '', price: '', category: '', description: '', details: [''] });
        setImage1(null);
        setImage2(null);
    
        if (image1Ref.current) image1Ref.current.value = '';
        if (image2Ref.current) image2Ref.current.value = '';
        window.location.reload();;
      }

      setForm({ title: '', price: '', category: '', description: '', details: [''] });
      setEditId(null);
      setEditMode(false);
      if (image1Ref.current) image1Ref.current.value = '';
      if (image2Ref.current) image2Ref.current.value = '';
      window.location.reload();
    } catch {
      toast.error(editMode ? 'Gagal memperbarui produk' : 'Gagal menambahkan produk');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus produk ini?')) return;

    setDeletingId(id);
    try {
      await axios.delete(`/api/products/shop/${id}`);
      toast.success('Produk dihapus');
      window.location.reload();;
    } catch {
      toast.error('Gagal menghapus produk');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Tambah Produk</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          placeholder="Judul Produk"
          className="border p-2"
        />
        <input
          type="text"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          placeholder="Harga"
          className="border p-2"
        />
        <select
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
          className="border p-2"
        >
          <option value="">Pilih Kategori</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Charms">Charms</option>
          <option value="Rings">Rings</option>
        </select>
        <input
          type="text"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          placeholder="Deskripsi"
          className="border p-2"
        />
        {!editMode && (
          <>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Gambar 1</label>
              <input type="file" ref={image1Ref} onChange={e => setImage1(e.target.files?.[0] || null)} />
              {image1 && <img src={URL.createObjectURL(image1)} alt="Preview" className="w-24 h-24 object-cover mt-2 rounded" />}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Gambar 2</label>
              <input type="file" ref={image2Ref} onChange={e => setImage2(e.target.files?.[0] || null)} />
              {image2 && <img src={URL.createObjectURL(image2)} alt="Preview" className="w-24 h-24 object-cover mt-2 rounded" />}
            </div>
          </>
        )}
      </div>

      <div className="mb-6">
        <label className="block font-medium mb-2">Detail Produk</label>
        <div className="flex flex-col gap-2">
          {form.details.map((detail, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={detail}
                onChange={e => handleDetailChange(i, e.target.value)}
                placeholder={`Detail ${i + 1}`}
                className="border p-2 flex-1"
              />
              <button onClick={() => removeDetail(i)} className="text-red-500">Hapus</button>
            </div>
          ))}
          <button onClick={addDetail} className="text-blue-600 text-sm mt-1">+ Tambah Detail</button>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`bg-black text-white px-6 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Menyimpan...' : editMode ? 'Perbarui Produk' : 'Tambah Produk'}
        </button>

        {editMode && (
          <button
            onClick={handleCancelEdit}
            className="bg-black text-white px-6 py-2 rounded"
            disabled={loading}
          >
            Batal
          </button>
        )}
      </div>

      <hr className="my-8" />

      <h3 className="text-xl font-semibold mb-4">Daftar Produk</h3>
      <div className="grid gap-4">
        {data?.map((item: any) => (
          <div key={item.id} className="border p-4 flex items-center gap-4">
            <img src={item.image1 || '/images/fallback.jpg'} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-gray-700">{item.price}</p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              disabled={deletingId === item.id}
              className={`text-white px-3 py-1 rounded ${deletingId === item.id ? 'bg-gray-400' : 'bg-red-600'}`}
            >
              {deletingId === item.id ? 'Menghapus...' : 'Hapus'}
            </button>
            <button
              onClick={() => handleEdit(item)}
              className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}