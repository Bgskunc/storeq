import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';

export default function RegisterView() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { push, query } = useRouter();
  const callbackUrl: string = (query?.callbackUrl as string) || '/';
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const form = e.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
    };

    const result = await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push('/auth/login');
    } else {
      setIsLoading(false);
      setError('Email sudah terdaftar');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
      <h1 className="text-[32px] mt-[5px]">Daftar</h1>
      {error && <p className="text-red-500 mb-[5px]">{error}</p>}
      <div className="md:w-[35%] sm:w-[50%] w-full p-[20px] mb-[20px]">
        <form onSubmit={handleSubmit}>
          <Input label="Nama Lengkap" name="fullname" type="text" placeholder="Nama lengkap" inform="Masukkan nama lengkap sesuai ID" />
          <Input label="Email" name="email" type="email" placeholder="Email" inform="Gunakan alamat email aktif anda" />
          <Input label="Password" name="password" type="password" placeholder="Masukkan password baru" inform="Gunakan minimal 8 karakter dengan kombinasi huruf dan angka" />

          <Button type="submit">{isLoading ? 'Loading...' : 'Daftar'}</Button>
        </form>
      </div>
      {/*       
      <div className="relative md:w-[35%] sm:w-[50%] w-full px-[20px] mb-[20px] flex justify-between gap-3">
        <hr className="w-[43%]" />
        <h2 className="absolute right-[46.5%] -top-3">atau</h2>
        <hr className="w-[43%]" />
      </div>
      <div className="md:w-[35%] sm:w-[50%] w-full p-[20px]">
        <button type="button" onClick={() => create('google', { callbackUrl, redirect: false })} className="bg-slate-600 hover:bg-slate-800 rounded text-white w-full p-[10px] font-bold">
          Masuk dengan Google
        </button>
      </div> */}
      <p>
        Sudah punya akun?{' '}
        <Link href="/auth/login" className="font-bold text-slate-700">
          Masuk sekarang
        </Link>
      </p>
    </div>
  );
}
