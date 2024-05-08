import SimpleForm from "@/components/contact-form";
import Hero from "@/components/layout/home/hero";
import Navbar from "@/components/layout/main-layout/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Hero title="Contact Us" />
      <SimpleForm />
    </div>
  );
}
