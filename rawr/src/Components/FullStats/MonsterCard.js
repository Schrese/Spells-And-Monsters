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
    console.log('individual monster', monster);


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
                <p>Saving Throws: </p>
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
                {monster.skills.acrobatics ? <p>Acrobatics +{monster.skills.acrobatics}</p> : null}
                {monster.skills.animal_handling ? <p>Animal Handling +{monster.skills.animal_handling}</p> : null}
                {monster.skills.arcana ? <p>Arcana +{monster.skills.arcana}</p> : null}
                {monster.skills.athletics ? <p>Athletics +{monster.skills.athletics}</p> : null}
                {monster.skills.deception ? <p>Deception +{monster.skills.deception}</p> : null}
                {monster.skills.history ? <p>History +{monster.skills.history}</p> : null}
                {monster.skills.insight ? <p>Insight +{monster.skills.insight}</p> : null}
                {monster.skills.intimidation ? <p>Intimidation +{monster.skills.intimidation}</p> : null}
                {monster.skills.investigation ? <p>Investigation +{monster.skills.investigation}</p> : null}
                {monster.skills.medicine ? <p>Medicine +{monster.skills.medicine}</p> : null}
                {monster.skills.nature ? <p>Nature +{monster.skills.nature}</p> : null}
                {monster.skills.perception ? <p>Perception +{monster.skills.perception}</p> : null}
                {monster.skills.performance ? <p>Perfornamce +{monster.skills.performance}</p> : null}
                {monster.skills.persuasion ? <p>Persuasion +{monster.skills.persuasion}</p> : null}
                {monster.skills.religion ? <p>Religion +{monster.skills.religion}</p> : null}
                {monster.skills.sleight_of_hand ? <p>Sleight of Hand +{monster.skills.sleight_of_hand}</p> : null}
                {monster.skills.stealth ? <p>Stealth +{monster.skills.stealth}</p> : null}
                {monster.skills.survival ? <p>Survival +{monster.skills.survival}</p> : null}
                
            </div>
            <div>
                <p>Senses: {monster.senses}</p>
            </div>
            <div>
                <p>Languages: {monster.languages}</p>
            </div>
            <div>
                {/* <p>Challenge: {monster.challenge_rating}({xpAmt(monster.challenge_rating)}xp)</p> */}
                <p>Challenge: </p>
                {
                    monster.challenge_rating === '0' ? <p>{monster.challenge_rating} (0-10 XP)</p> : 
                    monster.challenge_rating === '1/8' ? <p>{monster.challenge_rating} (25 XP)</p> :
                    monster.challenge_rating === '1/4' ? <p>{monster.challenge_rating} (50 XP)</p> :
                    monster.challenge_rating === '1/2' ? <p>{monster.challenge_rating} (100 XP)</p> :
                    monster.challenge_rating === '1' ? <p>{monster.challenge_rating} (200 XP)</p> :
                    monster.challenge_rating === '2' ? <p>{monster.challenge_rating} (450 XP)</p> :
                    monster.challenge_rating === '3' ? <p>{monster.challenge_rating} (700 XP)</p> :
                    monster.challenge_rating === '4' ? <p>{monster.challenge_rating} (1,100 XP)</p> :
                    monster.challenge_rating === '5' ? <p>{monster.challenge_rating} (1,800 XP)</p> :
                    monster.challenge_rating === '6' ? <p>{monster.challenge_rating} (2,300 XP)</p> :
                    monster.challenge_rating === '7' ? <p>{monster.challenge_rating} (2,900 XP)</p> :
                    monster.challenge_rating === '8' ? <p>{monster.challenge_rating} (3,900 XP)</p> :
                    monster.challenge_rating === '9' ? <p>{monster.challenge_rating} (5,000 XP)</p> :
                    monster.challenge_rating === '10' ? <p>{monster.challenge_rating} (5,900 XP)</p> :
                    monster.challenge_rating === '11' ? <p>{monster.challenge_rating} (7,200 XP)</p> :
                    monster.challenge_rating === '12' ? <p>{monster.challenge_rating} (8,400 XP)</p> :
                    monster.challenge_rating === '13' ? <p>{monster.challenge_rating} (10,000 XP)</p> :
                    monster.challenge_rating === '14' ? <p>{monster.challenge_rating} (11,500 XP)</p> :
                    monster.challenge_rating === '15' ? <p>{monster.challenge_rating} (13,000 XP)</p> :
                    monster.challenge_rating === '16' ? <p>{monster.challenge_rating} (15,000 XP)</p> :
                    monster.challenge_rating === '17' ? <p>{monster.challenge_rating} (18,000 XP)</p> :
                    monster.challenge_rating === '18' ? <p>{monster.challenge_rating} (20,000 XP)</p> :
                    monster.challenge_rating === '19' ? <p>{monster.challenge_rating} (22,000 XP)</p> :
                    monster.challenge_rating === '20' ? <p>{monster.challenge_rating} (25,000 XP)</p> :
                    monster.challenge_rating === '21' ? <p>{monster.challenge_rating} (33,000 XP)</p> :
                    monster.challenge_rating === '22' ? <p>{monster.challenge_rating} (41,000 XP)</p> :
                    monster.challenge_rating === '23' ? <p>{monster.challenge_rating} (50,000 XP)</p> :
                    monster.challenge_rating === '24' ? <p>{monster.challenge_rating} (62,000 XP)</p> :
                    monster.challenge_rating === '30' ? <p>{monster.challenge_rating} (155,000 XP)</p> :
                    null
                }
            </div>
            {monster.special_abilities ? monster.special_abilities.map(special => (
                <div key = {special.name}>
                    <p>{special.name}</p>
                    <p>{special.desc}</p>
                </div>
            )) : null}            

            {monster.actions ? monster.actions.map((action, index) => (
                <div key = {index}>
                    <p>Actions: </p>
                    <p>{action.name}</p>
                    <p>{action.desc}</p>
                </div> 
                
            )) : null }

            {monster.legendary_actions ? monster.legendary_actions.map((legendary, index) => (
                <div key = {index}>
                    <p>Legendary Actions:</p>
                    <p>{legendary.name}</p>
                    <p>{legendary.desc}</p>
                </div>
            )) : null}
            
            {monster.spell_list.length > 0 ? monster.spell_list.map((spell, index) => (
                <div key = {index}>
                    <p>Spells</p>
                    <p>{spell.name}</p>
                </div>
            )) : null}










            {/* base stats, just to get them on the page, above is actual format */}
            {/* <p>Alignment: {monster.alignment}</p>
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
            <p>Reactions: {monster.reactions}</p>
            {monster.reactions ? (monster.reactions.map(r => (
               <div key = {r.name}>
                   <p>Reaction: {r.name}</p>
                   <p>Description: {r.desc}</p>
               </div>
            ))) : null}
            <p>Senses: {monster.senses}</p>
            <p>Size: {monster.size}</p>
            <p>{monster.skills}</p>
            <p>Slug: {monster.slug}</p>
            <p>{monster.special_abilities}</p>
            <p>{monster.speed}</p>
            <p>{monster.spell_list}</p>
            <p>Strength: {monster.strength}</p>
            <p>Strength Save: {monster.strength_save}</p>
            <p>Subtype: {monster.subtype}</p>
            <p>Type: {monster.type}</p>
            <p>Wisdom: {monster.wisdom}</p>
            <p>Wisdom Save: {monster.wisdom_save}</p> */}
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