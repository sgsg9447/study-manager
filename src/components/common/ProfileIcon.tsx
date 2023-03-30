interface Props {
  size?: Size;
  profileImg?: string;
  name?: string;
}

export default function ProfileIcon({ size, profileImg, name }: Props) {
  return (
    <img src={profileImg} alt={name} className={`profile-${name}-icon`}></img>
  );
}
