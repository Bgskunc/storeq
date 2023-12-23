import AuthLayout from '@/components/layouts/AuthLayout';
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
    <AuthLayout title="Masuk" link="/auth/register" linkText="Belum punya akun ?" linkLabel=" Daftar sekarang" error={error}>
      <form onSubmit={handleSubmit} className="">
        <Input label="Email" name="email" type="email" placeholder="Masukkan email yang terdaftar" />
        <Input label="Password" name="password" type="password" placeholder="Password" />

        <button type="submit" className="bg-slate-600 hover:bg-slate-800 rounded text-white w-full p-[10px] font-bold">
          {isLoading ? 'Loading...' : 'Masuk'}
        </button>
      </form>
      <div className="relative w-full my-[20px] flex justify-between gap-3">
        <hr className="w-[43%]" />
        <h2 className="absolute right-[46.5%] -top-3">atau</h2>
        <hr className="w-[43%]" />
      </div>
      <div className="w-full">
        <button type="button" onClick={() => signIn('google', { callbackUrl, redirect: false })} className="bg-slate-600 hover:bg-slate-800 rounded text-white w-full p-[10px] font-bold">
          Masuk dengan Google
        </button>
      </div>
    </AuthLayout>
  );
}
