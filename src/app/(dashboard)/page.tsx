import Footer from './components/footer';
import Navbar from './components/navbar';
import Main from './main';

export default function Page() {
  return (
    <main className="__className_d4e0c8 bg-primary">
      <Navbar />
      <main className="h-full">
        <div className="md:block hidden mt-2 p-4 mb-16 max-w-8xl mx-auto">
          <div className="flex mb-6 justify-between"></div>
          <Main />
          <Footer />
        </div>
      </main>
    </main>
  );
}
