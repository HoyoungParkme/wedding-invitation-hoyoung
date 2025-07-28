import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const executeScript = () => {
        const scriptTag = document.createElement("script");
        const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
          "timestamp": "1753709734112",
          "key": "62buiowfvk2",
          "mapWidth": "640",
          "mapHeight": "360"
        }).render();`);
        scriptTag.appendChild(inlineScript);
        document.body.appendChild(scriptTag);
      };

      const InstallScript = () => {
        const c = window.location.protocol === "https:" ? "https:" : "http:";
        const a = "16137cec";

        if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
          executeScript();
          return;
        }

        window.daum = window.daum || {};
        window.daum.roughmap = {
          cdn: a,
          URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
          url_protocal: c,
        };

        const b = `${c}//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/${a}/roughmapLander.js`;
        const scriptTag = document.createElement("script");
        scriptTag.src = b;
        document.body.append(scriptTag);
        scriptTag.onload = () => {
          executeScript();
        };
      };

      InstallScript();
    }
  }, []); // 빈 배열로 한 번만 실행

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1753709734112"
        className="root_daum_roughmap root_daum_roughmap_landing"
      />
      <Content>
        서울특별시 영등포구 문래동3가 55-20
        <br />
        영시티 2층 규수당 문래점
        <br />
        <br />
        <Title>버스 이용 시</Title>
        <br />
        <br />
        간선: 603, 662, 670
        <br />
        지선: 5616, 6516
        <br />
        <br />
        <Title>지하철 이용 시</Title>
        <br />
        <br />
        2호선 문래역 3번 출구 (도보 약 5분)
      </Content>
    </Wrapper>
  );
};

export default Location;
