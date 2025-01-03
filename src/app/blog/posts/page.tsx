'use client';

import getBlogs from '@/app/lib/blogs';
import { notFound, useSearchParams } from 'next/navigation';
import styles from '@/app/blog/posts/page.module.css';

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const blogs = getBlogs();

  if (!id || !blogs.has(id)) {
    notFound();
  }

  const blog = blogs.get(id);

  return (
    <div className={styles.postContainer}>
      <h3>{blog?.title}</h3>
      <h5>{blog?.date}</h5>
      <zero-md src={`/md/${blog?.markdown}`}></zero-md>
    </div>
  );
}
