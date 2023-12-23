import Input from '@/components/ui/Input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';

export default function LoginView() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { push, query } = useRouter();

  const callbackUrl: string = (query?.callbackUrl as string) || '/';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const form = e.target as HTMLFormElement;
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError('Email atau Password anda salah');
      }
    } catch (error) {
      setIsLoading(false);
      setError('Email atau Password anda salah');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
      <h1 className="text-[32px] mt-[5px]">Masuk</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="md:w-[35%] sm:w-[50%] w-full pt-[5px] pb-[20px] px-[20px] mb-[20px]">
        <form onSubmit={handleSubmit} className="">
          <Input label="Email" name="email" type="email" placeholder="Masukkan email yang terdaftar" />
          <Input label="Password" name="password" type="password" placeholder="Password" />

          <button type="submit" className="bg-slate-600 hover:bg-slate-800 rounded text-white w-full p-[10px] font-bold">
            {isLoading ? 'Loading...' : 'Masuk'}
          </button>
        </form>
      </div>
      <div className="relative md:w-[35%] sm:w-[50%] w-full px-[20px] mb-[20px] flex justify-between gap-3">
        <hr className="w-[43%]" />
        <h2 className="absolute right-[46.5%] -top-3">atau</h2>
        <hr className="w-[43%]" />
      </div>
      <div className="md:w-[35%] sm:w-[50%] w-full p-[20px]">
        <button type="button" onClick={() => signIn('google', { callbackUrl, redirect: false })} className="bg-slate-600 hover:bg-slate-800 rounded text-white w-full p-[10px] font-bold">
          Masuk dengan Google
        </button>
      </div>
      <p>
        Belum punya akun?{' '}
        <Link href="/auth/register" className="font-bold text-slate-700">
          Ayo daftar
        </Link>{' '}
      </p>
    </div>
  );
}
