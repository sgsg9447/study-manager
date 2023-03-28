interface Props {
  size?: Size;
  profileImg?: string;
  name?: string;
}

export default function ProfileIcon({ size, profileImg, name }: Props) {
  return size === "xs" ? (
    <img src={profileImg} alt={name} className="profile-xs-icon"></img>
  ) : size === "sm" ? (
    <img src={profileImg} alt={name} className="profile-sm-icon"></img>
  ) : (
    <img src={profileImg} alt={name} className="profile-lg-icon"></img>
  );
}
