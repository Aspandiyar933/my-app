import { notFound } from 'next/navigation';
import Navbar from '@/app/components/layouts/Navbar';
import path from 'path';
import fs from 'fs/promises';

async function fetchPostData(id) {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data.find(item => item.id === parseInt(id, 10));
}

// Page component
export default async function BlogPost({ params }) {
  const { id } = params;
  const post = await fetchPostData(id);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <main style={{ padding: '20px' }}>
        <h1>{post.title}</h1>
        <p>{post.date} by {post.author}</p>
        <p>{post.description}</p>
      </main>
    </div>
  );
}
