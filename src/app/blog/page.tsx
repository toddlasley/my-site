'use client';

import Link from 'next/link';
import { BLOGS } from '../lib/blogs';

export default function Page() {
  return (
    <div>
      {
        BLOGS.map((x) => {
          return (
            <Link key={x.id} href={`/blog/post?id=${x.id}`}>{x.title}</Link>
          );
        })
      }
    </div>
  );
}
