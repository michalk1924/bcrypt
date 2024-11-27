import Link from 'next/link';
import styles from './styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the App!</h1>
      <div className={styles.links}>
        <Link href="/login"
          className={styles.button}>Log In
        </Link>
        <Link href="/signup"
          className={styles.button}>Sign Up
        </Link>
      </div>
    </div>
  );
}
