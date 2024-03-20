import Link from "next/link";
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import Study from './Components/Study'
import Aboutsection from './Components/Aboutsection'
import ProjectSection from './Components/ProjectSection'
import EmailSection from './Components/EmailSection'
import Footer from './Components/Footer'
import ProfileCard from './Components/ProfileCard'
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-[#3c2a67]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Homepage />
        <Aboutsection />
        <ProfileCard/>
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
   
   
  );
}
