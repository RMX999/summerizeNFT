export default function ProfileHero() {
  return (
    <div className="relative w-11/12 bg-white bg-opacity-70 mx-auto rounded-[22px] p-2 mt-[25px] mb-[135px]"> 
        <img
        src="./Profile/ProfileBackGround.png"
        alt="profBG"
        className="mx-auto rounded-[22px]"
      />    
      <div className="absolute w-[12.5rem] h-[12.5rem] bg-white rounded-full bg-opacity-70 left-[43%] bottom-[-6rem]">
        <img
          src="./Profile/ProfilePicture.png"
          alt="profPic"
          className="mx-auto mt-[10px]"
        />
      </div>
      <div className="absolute bottom-[-15%] right-0 ">
          <div className="inline-block bg-white rounded-[15px] bg-opacity-70">
        <img
          src="./Profile/wallet.png"
          alt="profBG"
          className="inline my-2 mx-2 px-2"
        />
        <p className="inline pr-2">0xf56D...AS34</p>
        </div>
        <div className="inline-block bg-white rounded-[15px] bg-opacity-70 mx-4">
        <img
          src="./Profile/share.png"
          alt="profBG"
          className="inline my-2 mx-2"
        />
        </div>
        <div className="inline-block bg-white rounded-[15px] bg-opacity-70">
        <img
          src="./Profile/settings.png"
          alt="profBG"
          className="inline my-2 mx-2"
        />
        </div>
      </div>
    </div>
  );
}


// 