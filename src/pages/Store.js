import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imagesrc from "../asset/icon/icon_map_marker_.png";
import Loader from "../components/Loader";
import { getStoreInfo } from "../shared/api";

const Store = () => {
    const { kakao } = window;
    const [is_loading, setIsLoaindg] = useState(false);
    useEffect(() => {
        //카카오 지도생성
        async function getStore() {
            const { data } = await getStoreInfo();
            if (!data) return;
            setIsLoaindg(true);
            const container = document.getElementById("map");

            const options = {
                center: new kakao.maps.LatLng(37.4970132, 127.028102), //초기 좌표
                level: 6,
            };

            const map = new kakao.maps.Map(container, options);

            //마커이미지 설정
            const imageSrc = imagesrc, // 마커이미지 주소
                imageSize = new kakao.maps.Size(44, 65), // 마커이미지의 크기
                imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            const markerImage = new kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
                imageOption
            );

            data.forEach(el => {
                //인포윈도우에 들어갈 텍스트
                const iwContent = `<article class="store_info">
                <h3 class="name">${el.name}</h3>
                <table class="table info">
                    <tbody>
                        <tr>
                            <th>· 주소</th>
                            <td>${el.address}</td>
                        </tr>
                        <tr>
                            <th>· 연락처</th>
                            <td>${el.tel}</td>
                        </tr>
                        <tr>
                            <th>· 운영시간</th>
                            <td>${el.operationtime}</td>
                        </tr>
                    </tbody>
                </table>
            </article>`;

                //마커생성
                const marker = new kakao.maps.Marker({
                    map: map, //마커가 표시 될 지도
                    image: markerImage, // 마커이미지 설정
                    position: new kakao.maps.LatLng(el.pointX, el.pointY), //마커가 표시 될 위치
                });
                //인포윈도우
                const overlay = new kakao.maps.CustomOverlay({
                    position: marker.getPosition(),
                    map: map,
                    content: iwContent,
                    removable: true,
                    clickable: true,
                });
                overlay.setMap(null);
                //마커 클릭시 인포윈도우 생성
                kakao.maps.event.addListener(marker, "click", function () {
                    overlay.setMap(map);
                });

                kakao.maps.event.addListener(map, "click", function () {
                    overlay.setMap(null);
                });
            });
        }
        getStore();
    }, []);
    return (
        <Container>
            {is_loading ? (
                <div id="map" style={{ width: "100%", height: "100vh" }}></div>
            ) : (
                <Loader />
            )}
        </Container>
    );
};

const Container = styled.div`
    .store_info {
        padding: 15px;
        height: auto;
        background: #fff;
        border: 2px solid #ededed;
        border-radius: 10px;
        .name {
            padding: 10px 0 15px;
            font-size: 25px;
            text-align: center;
            color: #212121;
        }
        .table {
            width: 100%;
            border-spacing: 10px;
        }
    }
`;

export default Store;
