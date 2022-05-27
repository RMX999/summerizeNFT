import ProfileCollection from "../ProfileCollection/ProfileCollection";
import ProfileFavorite from '../ProfileFavorite/ProfileFavorite';
import ProfileActivity from '../ProfileActivity/ProfileActivity';

export default function ProfileCarousel() {
  return (
    <div className="mb-[150px]">
      <div className="flex justify-around bg-white bg-opacity-70  rounded-xl mx-auto w-4/6 py-2 gap-2">
        <a href="#item1" className=" ">
        <img
                src="../Profile/Owned.png"
                alt="title"
                className="inline pl-2"
              />
              <p className="inline pl-2 font-Poppins font-[600] text-[16px]">
                Profile
              </p>
        </a>
        <a href="#item2" className="">
        <img
                src="../Profile/Fav.png"
                alt="title"
                className="inline pl-2"
              />
              <p className="inline pl-2 font-Poppins font-[600] text-[16px]">
                Favourites
              </p>
        </a>
        <a href="#item3" className="">
        <img
                src="../Profile/Activity.png"
                alt="title"
                className="inline pl-2"
              />
              <p className="inline pl-2 font-Poppins font-[600] text-[16px]">
                Activity
              </p>
        </a>
      </div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <ProfileCollection />
        </div>
        <div id="item2" className="carousel-item w-full">
          <ProfileFavorite />
        </div>
        <div id="item3" className="carousel-item w-full">
          <ProfileActivity />
        </div>
      </div>
    </div>
  );
}
