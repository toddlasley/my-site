'use client';

import Link from 'next/link';
import { BLOGS } from '../lib/blogs';
import { POSTS_PATH } from '../lib/constants/paths';
import styles from '@/app/blog/page.module.css';

export default function Page() {
  return (
    <div>
      {
        BLOGS.map((x) => {
          return (
            <Link key={x.id} className={styles.blogItem} href={`${POSTS_PATH}?id=${x.id}`}>
              <h3>{x.title}</h3>
              <p>{x.date}</p>
            </Link>
          );
        })
      }
    </div>
  );
}
