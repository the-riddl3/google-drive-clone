import Navbar from '@/app/_components/Navbar';
import Sidebar from '@/app/_components/Sidebar';
import Directory from '@/app/_components/Directory';

export default function Home() {
  return (
    <div className="flex flex-col w-100 p-0 m-0">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Directory/>
      </div>
    </div>
  );
}
