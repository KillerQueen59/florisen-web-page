import Image from "next/image";

export const SocialMedia = () => {
  return (
    <div>
      <div className="container flex flex-col mx-auto py-8 justify-items-center ">
        <div className="flex mx-auto my-4">
          <Image src="/twitter.svg" alt="twitter" width={50} height={50} />
          <div className="text-2xl my-auto mx-4">Twitter</div>
        </div>
        <div className="w-1/2 mx-auto relative">
          <iframe
            src="https://syndication.twitter.com/srv/timeline-profile/screen-name/S_FloraJKT48?creatorScreenName=officialJKT48&amp;dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=true&amp;hideHeader=true&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=800px&amp;origin=https%3A%2F%2Fjkt48.com%2Fmember%2Fdetail%2Fid%2F234%3Flang%3Did&amp;sessionId=75f939fdf2d5716d6236a1f250a70fd7121bd469&amp;showHeader=false&amp;showReplies=false&amp;siteScreenName=florisen&amp;transparent=false&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716"
            style={{
              border: "none",
              width: "100%",
              height: "600px",
              zIndex: 2,
            }}
            scrolling="no"
            allow="encrypted-media"
          />
        </div>
      </div>
      <div className="container flex flex-col mx-auto py-8 justify-items-center">
        <div className="flex mx-auto my-4">
          <Image src="/instagram.svg" alt="instagram" width={50} height={50} />
          <div className="text-2xl my-auto mx-4">Instagram</div>
        </div>
        <div className="w-1/2 mx-auto relative">
          <iframe
            src="https://www.instagram.com/p/C3FciXDBcXU/embed/"
            style={{
              border: "none",
              width: "50%",
              height: "700px",
            }}
            className=" mx-auto"
            scrolling="no"
            allow="encrypted-media"
          />
        </div>
      </div>
      <div className="container flex flex-col mx-auto py-8 justify-items-center">
        <div className="flex mx-auto my-4">
          <Image src="/tiktok.svg" alt="tiktok" width={50} height={50} />
          <div className="text-2xl my-auto mx-4">Tiktok</div>
        </div>
        <div className="w-1/2 mx-auto relative">
          <iframe
            src="https://www.tiktok.com/embed/@florajkt48?lang=en-US&referrer=http%3A%2F%2Flocalhost%3A3000%2Fhome"
            style={{
              border: "none",
              width: "100%",
              height: "495px",
            }}
            className=" mx-auto"
            scrolling="no"
            allow="encrypted-media"
          />
        </div>
      </div>
    </div>
  );
};
