import practiceImageOne from "../../assets/images/blog/blog-details-company-practice-one.png";
import practiceImageTwo from "../../assets/images/blog/blog-details-company-practice-two.png";
import personOne from "../../assets/images/blog/blog-details-person-one.png";
import personTwo from "../../assets/images/blog/blog-details-person-two.png";
import thumbnail from "../../assets/images/blog/blog-details-thumbnail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faPinterestP,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Quote from "../../components/icons/Quote";
import { Link } from "react-router-dom";

// Single post data
const post = {
  thumbnail,
  title: "Consultants Typically Possess Specialized Knowledge",
  details: [
    "Effective business consulting requires strong analytical skills, strategic thinking, and excellent communication abilities to convey recommendations clearly and gain buy-in from stakeholders. Consultants must also stay updated on industry trends and best practices to deliver relevant.",
    "Ultimately, business consulting aims to help organizations navigate complex challenges, capitalize on opportunities, and achieve sustainable growth in an ever-evolving business landscape.",
  ],
  consultingFirm: {
    subheading: "Priority Partners Consulting",
    descriptions: [
      "Business consultants provide expert advice and guidance to businesses to help them improve their performance, solve problems, and achieve their goals. They may work on various aspects such as strategy, operations, marketing, finance, or organizational structure.",
      "Companies may consider hiring a business consultant when they encounter challenges they are unable to address internally, when they need specialized expertise for a particular project or initiative, or when they want an objective perspective on their business operations.",
    ],
  },
  personOne: {
    name: "Cameron Williamson",
    subheading: "Unlocking The Potential Of Intelligent Machines",
    image: personOne,
    description:
      "Effective business consulting requires strong analytical skills, strategic thinking, and excellent communication abilities to convey recommendations clearly and gain buy-in from stakeholders. Consultants must also stay updated on industry trends and best practices.",
  },
  currentPractice: {
    subheading: "They Analyze A Company's Current Practices",
    description:
      "Consultants often work closely with clients to understand their unique challenges and goals, offering tailored solutions to address specific needs. This may involve conducting market research, implementing new technologies, restructuring processes, or developing training programs for staff.",
    practiceImages: [
      { src: practiceImageOne, alt: "Practice Image One" },
      { src: practiceImageTwo, alt: "Practice Image Two" },
    ],
    lists: [
      "Smart Brain Technologies Intelli Tech Solutions",
      "Revolutionizing the way we live and work",
      "Creating a world driven by artificial intelligence",
      "Harnessing the power of AI for better solutions",
    ],
  },
  personTwo: {
    name: "Cameron Williamson",
    image: personTwo,
    description:
      "Effective business consulting requires strong analytical skills, strategic thinking, and excellent communication abilities to convey recommendations clearly and gain buy-in from stakeholders. Consultants must also stay updated on industry trends and best practices.",
    socialLinks: [
      { icon: faFacebookF, link: "#" },
      { icon: faXTwitter, link: "#" },
      { icon: faInstagram, link: "#" },
    ],
  },
  tags: ["AI Power", "AI Nexus", "AI-Works"],
  socialShare: [
    { icon: faFacebookF, link: "#" },
    { icon: faPinterestP, link: "#" },
    { icon: faLinkedin, link: "#" },
    { icon: faXTwitter, link: "#" },
  ],
  comments: [
    {
      author: "Alexs Lainto",
      date: "23 December",
      content:
        "Ished fact that a reader will be distrol acted bioii the. Ished fact that a reader will be distrolr acted laoreet Aliquam reader will be distrol acted.",
    },
  ],
};

