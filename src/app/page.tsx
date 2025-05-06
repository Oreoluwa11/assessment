import  Favorite  from "./favorite/page"
import Navbar from "../app/components/navbar"

export default function Home() {
  return (
    <div >
      <Navbar />
      <main >
        <Favorite />
      </main>
    </div>
  );
}
