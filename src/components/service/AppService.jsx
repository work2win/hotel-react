import axios from 'axios';
import React from 'react';

const ROOM_BASE_REST_URL = "http://localhost:9091/totalrooms";

class AppService extends React.Component{

    getRoom(){
        return axios.get(ROOM_BASE_REST_URL);       
    }

}

export default AppService;