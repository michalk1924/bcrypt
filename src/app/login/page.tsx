"use client"

import React, { useState, FormEvent } from 'react';
import styles from '@/app/styles/auth.module.css';
import authService from "@/services/auth";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const token = await authService.login(email, password);
    if (token) {
      console.log('Logged in successfully');
      alert("you have logged in successfully");
      router.push('/');
    } else {
      console.log('Invalid email or password');
      alert("Invalid email or password");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Log In</h2>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Log In
        </button>
        <Link href="/signup"
          className={styles.link}>Don't have an account? Sign up now.
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