const SingleBlog = () => {
  return (
    <div className="space-y-[50px]">
      {/* Image and Title */}
      <img className="w-full" src={post.thumbnail} alt="Blog Thumbnail" />
      <h1 className="leading-none">{post.title}</h1>
      {/* Details Texts */}
      <div className="space-y-6 text-[#7F6666] dark:text-[#FFFFFF]">
        {post.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
      <div className="space-y-6">
        <h3>{post.consultingFirm.subheading}</h3>
        {post.consultingFirm.descriptions.map((description, index) => (
          <p key={index} className="text-[#7F6666] dark:text-[#FFFFFF]">
            {description}
          </p>
        ))}
      </div>
      {/* Person one */}
      <div>
        <h3>{post.personOne.subheading}</h3>
      </div>
      <div className="space-y-6 border dark:bg-[#1C2329] dark:border-none rounded-2xl p-4 md:p-10">
        <div className="flex justify-between items-start">
          <div className="space-y-5">
            <img src={post.personOne.image} alt={"Person one"} />
            <h4>{post.personOne.name}</h4>
          </div>
          <Quote />
        </div>
        <p className="text-[#7F6666] dark:text-[#FFFFFF]">
          {post.personOne.description}
        </p>
      </div>
      {/* Company Currenct Practice  */}
      <div className="space-y-6">
        <h3>{post.currentPractice.subheading}</h3>
        <p className="text-[#7F6666] dark:text-[#FFFFFF]">
          {post.currentPractice.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {post.currentPractice.practiceImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
        <ul className="space-y-4">
          {post.currentPractice.lists.map((list, index) => (
            <li key={index} className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[14px] h-[14px] rounded-full p-1 bg-[#10171E] text-[#FFFFFF] dark:bg-[#FFFFFF] dark:text-[#10171E]"
              />
              <span className="text-[12px] md:text-sm">{list}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Person Two */}
      <div className="space-y-2 md:space-y-4 border rounded-2xl p-5 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8">
          <img src={post.personTwo.image} alt="Person two" />
          <div className="space-y-2">
            <h4>{post.personTwo.name}</h4>
            <p className="text-[#7F6666] dark:text-[#FFFFFF]">
              {post.personTwo.description}
            </p>
            <div className="flex gap-4">
              {post.personTwo.socialLinks.map((social, index) => (
                <Link key={index} to={social.link}>
                  <FontAwesomeIcon icon={social.icon} className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Tag and Social Media */}
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row lg:flex-col xl:flex-row justify-between md:items-center lg:items-start xl:items-center border p-3 md:p-8 rounded-sm lg:gap-8 xl:gap-0">
        {/* Tag */}
        <div>
          <p className="flex items-center gap-2 md:gap-4">
            <span>TAG:</span>{" "}
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] md:text-xs px-[10px] py-[6px] bg-[#E7E7EB] dark:bg-[#1C2329] rounded"
              >
                {tag}
              </span>
            ))}
          </p>
        </div>
        {/* Social */}
        <div className="flex items-center gap-2 md:gap-4">
          <h5 className="text-[13px] lg:text-[18px] font-bold">SHARE ON</h5>
          {post.socialShare.map((social, index) => (
            <Link key={index} to={social.link}>
              <FontAwesomeIcon
                icon={social.icon}
                className="w-[12px] h-[12px] p-2 border border-[#b8b8bd] dark:border-opacity-30 dark:text-homeOnePrimary rounded-full"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* User Comment */}
      <div className="space-y-4">
        {post.comments.map((comment, index) => (
          <>
            <div key={index}>
              <h4>{comment.author}</h4>
              <p className="text-base">{comment.date}</p>
            </div>
            <p className="text-[#7F6666] dark:text-[#FFFFFF]">
              {comment.content}
            </p>
            <button className="py-2 px-5 rounded-full text-sm font-semibold border border-homeOnePrimary">
              Replay
            </button>
          </>
        ))}
      </div>
      {/* Leave Comment */}
      <div>
        <div className="space-y-5">
          {" "}
          <h1 className="leading-none">Leave A Comment</h1>
          <div className="grid grid-cols-2 gap-5">
            <input
              className="w-full py-4 px-5 border focus:outline-none rounded-3xl text-sm text-[#7F6666] dark:text-[#FFFFFF] dark:bg-[#1C2329] dark:border-none dark:placeholder-white"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <input
              className="w-full py-4 px-5 border focus:outline-none rounded-3xl text-sm text-[#7F6666] dark:text-[#FFFFFF] dark:bg-[#1C2329] dark:border-none dark:placeholder-white"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <input
              className="w-full py-4 px-5 border focus:outline-none rounded-3xl text-sm text-[#7F6666] dark:text-[#FFFFFF] dark:bg-[#1C2329] dark:border-none dark:placeholder-white"
              type="number"
              name="phone"
              id="phone"
              placeholder="Your Phone"
            />
            <input
              className="w-full py-4 px-5 border focus:outline-none rounded-3xl text-sm text-[#7F6666] dark:text-[#FFFFFF] dark:bg-[#1C2329] dark:border-none dark:placeholder-white"
              type="url"
              name="website"
              id="website"
              placeholder="Your Website"
            />
          </div>
          <textarea
            className="w-full py-4 px-5 border focus:outline-none rounded-3xl text-sm text-[#7F6666] dark:text-[#FFFFFF] dark:bg-[#1C2329] dark:border-none dark:placeholder-white"
            name="comment"
            id="comment"
            rows="6"
            placeholder="Comment"
          ></textarea>
        </div>
        <button className="w-4/6 flex items-center justify-center gap-2 bg-homeOnePrimary mt-[30px] py-4 text-sm text-[#10171E] font-bold rounded-full dark:placeholder-white">
          <span>Submit</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
