'use client';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState, Dispatch, SetStateAction, FormEvent } from 'react';

type Props = {
  setFilter: Dispatch<SetStateAction<Filter>>;
};

function SearchProduct({ setFilter }: Props) {
  const [category, setCategory] = useState<string>('Semua');
  const [name, setName] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const filter = {
      name,
      category,
    };
    setFilter(filter);
    console.log(filter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'end',
          gap: 4,
        }}
      >
        <SelectCategory
          category={category}
          handleChange={handleChange}
        />
        <TextField
          id='cari-produk'
          label='Cari produk'
          variant='standard'
          type='text'
          size='small'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type='submit'
          variant='contained'
          size='small'
        >
          Cari
        </Button>
      </Box>
    </form>
  );
}

type SelectCategory = {
  category: string;
  handleChange: (event: SelectChangeEvent) => void;
};

function SelectCategory({ category, handleChange }: SelectCategory) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/products');
        const data = await res.json();

        const uniqueCat: string[] = Array.from(new Set(data.map((d: any) => d.category)));
        setCategories(uniqueCat);
      } catch (err) {
        throw new Error('Error get data');
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <FormControl sx={{ minWidth: '130px', justifyItems: 'end' }}>
        <InputLabel
          id='category'
          size='small'
        >
          Kategori
        </InputLabel>
        <Select
          labelId='select-category'
          id='select-category'
          size='small'
          value={category}
          label='Kategory'
          onChange={handleChange}
        >
          <MenuItem value='Semua'>Semua</MenuItem>
          {categories.map((c, i) => (
            <MenuItem
              key={i}
              value={c}
            >
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SearchProduct;
