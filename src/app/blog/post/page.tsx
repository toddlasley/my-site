'use client';

import getBlogs from '@/app/lib/blogs';
import { notFound, useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const blogs = getBlogs();

  if (!id || !blogs.has(id)) {
    notFound();
  }

  const blog = blogs.get(id);


  return (
    <div id="post-container">
      <div>{blog?.date}</div>
      <zero-md src={`/md/${blog?.markdown}`}></zero-md>
    </div>
  );
}
