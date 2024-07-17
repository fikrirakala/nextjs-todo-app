import BackgroundHeading from "@/components/BackgroundHeading";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TodoList from "@/components/TodoList";

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#f1d4b3]">
      <BackgroundHeading />

      <main className="relative grid h-[636px] w-[972px] grid-cols-[7fr_4fr] grid-rows-[60px_1fr] overflow-hidden rounded-lg bg-white shadow-md">
        <Header />
        <TodoList />
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}
