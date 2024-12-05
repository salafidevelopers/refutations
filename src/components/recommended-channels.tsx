import channels from "../data/channels.json";
import Channel from "./channel";

const RecommendedChannels = () => {
  return (
    <div>
      <p className="text-[#292C59] mb-10 text-xl font-semibold">
        <span className="bg-[#292C59] text-white py-1 px-2">Recommended</span>{" "}
        Channels
      </p>
      {/* Recommended Channels start */}
      <section className="flex flex-col gap-8 mb-16">
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            logo={channel.logo}
            channelName={channel.channelName}
            channelDesc={channel.channelDesc}
            channelLinkName={channel.channelLinkName}
            channelLink={channel.channelLink}
            socialMediaLink1={channel.socialMediaLink1}
            socialMediaLink2={channel.socialMediaLink2}
            socialMediaLink3={channel.socialMediaLink3}
            socialMediaLogo1={channel.socialMediaLogo1}
            socialMediaLogo2={channel.socialMediaLogo2}
            socialMediaLogo3={channel.socialMediaLogo3}
          />
        ))}
      </section>
      {/* Recommended Channels end */}
    </div>
  );
};

export default RecommendedChannels;
