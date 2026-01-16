import SectionLayout from "../../layouts/SectionLayout";
import MessageBox from "./MessageBox";

export default function ContactSection() {
  return (
    <SectionLayout title="Let's talk" description="Contact">
      <div id="contact" className="flex flex-col lg:flex-row justify-between">
        <div className="text-amber-50 text-lg w-full">
          <p>
            Have a question or a project in mind? Feel free to reach out.
            silvanusprasetyo@gmail.com
          </p>
        </div>
        <div className="w-full">
          <MessageBox />
        </div>
      </div>
    </SectionLayout>
  );
}
