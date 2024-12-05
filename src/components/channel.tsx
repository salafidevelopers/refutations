import Image from "next/image";
import Link from "next/link";

const Channel = ({
  logo,
  channelName,
  channelDesc,
  channelLinkName,
  channelLink,
  socialMediaLink1,
  socialMediaLink2,
  socialMediaLink3,
  socialMediaLogo1,
  socialMediaLogo2,
  socialMediaLogo3,
}: {
  logo: string;
  channelName: string;
  channelDesc: string;
  channelLinkName: string;
  channelLink: string;
  socialMediaLink1: string;
  socialMediaLink2: string;
  socialMediaLink3: string;
  socialMediaLogo1: string;
  socialMediaLogo2: string;
  socialMediaLogo3: string;
}) => {
  return (
    <div className="flex gap-6">
      <div className="relative min-w-20 h-20">
        <Image src={logo} alt="logo" fill className="" />
      </div>
      <div>
        <div className="flex flex-col">
          <p className="text-xl font-semibold">{channelName}</p>
          <p className="text-xs font-normal mb-1">
            <span className="text-xs font-light ">{channelDesc}</span>
            <br />
            <Link href={channelLink}>{channelLinkName}</Link>
          </p>
          <div className="flex gap-1">
            <div className="relative w-5 h-5">
              <Link href={socialMediaLink1}>
                <Image
                  src={socialMediaLogo1}
                  alt="logo"
                  fill
                  className="bg-[#229CF4] p-1"
                />
              </Link>
            </div>
            <div className="relative w-5 h-5">
              <Link href={socialMediaLink2}>
                <Image
                  src={socialMediaLogo2}
                  alt="logo"
                  fill
                  className="border border-[#C4C4C4] rounded-s rounded-e p-1"
                />
              </Link>
            </div>
            <div className="relative w-5 h-5">
              <Link href={socialMediaLink3}>
                <Image
                  src={socialMediaLogo3}
                  alt="logo"
                  fill
                  className="border border-[#C4C4C4] rounded-s rounded-e p-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
