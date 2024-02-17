export default function SinglePostPage({ params }) {
  return (
    <div className='relative top-20'>
      <h2>This is Single Post Page</h2>
      <h2>{`Post: ${params.blogSlug}`}</h2>
    </div>
  );
}
