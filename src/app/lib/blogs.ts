type Blog =  {
  id: string;
  date: string;
  markdown: string;
}


const blogs = new Map<string, Blog>();

const BLOGS = [
  { id: '1', date: '2025-12-25', markdown: 'christmas.md' }
];

export default function getBlogs() {
  if (!blogs.size) {
    for (const b of BLOGS) {
      blogs.set(b.id, b);
    }
  }

  return blogs;
};
