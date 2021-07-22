import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { spoon_left, spoon_right } from "../asset/icon";

import { Grid } from "../elements";
import { getEventList } from "../shared/api.js";
import EventPost from "../components/EventPost.js";
import Loader from "../components/Loader";

const Event = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        async function getList() {
            const { data } = await getEventList();
            setList(data);
        }
        return getList();
    }, []);

    return (
        <>
            {list.length > 1 ? (
                <>
                    <Title>
                        <img
                            src={require("../asset/title/h_title.png").default}
                            alt="event"
                        />
                    </Title>
                    <Grid width="1200px" margin="0 auto">
                        <EventList>
                            {list.length > 0
                                ? list.map((item, idx) => (
                                      <EventPost key={idx} {...item} />
                                  ))
                                : ""}
                        </EventList>
                    </Grid>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

const Title = styled.div`
    width: max-content;
    margin: auto;
    margin-top: 105px;
    margin-bottom: 100px;
    position: relative;
    ::before {
        content: "";
        display: block;
        position: absolute;
        left: -50px;
        top: 6px;
        width: 36px;
        height: 12px;
        background: url(${spoon_left}) no-repeat;
    }
    ::after {
        content: "";
        display: block;
        position: absolute;
        top: 6px;
        right: -50px;
        width: 36px;
        height: 12px;
        background: url(${spoon_right}) no-repeat;
    }
`;

const EventList = styled.div`
    border-top: 2px solid #ff7c98;
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    height: auto;
`;

export default Event;
