import { FcLike } from "react-icons/fc";
import CategoryTag from "../components/elements/CategoryTag";
import ContactSection from "../components/fragments/Contact/ContactSection";
import DateBox from "../components/fragments/DateBox";
import PageLayout from "../components/layouts/PageLayout";
import useScrollContact from "../../hooks/useScrollContact";

export default function DetailArticle() {
  const { contactRef, handleContactClick } = useScrollContact();
  return (
    <PageLayout onContactClick={handleContactClick}>
      <div>
        {/* Start Header */}
        <div className="mb-14">
          <p className="text-4xl text-amber-50">Article Title</p>
          <div className="space-x-20 flex">
            <DateBox />
            <div className="flex space-x-5">
              <CategoryTag>technology</CategoryTag>
              <CategoryTag>education</CategoryTag>
            </div>
          </div>
        </div>
        {/* End Header */}
        {/* Start Thumbnail */}
        <div className="w-2xl h-96 bg-amber-50 rounded-2xl mx-auto">
          <img src="" alt="" />
        </div>
        {/* End Thumbnail */}
        <div className="mt-5 mb-20 text-amber-50 text-base">
          <div className="flex items-center space-x-3">
            <FcLike className="text-3xl" />
            <p>999 Likes</p>
          </div>
          <div className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            dolor eveniet fuga doloremque voluptate similique adipisci id
            numquam neque? Commodi cumque minus natus doloremque, aperiam
            reprehenderit sed quod suscipit distinctio ab, est odit omnis,
            officia voluptatem nostrum eaque maiores dignissimos tempore.
            Commodi illo quaerat amet, optio velit asperiores porro accusamus
            recusandae deleniti eaque pariatur, impedit, reiciendis earum modi
            adipisci voluptatibus? Labore tempora aspernatur, cum possimus
            dolorum deleniti nam, quidem placeat ab culpa harum mollitia dolore
            modi ea veritatis sunt perspiciatis, deserunt doloribus!
            Accusantium, mollitia quasi fugit animi ex nihil voluptas nemo, iure
            quaerat delectus, excepturi officia molestias porro! Laboriosam,
            tempore.
          </div>
        </div>
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </PageLayout>
  );
}
