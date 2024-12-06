import React from "react";

function FamilyList(props){
   
    const siblingsListItems = props.familyMembers.map(familyMember => (
        <li key={familyMember}>{familyMember}</li>
    ))
return(
    <section>
    <h2>family members</h2>
    <ul className="ingredients-list" aria-live="polite">{siblingsListItems}</ul>
   {props.familyMembers.length > 3 && <div className="get-recipe-container">
        <div>
            <h3>Ready for a new member?</h3>
            <p>Generate a member from your list of the  members.</p>
        </div>
        <button onClick={props.toggleMemberVisibility}>Get a member</button>
    </div>
   }
</section>

)

}
export default FamilyList;