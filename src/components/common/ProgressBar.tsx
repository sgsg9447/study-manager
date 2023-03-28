interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="progressbar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
