import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="py-16">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
        <Image
                  src="/images/em.jpg"
                  alt="logo"
                  width={300}
                  height={300}
                  className="rounded"
                />          </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-white font-bold md:text-4xl">About Us</h2>
          <p className="mt-6 text-white">VirtuTech is an innovative educational platform ​that uses interactive 3D models, virtual reality (VR), ​and augmented reality (AR) to create immersive ​learning experiences. It allows educators to ​develop engaging lessons in virtual environments, ​making complex subjects more accessible and ​enjoyable for students.</p>
        </div>
      </div>
  </div>
</div>
  );
};

export default Blog;
