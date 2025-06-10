export type Blog = {
  id: string;
  title: string;
  date: string;
  markdown: string;
}


const blogs = new Map<string, Blog>();

export const BLOGS = [
  { id: '1', title: 'It all started at Christmas', date: '2024-12-25', markdown: 'christmas.md' }
];

export default function useBlogs() {
  if (!blogs.size) {
    for (const b of BLOGS) {
      blogs.set(b.id, b);
    }
  }

  return blogs;
};
