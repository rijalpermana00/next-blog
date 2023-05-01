import AppConfig from "../../utils/AppConfig";
import Image from "next/image";
import Link from "next/link";

interface SiteConfig {
  title: string;
  base_url: string;
  favicon: string;
  logo: string;
  logo_width: number;
  logo_height: number;
  logo_text: string;
}

const Logo = ({ src }: { src?: string }) => {
  // destructuring items from config object
  const siteConfig: SiteConfig = AppConfig;

  return (
    <Link href="/" className="navbar-brand block">
      {src || siteConfig.logo ? (
        <Image
          width={siteConfig.logo_width * 2}
          height={siteConfig.logo_height * 2}
          src={src ? src : siteConfig.logo}
          alt={siteConfig.title}
          priority
          style={{
            height: siteConfig.logo_height + "px",
            width: siteConfig.logo_width + "px",
          }}
        />
      ) : siteConfig.logo_text ? (
        siteConfig.logo_text
      ) : (
        siteConfig.title
      )}
    </Link>
  );
};

export default Logo;
