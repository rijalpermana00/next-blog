import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

type props = {
    url: string;
}

export default function ShareButtonGroup({ url }:props) {
  const shareText = "Check out this awesome post!";

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterShareUrl = `https://twitter.com/share?url=${url}&text=${shareText}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${url}`;

  return (
    <div className="bottom-4 right-4">
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 mr-2">
        <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </button>
      <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-3 mr-2">
        <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </button>
      <button className="bg-blue-300 hover:bg-blue-400 text-white rounded-full p-3">
        <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </button>
    </div>
  );
}
