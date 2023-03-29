import Text from "../../common/Text";

type NameType = "fine" | "todo" | "done";

interface Props {
  titleName: NameType;
  children?: React.ReactNode;
}

export default function Title({ titleName, children }: Props) {
  return (
    <div className="title">
      {titleName === "fine" ? (
        <div className="red-dot"></div>
      ) : titleName === "todo" ? (
        <div className="blue-dot"></div>
      ) : (
        <div className="primary-dot"></div>
      )}

      {titleName === "fine" ? (
        <>
          <Text type="title" style={{ paddingLeft: "10px" }}>
            {children}
          </Text>
        </>
      ) : titleName === "todo" ? (
        <>
          <Text type="title" style={{ paddingLeft: "10px" }}>
            TODO
          </Text>
          <Text type="title" style={{ paddingLeft: "10px" }}>
            ({children})
          </Text>
        </>
      ) : (
        <>
          <Text type="title" style={{ paddingLeft: "10px" }} color="white">
            DONE
          </Text>
          <Text type="title" style={{ paddingLeft: "10px" }} color="primary">
            {children}
          </Text>
        </>
      )}
    </div>
  );
}
