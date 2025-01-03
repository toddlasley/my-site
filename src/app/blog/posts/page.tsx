'use client';

import getBlogs from '@/app/lib/blogs';
import { notFound, useSearchParams } from 'next/navigation';
import styles from '@/app/blog/posts/page.module.css';
import { Suspense, useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

function BlogPost() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const blogs = getBlogs();

  if (!id || !blogs.has(id)) {
    notFound();
  }

  const [blogBody, setBlogBody] = useState('');
  
  const blog = blogs.get(id);

  useEffect(
    () => {
      fetch(`/md/${blog?.markdown}`).then(async (response) => {
        const content = await response.text();
        setBlogBody(DOMPurify.sanitize(marked.parse(content).toString()));
      });
    },
    [id, blog?.markdown]
  );

  return (
    <div className={styles.postContainer}>
      <h3>{blog?.title}</h3>
      <h5 className={styles.postDate}>{blog?.date}</h5>
      <div className={styles.blogBody} dangerouslySetInnerHTML={{__html: blogBody}}></div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <BlogPost />
    </Suspense>
  );
}
