export const toRupiah = (harga: number) => {
  return harga.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
};
