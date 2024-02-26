import React, {useEffect} from 'react';
import axios from "axios";
import {urls} from "./client/urls";
import Button from '@mui/joy/Button';


export function TestPage(){

    useEffect(() => {
        axios.post(urls.graphql, {
            query: "{  Words{ id }}",
            "variables": null
        })
    }, [])

    return (
        <div className="page">
            <div className="header">
                test
            </div>
            <div className="body">
                <Button variant="solid">Hello world</Button>
            </div>
        </div>
    )
}