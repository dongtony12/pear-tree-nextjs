import { useEffect, useState } from "react";

import Image from "next/image";

// import { useSplashShow } from "./hooks/useSplashShow";
import {
  SplashContainer,
  SplashImageContainer,
  TitleImageContainer,
} from "./styles";

export function Splash() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [isShowSplashAnimation, setIsShowSplashAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashAnimation(true);
    }, 2000);
    setTimeout(() => {
      setIsShowSplash(false);
      setIsShowSplashAnimation(false);
    }, 2300);
  }, []);
  // const { isShowSplash, isShowSplashAnimation } = useSplashShow();

  if (!isShowSplash) return null;
  return (
    <SplashContainer animation={isShowSplashAnimation ? "fadeOut" : "none"}>
      <TitleImageContainer>
        <Image
          alt="배달 나눠 무라"
          height={20}
          src="/images/sub-title.png"
          width={139}
        />
        <Image alt="배나무" height={44} src="/images/title.png" width={143} />
      </TitleImageContainer>
      <SplashImageContainer>
        <Image alt="메인 화면 로딩" layout="fill" src="/images/splash.png" />
      </SplashImageContainer>
    </SplashContainer>
  );
}