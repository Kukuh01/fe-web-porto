import SectionLayout from "../../layouts/SectionLayout";
import MessageBox from "./MessageBox";

export default function ContactSection() {
  return (
    <SectionLayout title="Let's talk" description="Contact">
      <div id="contact" className="flex justify-between">
        <div className="text-amber-50 text-lg w-md">
          <p>
            Have a question or a project in mind? Feel free to reach out.
            silvanusprasetyo@gmail.com
          </p>
        </div>
        <div className="w-2xl">
          <MessageBox />
        </div>
      </div>
    </SectionLayout>
  );
}
