import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';
import ClickedListItemDetail from '../ClickedListItemDetail/ClickedListItemDetail';

const ClickedListItem = () => {

    const { id } = useParams();

    const [List, setList] = useState([]);

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`

        fetch(url)

            .then(res => res.json())

            .then(data => setList(data.teams))

    }, [id])

    return (
        <div>
            {
                List.map(list =>
                    <ClickedListItemDetail
                        clickedlistData={list}>
                    </ClickedListItemDetail>)
            }
        </div>
    );
};

export default ClickedListItem;