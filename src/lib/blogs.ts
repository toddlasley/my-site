export type Blog = {
  id: string;
  title: string;
  date: string;
  markdown: string;
}


const blogs = new Map<string, Blog>();

export const BLOGS = [
  { id: '1', title: 'It all started at Christmas', date: '2025-12-25', markdown: 'christmas.md' }
];

export default function useBlogs() {
  if (!blogs.size) {
    console.log('building blogs');
    for (const b of BLOGS) {
      blogs.set(b.id, b);
    }
  }

  return blogs;
};
