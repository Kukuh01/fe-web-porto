import { FaCode } from "react-icons/fa";
import PageLayout from "../components/layouts/PageLayout";
import { PiGlobe } from "react-icons/pi";
import ContactSection from "../components/fragments/Contact/ContactSection";
import Carousel from "../components/fragments/Carousel/CarouselV1";
import CarouselV2 from "../components/fragments/Carousel/CarouselV2";

export default function DetailProject() {
  return (
    <PageLayout>
      {/* Start Header */}
      <div className="relative flex items-center">
        <p className="text-4xl font-bold text-amber-50 mx-auto">
          Profile Web SLB Talitakum
        </p>
        <div className="absolute right-0 bg-zinc-800 flex items-center p-2 rounded-3xl space-x-3">
          <div className="w-3 h-3 rounded-full bg-amber-300"></div>
          <p className="text-zinc-400 text-lg">On Progress</p>
        </div>
      </div>

      {/* Start Carousel */}
      <CarouselV2 />
      {/* End Carousel */}

      {/* End Header */}
      <hr className="text-gray-800" />
      <div className="flex justify-between mt-5 mb-10">
        {/* Start Content */}
        <div className="w-3xl">
          <div className="space-y-5">
            <p className="text-3xl text-orange-600 font-bold">
              Description Program
            </p>
            {/* Start Widget */}
            <div className="flex space-x-3">
              <div className="text-2xl text-zinc-400 flex bg-zinc-800 w-fit px-3 py-1 rounded-4xl items-center space-x-3">
                <FaCode />
                <p>Code</p>
              </div>
              <div className="text-2xl text-zinc-400 flex bg-zinc-800 w-fit px-3 py-1 rounded-4xl items-center space-x-3">
                <PiGlobe />
                <p>Visit</p>
              </div>
            </div>
            {/* End Widget */}
            <div className="text-base text-amber-50">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                incidunt iusto non quaerat, ipsum praesentium reprehenderit enim
                nemo, eligendi ipsam error dicta perferendis repellendus atque
                quisquam? Quis corporis enim necessitatibus voluptates placeat
                quia expedita dolorem ipsa? Ut nobis itaque nesciunt commodi,
                architecto animi repellendus necessitatibus illo dolores quam
                similique. Ea, doloremque unde, eius nam architecto quos
                deleniti rem officia ratione id sit obcaecati nesciunt incidunt
                nihil odio! Nulla molestias aliquam voluptatum at exercitationem
                odit autem? Aspernatur earum nostrum maiores fugiat dolores
                facere vel saepe, harum illum placeat laboriosam? Maiores odio
                vero quam eos porro quibusdam laboriosam eum ratione velit
                asperiores!
              </p>
            </div>
          </div>
        </div>
        {/* End Content */}
        {/* Start Box  */}
        <div className="w-1xl">
          <p className="text-2xl text-amber-50 font-bold text-center">
            Tech Stack
          </p>
          <div className="border-2 border-orange-600 p-5 rounded-2xl grid grid-cols-3 gap-6 place-items-center">
            <div className="w-20 h-20 bg-gray-600 rounded-2xl"></div>
            <div className="w-20 h-20 bg-gray-600 rounded-2xl"></div>
            <div className="w-20 h-20 bg-gray-600 rounded-2xl"></div>
            <div className="w-20 h-20 bg-gray-600 rounded-2xl"></div>
            <div className="w-20 h-20 bg-gray-600 rounded-2xl"></div>
            <div className="w-20 h-20 bg-gray-600 rounded-2xl"></div>
          </div>
        </div>
        {/* End Box  */}
      </div>
      <ContactSection />
    </PageLayout>
  );
}
