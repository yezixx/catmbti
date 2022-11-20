import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "https://catmbti1113.netlify.app/";
  const resultUrl = window.location.href;

  console.log("ddd", resultUrl, url);

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("6c14c5305680180ec982d9a613618af8");
    console.log(Kakao.isInitialized());
  }, []);
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "예비집사 판별기 결과",
      description:
        "예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 코숏입니다.",
      imageUrl:
        "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    buttons: [
      {
        title: "나도 테스트 하러가기",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
  return (
    <Button style={{ fontFamily: "HBIOS-SYS", width: 170, marginLeft: "20px" }}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
