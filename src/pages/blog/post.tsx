'use client';

import getBlogs, { Blog } from '@/lib/blogs';
import styles from './post.module.css';
import { Suspense, useEffect, useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router';
import { POSTS_PATH } from '@/lib/constants/paths';

function BlogPost() {
  const router = useRouter();
  const id = router.asPath.replace(`${POSTS_PATH}?id=`, '');
  const [blog, setBlog] = useState<Blog | undefined>();
  const [blogBody, setBlogBody] = useState('');

  useEffect(
    () => {
      const blogs = getBlogs();

      if (!id || !blogs.has(id)) {
        router.push('/404');
      } else {
        const b = blogs.get(id);

        fetch(`/md/${b?.markdown}`).then(async (response) => {
          const content = await response.text();
          setBlog(b);
          setBlogBody(DOMPurify.sanitize(marked.parse(content).toString()));
        });
      }
    },
    [id, blog, router]
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
