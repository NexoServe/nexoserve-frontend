import Loader from '@/components/Loader/Loader';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full flex justify-center items-center h-screen bg-black">
      <Loader height={50} />
    </div>
  );
}
