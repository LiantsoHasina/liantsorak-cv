'use client';

import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Liantsoa Rak. All rights reserved.
          </p>
          <p className={styles.builtWith}>
            Built with <span className={styles.highlight}>Next.js</span>, <span className={styles.highlight}>TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
