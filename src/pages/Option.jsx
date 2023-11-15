import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { saveData }  from "../assets/Utility";


export default function Options() {


    return (


        <div>
            <h1>Options</h1>

            {saveData.name && <h2> {saveData.name}</h2>}
            {saveData.autoComplete && <h2> Autocomplte On</h2>}
            {saveData.darktheme && <h2> datktheme On</h2>}
            {saveData.duplicates && <h2> duplicates On</h2>}
            {saveData.saveOld && <h2> Save Old On </h2>}
        </div>

    )
}
