"use client"

import React, { useState, FormEvent } from 'react';
import styles from '@/app/styles/auth.module.css';
import authService from "@/services/auth";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }
    const token = await authService.signup(email, password);
    if (token) {
      console.log('Signed up successfully');
      alert("you have signed up successfully");
      router.push('/');
    } else {
      console.log('Error signing up');
      alert("Error signing up");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sign Up</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        <Link href="/login" className={styles.link}>
          Already have an account? Log in now.
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
