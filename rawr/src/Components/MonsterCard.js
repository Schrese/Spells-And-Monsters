import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

//components
// import MonsterActions from './MonsterActions';

function MonsterCard(props) {
    // console.log(props.something);
    const monster = props.monsters.find(
        something => `${something.slug}` === props.match.params.slug
    );
    if(!props.monsters.length || !monster) {
        return <h2>...Loading Monster Data</h2>
    }

    console.log(monster)
    // console.log('individual monster', monster);

    return(
        <MonsterContainer key = {monster.index}>
            {/* <MonsterActions /> */}
            <h2>Name: {monster.name}</h2>
            {/* figure out how to get actions in here */}
            <p>Alignment: {monster.alignment}</p>
            <p>Armor Class: {monster.armor_class}</p>
            <p>Armor Description: {monster.armor_desc}</p>
            <p>Challenge Rating: {monster.challenge_rating}</p>
            <p>Charisma: {monster.charisma}</p>
            <p>Charisma Save: {monster.charisma_save}</p>
            <p>Condition Immunities: {monster.condition_immunities}</p>
            <p>Constitution: {monster.constitution}</p>
            <p>Constitution Save: {monster.constitution_save}</p>
            <p>Damage Immunities: {monster.damage_immunities}</p>
            <p>Damage Resistances: {monster.damage_resistances}</p>
            <p>Damage Vulnerabilities: {monster.damage_vulnerabilities}</p>
            <p>Dexterity: {monster.dexterity}</p>
            <p>Dexterity Save: {monster.dexterity_save}</p>
            <p>License URL: {monster.document__license_url}</p>
            <p>Slug: {monster.document__slug}</p>
            <p>Origin Book: {monster.document__title}</p>
            <p>Group: {monster.group}</p>
            <p>Hit Dice: {monster.hit_dice}</p>
            <p>Hit Points: {monster.hit_points}</p>
            <p>Monster Image: {monster.img_main}</p>
            <p>Intelligence: {monster.intelligence}</p>
            <p>Intelligence Save: {monster.intelligence_save}</p>
            <p>Languages: {monster.languages}</p>
            {/* <p>{monster.legendary_actions}</p> */}
            <p>Legendary Description: {monster.legendary_desc}</p>
            <p>Perception: {monster.perception}</p>
            <p>Reactions: {monster.reactions}</p>
            <p>Senses: {monster.senses}</p>
            <p>Size: {monster.size}</p>
            {/* <p>{monster.skills}</p> */}
            <p>Slug: {monster.slug}</p>
            {/* <p>{monster.special_abilities}</p> */}
            {/* <p>{monster.speed}</p> */}
            {/* <p>{monster.spell_list}</p> */}
            <p>Strength: {monster.strength}</p>
            <p>Strength Save: {monster.strength_save}</p>
            <p>Subtype: {monster.subtype}</p>
            <p>Type: {monster.type}</p>
            <p>Wisdom: {monster.wisdom}</p>
            <p>Wisdom Save: {monster.wisdom_save}</p>
        </MonsterContainer>
    )
}

export default MonsterCard;

const MonsterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: grey;
    padding-top: 20%;

    h2{
        color: red;
        font-size: 4rem;
    }
`