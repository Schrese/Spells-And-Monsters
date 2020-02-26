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

    //creates modifiers for base stats
    const modifier = (num) =>{
        let newMod =  (num - 10)/2;
        let rounded = Math.floor(newMod)
        if(rounded >= 0) {
            return `+${rounded}`
        } else {
            return rounded
        }
    }
    // console.log(modifier(15))
    // console.log(monster)
    // console.log('individual monster', monster);

    //creates xp amount for each challenge rating
    const xpAmt = (cr) => {
        if (cr = 0) {
            return "10"
        } else if (cr = 1/8) {
            return "25"
        } else if (cr = 1/4) {
            return "50"
        } else if (cr = 1/2) {
            return "100"
        } else if (cr = 1) {
            return "200"
        } else if (cr = 2) {
            return "450"
        } else if (cr = 3) {
            return "700"
        } else if (cr = 4) {
            return "1,100"
        } else if (cr = 5) {
            return "1,800"
        } else if (cr = 6) {
            return "2,300"
        } else if (cr = 7) {
            return "2,900"
        } else if (cr = 8) {
            return "3,900"
        } else if (cr = 9) {
            return "5,000"
        } else if (cr = 10) {
            return "5,900"
        } else if (cr = 11) {
            return "7,200"
        } else if (cr = 12) {
            return "8,400"
        } else if (cr = 13) {
            return "10,000"
        } else if (cr = 14) {
            return "11,500"
        } else if (cr = 15) {
            return "13,000"
        } else if (cr = 16) {
            return "15,000"
        } else if (cr = 17) {
            return "18,000"
        } else if (cr = 18) {
            return "20,000"
        } else if (cr = 19) {
            return "22,000"
        } else if (cr = 20) {
            return "25,000"
        } else if (cr = 21) {
            return "33,000"
        } else if (cr = 22) {
            return "41,000"
        } else if (cr = 23) {
            return "50,000"
        } else if (cr = 24) {
            return "62,000"
        } else if (cr = 25) {
            return "75,000"
        } else if (cr = 26) {
            return "90,000"
        } else if (cr = 27) {
            return "105,000"
        } else if (cr = 28) {
            return "120,000"
        } else if (cr = 29) {
            return "135,000"
        } else if (cr = 30) {
            return "155,000"
        } else {
            return "unknown XP amount"
        }
    } 

    return(
        <MonsterContainer key = {monster.index}>
            {/* <MonsterActions /> */}
            <h2>Name: {monster.name}</h2>
            {/* {monster.img_main ? <img src = {monster.img_main} alt = {`Image of ${monster.name}`} /> : null} */}
            
            {/* figure out how to get actions in here */}
            <div className = 'base-info'>

            </div>
            {monster.subtype ? <p>{monster.size} {monster.type}({monster.subtype}), {monster.alignment}</p> : <p>{monster.size} {monster.type}, {monster.alignment}</p>}

            {monster.armor_class ? <p>Armor Class: {monster.armor_class} ({monster.armor_desc})</p> : <p>Armor Class: {monster.armor_class}</p>}
            <p>Hit Points: {monster.hit_points} ({monster.hit_dice})</p>
            
            <Speed>{monster.speed.walk ? <p>Speed: {monster.speed.walk}ft.,</p> : null} {monster.speed.swim ? <p>swim {monster.speed.swim}ft.,</p> : null} {monster.speed.climb ? <p>climb {monster.speed.climb}ft.,</p> : null } {monster.speed.fly ? <p>fly {monster.speed.fly}ft.</p> : null}</Speed>

            //continue working from here next time
            <Stats>
                <Stat>
                    <p>STR</p>
                    <p>{monster.strength}({modifier(monster.strength)})</p>
                </Stat>
                <Stat>
                    <p>DEX</p>
                    <p>{monster.dexterity}({modifier(monster.dexterity)})</p>

                </Stat>
                <Stat>
                    <p>CON</p>
                    <p>{monster.constitution}({modifier(monster.constitution)})</p>

                </Stat>
                <Stat>
                    <p>INT</p>
                    <p>{monster.intelligence}({modifier(monster.intelligence)})</p>
                </Stat>
                <Stat>
                    <p>WIS</p>
                    <p>{monster.wisdom}({modifier(monster.wisdom)})</p>
                </Stat>
                <Stat>
                    <p>CHA</p>
                    <p>{monster.charisma}({modifier(monster.charisma)})</p>
                </Stat>
            </Stats>
          
            <SavingThrows>
                <p>Saving Throws</p>
                <div>
                    {monster.strength_save ? <p>STR +{monster.strength_save},</p> : null}
                    {monster.dexterity_save ? <p>DEX +{monster.dexterity_save},</p> : null}
                    {monster.constitution_save ? <p>CON +{monster.constitution_save},</p> : null}
                    {monster.intelligence_save ? <p>INT +{monster.intelligence_save},</p> : null}
                    {monster.wisdom_save ? <p>WIS +{monster.wisdom_save},</p> : null}
                    {monster.charisma_save ? <p>CHA +{monster.charisma_save}</p> : null}

                </div>
            </SavingThrows>
            <div>
                <h3>Skills</h3>
                {monster.skills.acrobatics ? <p>History +{monster.skills.acrobatics}</p> : null}
                {monster.skills.animal_handling ? <p>History +{monster.skills.animal_handling}</p> : null}
                {monster.skills.arcana ? <p>History +{monster.skills.arcana}</p> : null}
                {monster.skills.athletics ? <p>History +{monster.skills.athletics}</p> : null}
                {monster.skills.deception ? <p>History +{monster.skills.deception}</p> : null}
                {monster.skills.history ? <p>History +{monster.skills.history}</p> : null}
                {monster.skills.insight ? <p>History +{monster.skills.insight}</p> : null}
                {monster.skills.intimidation ? <p>History +{monster.skills.intimidation}</p> : null}
                {monster.skills.investigation ? <p>History +{monster.skills.investigation}</p> : null}
                {monster.skills.medicine ? <p>History +{monster.skills.medicine}</p> : null}
                {monster.skills.nature ? <p>History +{monster.skills.nature}</p> : null}
                {monster.skills.perception ? <p>History +{monster.skills.perception}</p> : null}
                {monster.skills.performance ? <p>History +{monster.skills.performance}</p> : null}
                {monster.skills.persuasion ? <p>History +{monster.skills.persuasion}</p> : null}
                {monster.skills.religion ? <p>History +{monster.skills.religion}</p> : null}
                {monster.skills.sleight_of_hand ? <p>History +{monster.skills.sleight_of_hand}</p> : null}
                {monster.skills.stealth ? <p>History +{monster.skills.stealth}</p> : null}
                {monster.skills.survival ? <p>History +{monster.skills.survival}</p> : null}
                
            </div>
            <div>
                <p>Senses: {monster.senses}</p>
            </div>
            <div>
                <p>Languages: {monster.languages}</p>
            </div>
            <div>
                <p>Challenge: {monster.challenge_rating}({xpAmt(monster.challenge_rating)}xp)</p>
            </div>
            {monster.special_abilities.map(special => (
                <div key = {special.name}>
                    <p>{special.name}</p>
                    <p>{special.desc}</p>
                </div>
            ))}            

            











            {/* base stats, just to get them on the page, above is actual format */}
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
            <p>Slug: {monster.document__slug}</p>
            <p>Origin Book: {monster.document__title}</p>
            <p>Group: {monster.group}</p>
            <p>Hit Dice: {monster.hit_dice}</p>
            <p>Hit Points: {monster.hit_points}</p>
            <p>Intelligence: {monster.intelligence}</p>
            <p>Intelligence Save: {monster.intelligence_save}</p>
            <p>Languages: {monster.languages}</p>
            {monster.legendary_actions ? (monster.legendary_actions.map(l => (
                <div key = {l.name}>
                    <p>{l.name}:{l.desc}</p>
                </div>
            ))) : null}
            <p>Legendary Description: {monster.legendary_desc}</p>
            <p>Perception: {monster.perception}</p>
            {/* <p>Reactions: {monster.reactions}</p> */}
            {monster.reactions ? (monster.reactions.map(r => (
               <div key = {r.name}>
                   <p>Reaction: {r.name}</p>
                   <p>Description: {r.desc}</p>
               </div>
            ))) : null}
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

const Speed = styled.div`
    display: flex;
    justify-content: center;
    p{
        padding: 0.2%;
    }
`

const Stats = styled.div`
    display: flex;
    justify-content: center;
`

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    width: 5%;
    line-height: 0.2rem;
`

const SavingThrows = styled.div`
    display: flex;
    justify-content: center;

    div {
        display: flex;

        
    }
`