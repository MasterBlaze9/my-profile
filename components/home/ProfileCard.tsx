import Image from "next/image";
import profileImage from "@/public/images/profile-image.png";

export default function ProfileCard() {
  return (
    <div className="flex justify-center align-middle text-center">
      <Image
        src={profileImage}
        width={300}
        height={300}
        alt="profile-pic"
        className="rounded-full my-10"
      />
    </div>
  );
}
