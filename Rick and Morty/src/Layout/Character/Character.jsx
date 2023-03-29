import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { CardChar } from '../../Components/CardChar';
import {data} from "../../Data/Data"


export const Character = () => {
    console.log(data)
    return (
        <>
        {data.map(character => <CardChar key={character.id} propCharacter={character}/>)}
        </>
    );
}



