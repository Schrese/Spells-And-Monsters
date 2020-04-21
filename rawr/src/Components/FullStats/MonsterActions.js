// import React from 'react';
// import styled from 'styled-components';

// function MonsterActions(props) {
//     // console.log(props.something);
//     // const actions = props.monsters.find(
//     //     something => `${something.actions}` === props.match.params.actions
//     // );
//     // if(!props.monsters.length || !monster) {
//     //     return <h2>...Loading Monster Data</h2>
//     // }

//     console.log(props)
//     // console.log('individual monster', monster);

//     return(
//         <ActionsContainer>
//             {props.monsters.map(e => {
//                 return(
//                     <div key={e.slug}>
//                         <h2>Hello {e.name}</h2>
//                         {/* {m.actions.forEach(e => {
//                             return(
//                             <div>
//                                 <h2>{e.desc}</h2>  
//                                 <h2>{e.name}</h2>
//                             </div>
//                             )} 
                        
//                         )} */}
                        
//                     </div>
//                 )
//             })}
//             <h2>Actions: {props.actions}</h2>
//         </ActionsContainer>
//     )
// }

// export default MonsterActions;

// const ActionsContainer = styled.div`
//     display: flex;
//     flex-direction: row;
// `